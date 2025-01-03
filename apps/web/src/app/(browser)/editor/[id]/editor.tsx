"use client";
import { WSGIEditor } from "@bookself/slate-editor/editor";
import { Article } from "@/app/types";
import Cookies from "js-cookie";
import { useCallback, useState } from "react";
import { API_ENDPOINT } from "@/app/utils";
import { Store } from "react-notifications-component";
import { PreviewButton } from "@/components/element/button/PreviewButton";

export const Editor = ({
  initialValue,
  id: slug,
}: {
  id: string;
  initialValue: Article;
}) => {
  const [articleSlug, setArticleSlug] = useState<string | null>(slug);
  const UpdateContent = useCallback(async (body: string) => {
    console.log(body);

    const csrf = Cookies.get("csrftoken");

    try {
      const res = await fetch(`${API_ENDPOINT.article.url}?slug=${articleSlug}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": `${csrf}`,
        },
        body: body,
        credentials: "include",
      });
      if (res.ok) {
        const data: Article = await res.json();
        if (data.slug) {
          window.history.pushState({}, "", `/editor/${data.slug}`);
          setArticleSlug(data.slug);
          const res = await fetch("/api/revalidate?path=/");
          const ata = await res.json();
          console.log(ata);
          // action();
        }
        console.log("Success");
      } else {
        console.log("Failed");
        Store.addNotification({
          title: "Error",
          message: "Article upload failed",
          type: "danger",
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            // onScreen: true,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [articleSlug]);
  const DeleteArticle = async () => {
    const csrf = Cookies.get("csrftoken");

    try {
      const res = await fetch(
        `${API_ENDPOINT.article.url}?slug=${slug}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": `${csrf}`,
          },
          credentials: "include",
        }
      );
      if (res.ok) {
        console.log("Article deleted");
        const res = await fetch("/api/revalidate?path=/");
        const ata = await res.json();
        console.log(ata);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <PreviewButton id={articleSlug} />

      <WSGIEditor onChange={UpdateContent} initialValue={initialValue.content} />
    </div>
  );
};

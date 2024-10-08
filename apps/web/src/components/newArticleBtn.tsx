"use client";
import { API_ENDPOINT } from "@/app/utils";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import * as NProgress from "nprogress";

export const NewArticleButton = () => {
    const router = useRouter();
    const newArticle = async () => {
        const csrf = Cookies.get("csrftoken");
        try {
          const res = await fetch(API_ENDPOINT.article.url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-CSRFToken": `${csrf}`,
            },
            credentials: "include",
          });
    
          if (res.ok) {
            console.log("Article created");
            const data = await res.json();
            NProgress.start();
            router.push(`/editor/${data.slug}`);
          }
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <button onClick={(e) => {
            newArticle();
        }} className="absolute bg-blue-500 rounded-2xl right-4 bottom-4 p-2">
          New +
        </button>
    )
}
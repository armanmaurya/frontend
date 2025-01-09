
import { API_ENDPOINT } from "@/app/utils";
import { RichTextEditor } from "@/components/blocks/RichTextEditor";
import { notFound } from "next/navigation";
import React from "react";


type PageResponse = {
  title: string;
  content: string;
};

const Page = async ({
  params,
}: {
  params: Promise<{ username: string; notebook: string; path: string[] }>;
}) => {
  const { username, notebook, path } = await params;
  let res;
  if (path) {
    res = await fetch(
      `${API_ENDPOINT.notebook.url}/${username}/${notebook}/${path.join("/")}`
    );
  } else {
    res = await fetch(`${API_ENDPOINT.notebook.url}/${username}/${notebook}`);
  }

  // console.log("res", )
  let data: PageResponse;
  if (res.ok) {
    data = await res.json();
  } else {
    return notFound();
  }


  // console.log("data", res.status);
  return (
    <RichTextEditor initialValue={data.content} title={data.title} />
  );
};

export default Page;

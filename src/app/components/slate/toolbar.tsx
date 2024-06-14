import { CustomEditor } from "./utils";
import { useSlate } from "slate-react";
import { API_ENDPOINT } from "@/app/utils";
import Cookies from "js-cookie";

export const SlateToolBar = ({onSubmit} : {onSubmit:() => {}}) => {
  const editor = useSlate();
  //   console.log("editor", editor.operations);
  //   editor.onChange = (value) => {
  //     console.log("Changed");
  //   };
  const SubmitContent = async () => {
    const csrf = Cookies.get("csrftoken");
    try {
      const res = await fetch(`${API_ENDPOINT.articleUpload.url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": `${csrf}`,
        },
        body: JSON.stringify({
          title: "This is the title",
          content: JSON.stringify(editor.children),
        }),
        credentials: "include",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const printdata = () => {
    console.log("editor", JSON.stringify(editor.children));
  };
  return (
    <div className="flex justify-between border p-3 font-serif">
      <div className="toolbar flex">
        <button
          className={`px-2 hover:bg-slate-100 ${
            CustomEditor.isBoldMarkActive(editor) ? "bg-slate-100" : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            CustomEditor.toggleBoldMark(editor);
            // printdata();
          }}
        >
          <strong>B</strong>
        </button>
        <button
          className={`px-2 mx-2 hover:bg-slate-100 ${
            CustomEditor.isItalicMarkActive(editor) ? "bg-slate-100" : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            CustomEditor.toggleItalicMark(editor);
          }}
        >
          <em>I</em>
        </button>
        <button
          className="px-2 hover:bg-slate-100"
          onClick={(event) => {
            event.preventDefault();
            // CustomEditor.toggleUnderlineMark(editor);
          }}
        >
          <u>U</u>
        </button>
        <button
          className="px-2 hover:bg-slate-100"
          onClick={(event) => {
            event.preventDefault();
            CustomEditor.toggleCodeBlock(editor);
          }}
        >
          {"</>"}
        </button>
        <button
          className={`px-2 mx-2 hover:bg-slate-100 ${
            CustomEditor.isH1Active(editor) ? "bg-slate-100" : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            CustomEditor.toggleH1Block(editor);
          }}
        >
          H1
        </button>
        <button
          className="px-2 hover:bg-slate-100"
          onClick={(event) => {
            event.preventDefault();
            CustomEditor.toggleH2Block(editor);
          }}
        >
          H2
        </button>
        <button
          className="px-2 hover:bg-slate-100"
          onClick={(event) => {
            event.preventDefault();
            CustomEditor.toggleH3Block(editor);
          }}
        >
          H3
        </button>
        <button
          className="px-2 hover:bg-slate-100"
          onClick={(event) => {
            event.preventDefault();
            console.log("H4");
            CustomEditor.toggleH4Block(editor);
          }}
        >
          H4
        </button>
        <button
          className="px-2 hover:bg-slate-100"
          onClick={(event) => {
            event.preventDefault();
            CustomEditor.toggleH5Block(editor);
          }}
        >
          H5
        </button>
        <button
          className="px-2 hover:bg-slate-100"
          onClick={(event) => {
            event.preventDefault();
            CustomEditor.toggleH6Block(editor);
          }}
        >
          H6
        </button>
      </div>
      <div>
        <button
          className="hover:bg-slate-100 bg-sky-600 p-2 rounded-md"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

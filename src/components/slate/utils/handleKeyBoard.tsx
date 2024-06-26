import { SlateCustomEditor } from "../utils";
import {
  Path,
  Editor as SlateEditor,
  Element as SlateElement,
  Transforms,
} from "slate";
import { NodeType } from "../types";
import { Text } from "slate";

export const handleKeyBoardFormating = (
  event: React.KeyboardEvent<HTMLDivElement>,
  editor: SlateEditor
) => {
  if (event.ctrlKey) {
    switch (event.key) {
      case "1":
        event.preventDefault();
        SlateCustomEditor.toggleBlock(editor, NodeType.H1);
        break;
      case "2":
        event.preventDefault();
        SlateCustomEditor.toggleBlock(editor, NodeType.H2);
        break;
      case "3":
        event.preventDefault();
        SlateCustomEditor.toggleBlock(editor, NodeType.H3);
        break;
      case "4":
        event.preventDefault();
        SlateCustomEditor.toggleBlock(editor, NodeType.H4);
        break;
      case "5":
        event.preventDefault();
        SlateCustomEditor.toggleBlock(editor, NodeType.H5);
        break;
      case "6":
        event.preventDefault();
        SlateCustomEditor.toggleBlock(editor, NodeType.H6);
        break;
      case "`":
        event.preventDefault();
        SlateCustomEditor.toggleBlock(editor, NodeType.CODE);
        break;
      case "b":
        event.preventDefault();
        SlateCustomEditor.toggleMark(editor, "bold");
        break;
      case "i":
        event.preventDefault();
        SlateCustomEditor.toggleMark(editor, "italic");
        break;
      case "u":
        event.preventDefault();
        SlateCustomEditor.toggleMark(editor, "underline");
        break;
      case "d":
        event.preventDefault();
        SlateCustomEditor.toggleMark(editor, "code");
        break;
      case "Enter":
        event.preventDefault();
        SlateCustomEditor.insertParagraph(editor);
      // if (SlateCustomEditor.isCodeBlockActive(editor)) {
      // }
    }
  }
  if (event.shiftKey) {
    switch (event.key) {
      case "Enter":
        event.preventDefault();
        SlateCustomEditor.insertLineBreak(editor);

        break;
      case "*":
        event.preventDefault();
        SlateCustomEditor.toggleListBlock(editor, NodeType.UNORDERED_LIST);
        break;
      case "&":
        event.preventDefault();
        SlateCustomEditor.toggleListBlock(editor, NodeType.ORDERED_LIST);
        break;
    }
  }
  if (event.key === "Backspace") {
    if (editor.selection) {
      const text = SlateEditor.string(editor, editor.selection.focus.path);
      if (text.length === 0 && SlateCustomEditor.isListActive(editor)) {
        event.preventDefault();
        SlateCustomEditor.toggleListBlock(editor);
        return;
      }
    }
  }
  if (event.key === "Enter" && !event.shiftKey && !event.ctrlKey) {
    // const isListItemActive = SlateCustomEditor.isListItemActive(editor);
    // event.preventDefault();
    const [match] = SlateEditor.nodes(editor, {
      match: (n) => SlateElement.isElement(n) && SlateEditor.isBlock(editor, n),
      mode: "lowest",
    });

    if (match[0].type) {
      const shortcut = handleEnterKey[`${match[0].type}`];
      if (shortcut) {
        event.preventDefault();
        shortcut(editor);
      }
    }
  }
  if (event.key === " ") {
    if (editor.selection) {
      const [match] = SlateEditor.nodes(editor, {
        match: (n) => SlateElement.isElement(n),
        mode: "lowest",
      });

      if (match[0].type === NodeType.LINK && SlateElement.isElement(match[0])) {
        const string = match[0].children[0].text;
        console.log(string);
        if (string.length === editor.selection.focus.offset) {
          event.preventDefault();
          const nextPath = SlateEditor.next(editor);
          if (nextPath) {
            Transforms.select(editor, nextPath[1]);
            Transforms.insertText(editor, " ");
          }

          // Transforms.select(editor, nextPath);
        }
      }
    }
  }
};

interface IHandleEnterKey {
  [key: string]: (editor: SlateEditor) => void;
}

const handleEnterKey: IHandleEnterKey = {
  "list-item": SlateCustomEditor.insertListItem,
  paragraph: SlateCustomEditor.insertParagraph,
  "heading-one": SlateCustomEditor.insertParagraph,
  "heading-two": SlateCustomEditor.insertParagraph,
  "heading-three": SlateCustomEditor.insertParagraph,
  "heading-four": SlateCustomEditor.insertParagraph,
  "heading-five": SlateCustomEditor.insertParagraph,
  "heading-six": SlateCustomEditor.insertParagraph,
  code: SlateCustomEditor.insertLineBreak,
  quote: SlateCustomEditor.insertLineBreak,
};

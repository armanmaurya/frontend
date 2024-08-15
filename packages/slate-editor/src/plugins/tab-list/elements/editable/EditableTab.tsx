import { RenderElementProps } from "slate-react";
import { useContext } from "react";
import { EditableTabsContext } from "../context";
import { NodeType } from "../../../../types";
import { Tab } from "../base/Tab";

export const EditableTab = (props: RenderElementProps) => {
  return <Tab {...props} />;
};
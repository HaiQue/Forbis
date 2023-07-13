import React from "react";
import Analysis from "../pages/Analysis";
import Currencies from "../pages/Currencies";
import { currentTheme } from "./color_themes";

export interface ILinkListItem {
  name: string;
  url: string;
  key: number;
  isIndex?: boolean;
  description?: string;
  getElement: () => JSX.Element;
  imagesrc?: string;
}

const layoutHeightBreakpoint = "768px";

export const LINK_LIST: ILinkListItem[] = [
  {
    name: "Currencies",
    url: "/",
    key: 1,
    isIndex: true,
    getElement: () => <Currencies layoutbreakpoint={layoutHeightBreakpoint} />,
  },
  {
    name: "Analysis",
    url: "/Analysis",
    key: 2,
    description: "test",
    getElement: () => (
      <Analysis
        theme={currentTheme}
        layoutbreakpoint={layoutHeightBreakpoint}
      />
    ),
  },
];

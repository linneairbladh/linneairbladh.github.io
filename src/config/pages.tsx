import { FunctionComponent, ReactElement } from "react";
import ContactPage from "../pages/ContactPage";
import NurPage from "../pages/NurPage";
import StartPage from "../pages/StartPage";
import ConceptPage from "../pages/ConceptPage";

export interface Page {
  title: string;
  path: string;
  element: ReactElement;
}

export const pages: Page[] = [
  {
    title: "Start",
    path: "/",
    element: <StartPage />,
  },
  {
    title: "NUR",
    path: "/",
    element: <NurPage />,
  },
  {
    title: "Kontakt",
    path: "/",
    element: <ContactPage />,
  },
  {
    title: "Konceptet",
    path: "/",
    element: <ConceptPage />,
  },
];

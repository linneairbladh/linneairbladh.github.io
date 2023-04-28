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
    path: "/nur",
    element: <NurPage />,
  },
  {
    title: "Kontakt",
    path: "/kontakt",
    element: <ContactPage />,
  },
  {
    title: "Konceptet",
    path: "/koncept",
    element: <ConceptPage />,
  },
];

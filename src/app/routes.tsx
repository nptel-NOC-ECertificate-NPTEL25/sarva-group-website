import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { SolarSolutions } from "./pages/SolarSolutions";
import { Calculator } from "./pages/Calculator";
import { SubsidyGuide } from "./pages/SubsidyGuide";
import { Installations } from "./pages/Installations";
import { WhyChoose } from "./pages/WhyChoose";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "solutions", Component: SolarSolutions },
      { path: "calculator", Component: Calculator },
      { path: "subsidy", Component: SubsidyGuide },
      { path: "installations", Component: Installations },
      { path: "why-choose", Component: WhyChoose },
      { path: "about", Component: About },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
    ],
  },
]);

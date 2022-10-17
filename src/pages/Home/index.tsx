// import image from "../../assets/home.svg";

import { AboutUs } from "./Components/AboutuS";
import { Contact } from "./Components/Contact";
import { Features } from "./Components/Features";
import Introduction from "./Components/Introduction";

export const Home = () => {
  return (
    <>
      <Introduction />
      <AboutUs />
      <Features />
      <Contact />
    </>
  );
};

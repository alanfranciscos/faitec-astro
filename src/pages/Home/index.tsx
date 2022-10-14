// import image from "../../assets/home.svg";

import { AboutUs } from "./Components/AboutuS";
import { Contact } from "./Components/Contact";
import { Features } from "./Components/Features";
import Introduction from "./Components/Introduction";

// import { AboutUs } from "../AboutuS"
// import { Contact } from "../Contact"
// import { Features } from "../Features"
// import { Gallery } from "../Gallery"
// import { Container, Text } from "./style";

export const Home = () => {
  return (
    <>
      <Introduction />
      <AboutUs />
      <Features />
      <Contact />
      {/* <Gallery />
      <Features />
      <AboutUs />
      <Contact /> */}
    </>
  );
};

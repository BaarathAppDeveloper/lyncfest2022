import React from "react";
import Sponsers from "../symp/sponsors";
import Nav from "./Nav";
import Steps from "./Steps";
import Title from "./Title";
import Footer from "./Footer";
import Domains from "./Domains";

const Home = () => {
  return (
    <div class=" overflow-x-hidden bg-black  ">
      <Nav />
      <Title />
      <Steps />
      <Domains />
      <Sponsers />
      <Footer />
    </div>
  );
};
export default Home;

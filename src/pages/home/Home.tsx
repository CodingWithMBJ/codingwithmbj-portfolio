import About from "../../features/about/components/About";
import Hero from "../../features/featured-stack/components/Hero";
import Contact from "../../features/contact/components/Contact";
import LatestWork from "../../features/latest-work/components/LatestWork";

import ActionNav from "../../shared/components/navigation/ActionNav";

import "./Home.css";

const Home = () => {
  return (
    <>
      <ActionNav />

      <main className="home-page">
        <Hero />
        <About />
        <LatestWork />
        <Contact />
      </main>
    </>
  );
};

export default Home;

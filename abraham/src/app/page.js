import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Servicios from "./components/Servicios";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="main">
      <>
        <Banner />
        <About />
        <Servicios />
        <Contact />
      </>
    </main>
  );
}

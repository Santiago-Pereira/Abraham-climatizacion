import { Box } from "@mui/material";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Marcas from "./components/Marcas";
import Servicios from "./components/Servicios";
import styles from "./page.module.css";
import { Roboto } from "next/font/google";
import Obras from "./components/Obras";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <>
        <Box className={"main"}>
          <Banner />
          <About />
          <Servicios />
          <Contact />
          <Marcas />
          <Obras />
        </Box>
      </>
    </main>
  );
}

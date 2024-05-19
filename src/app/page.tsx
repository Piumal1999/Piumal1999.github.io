import Banner from "./components/banner";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className="items-center justify-between">
        <Banner />

        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

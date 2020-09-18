import Header from "../components/Page_Layout/Header";
import About from "../components/Page_Layout/About";
import Events from "../components/Page_Layout/Events";
import Contact from "../components/Page_Layout/Contact";
import Resources from "../components/Page_Layout/Resources";

export default function HomePage() {
  return (
    <div>
      <Header />
      {/* <-- Page content begins --> */}
      <div className="w3-content" style={{ maxWidth: 1100 }}>
        <About />
        <hr />
        <Events />
        <hr />
        <Resources />
        <hr />
        <Contact />
      </div>
      {/* <-- End page content --> */}
    </div>
  );
}

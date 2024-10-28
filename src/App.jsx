import Hello from "./components/Hello.jsx";
import Navbar from "./layout/Navbar.jsx";
import HeaderSection from "./layout/HeaderSection.jsx";
import AboutUsContent from "./layout/AboutUsContent.jsx";
import "./App.css";

export default function App() {
  const listName = [`John`, `Paul`, `George`, `Ringo`];

  return (
    <>
      {/* <div>
        {listName.map((name) => (
          <Hello name={name} />
        ))}
      </div> */}
      <Navbar />
      <HeaderSection navpage={`About`} />
      <main>
        <AboutUsContent />
      </main>
    </>
  );
}

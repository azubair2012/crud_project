import Navbar from "./components/Navbar.jsx";
import Input from "./components/Input.jsx";
import Footer from "./components/Footer.jsx";
import Databtn from "./components/Databtn.jsx";

export default function Home() {
  return (
    <main className=" bg-slate-950 h-[100vh] flex flex-col gap-8 items-center">
      <Navbar />
      <Input />
      <Databtn />
      <Footer />
    </main>
  );
}

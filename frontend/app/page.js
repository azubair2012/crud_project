import Navbar from "./components/Navbar.jsx";
import Table from "./components/Table.jsx";
import Input from "./components/Input.jsx";
export default function Home() {
  return (
    <main className=" bg-slate-950 h-[100vh] flex flex-col gap-4 items-center">
      <Navbar />
      <Input />
      <Table />
    </main>
  );
}

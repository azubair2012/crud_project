import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex gap-[128px] w-full text-white items-baseline border-b-4 py-4 bg-slate-950">
        <div className="text-[24px]">
          <Link href="/">STUDIO ZUBAIR</Link>
        </div>
        <div className="text-[64px] font-extrabold">
          <h1>CRUD Project</h1>
          <Image></Image>
        </div>
        <div className="flex justify-between gap-8 text-[24px]">
          <Link href="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

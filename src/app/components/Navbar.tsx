import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="mx-auto border-b border-zinc-700">
      <div className="max-w-[500px] mx-auto p-4 border-l border-dotted border-r border-zinc-700 flex justify-between items-center">
        <Image src="/globe.svg" alt="logo" width={26} height={26} />

        <a href="#" className="hover:underline text-zinc-500 text-sm">
          Lest talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

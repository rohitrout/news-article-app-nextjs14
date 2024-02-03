import Image from "next/image";
import Link from "next/link";
import LogoutBtn from "./LogoutBtn";

const Navbar = () => {
  return (
    <div className="fixed z-20 w-full flex justify-between items-center px-8 lg:px-16 bg-white border-b-2 rounded-lg shadow-md mb-8 text-sm md:font-extrabold md:text-xl">
      <Link href="/">
        {" "}
        <div className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="logo" height={70} width={70} />
          <span className="hidden md:block tracking-tight md:tracking-wider">TENTICLES.</span>
        </div>
      </Link>      
      <div className="flex gap-3 items-center">      
        <LogoutBtn/>
      </div>
    </div>
  );
};

export default Navbar;

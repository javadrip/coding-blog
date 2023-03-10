import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.jpg";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src={logo}
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
        <h1>The Code Life</h1>
      </div>
      <div>
        <Link
          href="https://github.com/javadrip"
          className="px-5 py-5 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Follow me on GitHub
        </Link>
      </div>
    </header>
  );
}

export default Header;

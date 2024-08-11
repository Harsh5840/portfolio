import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-out">
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                Harsh<span className="text-accent">.</span>dev
            </h1>
            </Link>

            {/* desktop nav */}
            <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
            <Button>Hire me</Button>
            </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">mobile nav</div>


        </div>
    </header>
  );
};

export default Header;
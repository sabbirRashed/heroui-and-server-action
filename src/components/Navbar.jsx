import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";


const Nav = () => {
    return (
        <nav className="bg-border py-3 grid grid-cols-3 justify-center  items-center">
            <ul className="flex justify-center items-center gap-6 col-span-2">
                <li className="hover:bg-gray-400 px-2"><Link href='/'>Home</Link></li>
                <li className="hover:bg-gray-400 px-2"><Link href='/tasks'>Tasks</Link></li>
                <li className="hover:bg-gray-400 px-2"><Link href='/heroui'>HeroUI</Link></li>
            </ul>
            <div>
                <ThemeSwitch></ThemeSwitch>
            </div>
        </nav>
    );
};

export default Nav;
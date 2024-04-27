import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={"max-w-xl mx-auto my-6 "}>
      <ul className={"flex items-center justify-between "}>
        <li className={"hover:text-[#149eca] duration-300 cursor-pointer "}><NavLink to={"/"} className={"p-2.5"}>Home</NavLink></li>
        <li className={"hover:text-[#149eca] duration-300 cursor-pointer"}><NavLink to={"/about"} className={"p-2.5"}>About</NavLink></li>
        <li className={"hover:text-[#149eca] duration-300 cursor-pointer"}><NavLink to={"/contact"} className={"p-2.5"}>Contact</NavLink></li>
        <li className={"hover:text-[#149eca] duration-300 cursor-pointer"}><NavLink to={"/learn"} className={"p-2.5"}>Learn</NavLink></li>
        <li className={"hover:text-[#149eca] duration-300 cursor-pointer"}><NavLink to={"/contribute"} className={"p-2.5"}>Contribute</NavLink></li>
        <li className={"hover:text-[#149eca] duration-300 cursor-pointer"}><NavLink to={"/login"} className={"p-2.5"}>Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
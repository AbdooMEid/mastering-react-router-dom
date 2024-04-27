import {NavLink} from "react-router-dom";

const LearnAside = () => {
  return (
    <aside className={"px-3"}>
      <nav className={"my-2"}>
        <ul className={"flex flex-col"}>
          <li className={"hover:text-[#149eca] duration-200 cursor-pointer my-4"}><NavLink to={"/learn"} end className={"p-3"}>Quick Start</NavLink></li>
          <li className={"hover:text-[#149eca] duration-200 cursor-pointer my-4 "}><NavLink to={"/learn/thinking-in-react"} className={"p-3"}>Thinking in React</NavLink></li>
          <li className={"hover:text-[#149eca] duration-200 cursor-pointer my-4"}><NavLink to={"/learn/installation"} className={"p-3 "}>Installation</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LearnAside;
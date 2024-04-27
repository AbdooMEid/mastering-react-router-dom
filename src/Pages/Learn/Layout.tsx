import Navbar from "../../components/Navbar.tsx";
import LearnAside from "../../components/LearnAside.tsx";
import {Outlet} from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      <Navbar/>
      <div className={"flex justify-items-end gap-x-40"}>
        <LearnAside/>
        <Outlet/>
      </div>
    </>
  );
};

export default LayoutPage;
import dashBg from "../../assets/dashBg.svg";
import Navbar from "./dashNavbar/Navbar";

const DashBroad = ({ onCheckLogin }: { onCheckLogin: VoidFunction }) => {
  return (
    <div className="italic h-screen text-inherit">
      <Navbar onCheckLogin={onCheckLogin} />
      <div className="px-20 h-full  bg-neutral-100">
        <div className="px-44 pt-20  w-3/4">
          <h2 className="ml-36 text-2xl">Welcome to Demo App</h2>
          <img src={dashBg} className="w-full" alt="React logo" />
        </div>
        <p className="block  pt-32">COPYRIGHT © 2020</p>
      </div>
    </div>
  );
};

export default DashBroad;

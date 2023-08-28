import Sider from "../static/Sider";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  //   const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);
  return (
    <div>
      <Sider />
      <div className="w-full flex justify-end">
        <div
          className={`duration-300 transition-all w-[${
            toggle ? "calc(100vw-150px)" : "calc(100vw-60px)"
          }] pl-2`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

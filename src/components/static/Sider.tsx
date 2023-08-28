import {
  BsLayoutSidebarInset,
  BsLayoutSidebarInsetReverse,
} from "react-icons/bs";
import { BiHomeSmile, BiCartAdd } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, changeToggle } from "../../global/globalState";
import { NavLink } from "react-router-dom";
const Sider = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);
  const cart = useSelector((state: any) => state.toggle);

  const onChangeState = () => {
    dispatch(changeToggle(!toggle));
  };
  return (
    <div>
      <div
        className={`overflow-hidden w-[${
            toggle ? "150px" : "60px"
          }] h-[100vh] border-r bg-purple-100 border-[silver] fixed transition-all duration-300`}
      >
        <div className="mt-8 w-full justify-center flex">
          {toggle ? (
            <BsLayoutSidebarInset
              className="text-[25px] text-[purple] cursor-pointer hover:scale-[1.08] transition-all duration-300"
              onClick={onChangeState}
            />
          ) : (
            <BsLayoutSidebarInsetReverse
              className="text-[25px] text-[purple] cursor-pointer hover:scale-[1.08] transition-all duration-300"
              onClick={onChangeState}
            />
          )}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <NavLink
          to={`/`}
        //   className={({ isActive }) => {
        //     isActive ? "text-[green]" : "text-[red]";
        //   }}
        >
          <div className="text-purple-900  justify-centerflex px-4 hover:bg-slate-200 py-2 hover:cursor-pointer duration-300 transition-all items-center flex ">
            <div>
              <BiHomeSmile className="text-[25px] mr-2" />
            </div>
            {toggle && <span>Home</span>}
          </div>
        </NavLink>
        <br />
        <NavLink to={`/check`}>
          <div className="text-purple-900  justify-centerflex px-4 hover:bg-slate-200 py-2 hover:cursor-pointer duration-300 transition-all items-center flex ">
            <div className="relative">
              <div className="absolute w-[15px] h-[15px] justify-center flex items-center text-[10px] left-0 top-[-10px]  rounded-full  bg-rose-400 text-white">
                {cart.length}
              </div>
              <BiCartAdd className="text-[25px] mr-2" onClick={() => {
                dispatch(addToCart(cart))
              }}/>
            </div>
            {toggle && <span>Cart</span>}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sider;

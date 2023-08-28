import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineVisibility } from "react-icons/md";
import { useProduct } from "../Hooks/useProducts";

const MainPage = () => {
  let myData: any = [];
  let star: any = [];
  const rand = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  Array.from({ length: 5 }, () => {
    const randNumb = (max: number, min: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    for (let i = 1; i <= randNumb(1, 0); i++) {
      myData.push("⭐");
    }
    star.push(myData.join(""));
  });

  const { data, isLoading } = useProduct();
  return (
    <div>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div className="flex flex-wrap justify-center">
            {
                data.map((el: any) => {
                    return <div className="mt-2 m-3 border" key={el.id}>
                    <div className="w-[250px] h-[300px] relative">
                      <img
                        src={el.image}
                        className="w-[250px] h-[300px] bg-gray-400 object-cover"
                      />
                      <div className="w-[250px] justify-center flex absolute h-[300px] items-end bottom-3 opacity-0 hover:opacity-100 transition-all">
                        <div className="w-[30px] h-[30px] rounded-full hover:text-white hover:bg-[silver] duration-300 transition-all cursor-pointer bg-white flex items-center mr-3 justify-center">
                          <MdOutlineVisibility />
                        </div>
                        <div className="w-[30px] h-[30px] rounded-full hover:bg-[silver] hover:text-white duration-300 transition-all cursor-pointer bg-white flex items-center justify-center">
                          <FiShoppingBag />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[250px] items-center justify-center">
                      {star[rand(4, 0)]}{" "}
                      <span className="capitalize font-semibold text-[12px]">
                        (review)
                      </span>
                    </div>
                    <div className="w-[200px] leading-0 text-[10px] pl-2">{el.title}</div>
                    <div className="w-[250px] flex justify-center items-center">
                      <div className="mr-2 line-through text-[silver]">₦3,000</div>
                      <div className="text-rose-300">₦2,000</div>
                    </div>
                  </div> 
                })
            }
        </div>
      )}
    </div>
  );
};

export default MainPage;

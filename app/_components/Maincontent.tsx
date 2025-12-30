"use client"
import { Drop } from "./Dropdown";
import { Search } from "./search";
import { OpenModal } from "./Modal";
import { ItemRendering } from "./itemRendering";
import { productszu } from "../_store/data";
export function Main() {
  const reset = productszu((state) => state.setReset);
  return (
    <div className="w-[90%]">
      <div className="mt-8  ml-5 flex items-center justify-around flex-wrap w-[95%] h-auto overflow-y-scroll">
        <span className="text-3xl font-bold m-3">Inventory</span>
        <div className="flex flex-wrap">
          <Drop c={"Brand"}/>
          <Drop c={"Category"}/>
          <Search/>
          <button
            className="bg-violet-400 h-[40px] w-[100px] cursor-pointer  m-2 rounded-md"
            onClick={() => {
              reset();
            }}
          >
            Reset Filters
          </button>
          <OpenModal />
        </div>
      </div>
      <div className="w-[98%] h-[430px] m-auto border-[1px] border-green-100 mt-5">
        <div className="w-full h-[30px] flex">
          <div className="flex-1">Image</div>
          <div className="flex-1">Name</div>
          <div className="flex-1">Category</div>
          <div className="flex-1">Price</div>
          <div className="flex-1">Expand/Details</div>
        </div>
        <ItemRendering/>
      </div>
    </div>
  );
}

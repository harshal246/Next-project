"use client"
import { Drop } from "./Dropdown";
import { SearchComponent } from "./search";
import { OpenModal } from "./Modal";
import { ItemRendering } from "./itemRendering";
import { productszu } from "../_store/data";
import { Overview } from "./Overview";
export function Main() {
  const reset = productszu((state) => state.setReset);
  return (
    <div className="w-[98%]">
      <div className="text-3xl font-bold p-[30px]">Inventory</div>
      <Overview/>
      <div className="flex items-center flex-wrap justify-center w-[100%] m-auto h-auto p-[10px] pt-[20px]">
        <div className="flex flex-wrap justify-between w-[100%] gap-[10px] p-[20px] bg-white border-2 border-violet-200 rounded-2xl">
          <SearchComponent/>
          <Drop c={"Brand"}/>
          <Drop c={"Category"}/>
          <button
            className="bg-violet-400  w-[100px] h-[40px] cursor-pointer mt-7 rounded-md text-white"
            onClick={() => {
              reset();
            }}
          >
            Reset Filters
          </button>
          <OpenModal />
        </div>
      </div>
      <div className="w-[99%]  m-auto p-5 overflow-hidden  bg-white border-2 border-violet-200 rounded-2xl">
        <div className="w-full h-[30px] flex border-b-2 border-violet-200">
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

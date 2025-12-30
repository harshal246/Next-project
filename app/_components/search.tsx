import { productszu } from "../_store/data";


export function Search() {
  const p = productszu((state) => state.searching);
  const searchValue = productszu((state) => state.search);
  return (
    <input
      value={searchValue}
      onChange={(e) => {
        p(e.target.value);
      }}
      type="text"
      className="w-[200px] h-[40px] rounded-md p-3 m-2 border-[1px] border-black flex flex-1"
      placeholder="Search your item here"
    />
  );
}
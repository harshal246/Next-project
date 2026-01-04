import { productszu } from "../_store/data";

import { Search} from 'lucide-react';



// export function SearchComponent() {
//   const p = productszu((state) => state.searching);
//   const searchValue = productszu((state) => state.search);
//   return (
//     <div className="flex flex-2 flex-col">
//       <label className="w-[100%] text-sm font-semibold ml-2">
//         Search Products
//       </label>
//       <input
//         value={searchValue}
//         onChange={(e) => {
//           p(e.target.value);
//         }}
//         type="text"
//         className="h-[40px] rounded-md pl-3 border-[1px] border-2 border-violet-200 m-2"
//         placeholder="Search your item here"
//       />
//     </div>
//   );
// }
export function SearchComponent() {
  const p = productszu((state) => state.searching);
  const searchValue = productszu((state) => state.search);
  return (
    <div className="flex flex-col flex-2">
      <label className="w-full text-sm font-semibold ml-2">
        Search Products
      </label>
      <div className="relative m-2 flex flex-1">
        <Search className="absolute left-3 top-3 text-violet-400" size={20} />
        <input
          value={searchValue}
          onChange={(e) => {
            p(e.target.value);
          }}
          type="text"
          className="h-[40px] rounded-md pl-10 border-[1px] border-2 border-violet-200 flex flex-1 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
          placeholder="Search your item here"
        />
      </div>
    </div>
  );
}
// export function Search() {
//   const p = productszu((state) => state.searching);
//   const searchValue = productszu((state) => state.search);
//   return (
//     <div className="flex flex-2 flex-col">
//       <label className="w-[100%] text-sm font-semibold ml-2">
//         Search Products
//       </label>
//       <input
//         value={searchValue}
//         onChange={(e) => {
//           p(e.target.value);
//         }}
//         type="text"
//         className="h-[40px] rounded-md pl-3 border-[1px] border-2 border-violet-200 m-2"
//         placeholder="Search your item here"
//       />
//     </div>
//   );
// }
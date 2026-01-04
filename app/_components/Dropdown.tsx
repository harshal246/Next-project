"use client"
import { Products, productszu } from "../_store/data";


interface Props{
  c:"Brand"|"Category"
}
export function Drop({c}:Props) {
  const filterByCategory = productszu((s) => s.filterByCategory);
  const d = productszu((state) => state.dupli);
  const filterBybrand = productszu((s) => s.filterByBrand);
  const reset = productszu((s) => s.resetProducts);
  const BValue = productszu((s) => s.Brand);
  const CValue = productszu((s) => s.category);
  const res = productszu((s) => s.setRes);
  // console.log(filterByCategory,filterBybrand)
  // console.log(p,c)
  return (
    <div className="flex flex-1 flex-col">
      <label className="block text-sm font-semibold  ml-2">
        {c}
      </label>
      <select
        className="p-2 m-2 border rounded-md cursor-pointer border-1 border-violet-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
        value={c === "Brand" ? BValue : CValue}
        onChange={(e) => {
          const value = e.target.value;

          if (value === "") {
            res("",c)
            reset();
            return;
          }

          if (c === "Brand") {
            filterBybrand(value);
          } else {
            filterByCategory(value);
          }

          res(value, c);
        }}
      >
        <option value="">
          {c}: All brands
        </option>

        {d.map((itm: Products, indx: number) => (
          <option
            key={indx}
            value={c === "Brand" ? itm.brand : itm.mainCategory}
          >
            {c === "Brand" ? itm.brand : itm.mainCategory}
          </option>
        ))}
      </select>
    </div>
  )
}

// export function Drop({c}:Props) {
//   const filterByCategory = productszu((s) => s.filterByCategory);
//   const d = productszu((state) => state.dupli);
//   const filterBybrand = productszu((s) => s.filterByBrand);
//   const reset = productszu((s) => s.resetProducts);
//   const BValue = productszu((s) => s.Brand);
//   const CValue = productszu((s) => s.category);
//   const res = productszu((s) => s.setRes);
//   // console.log(filterByCategory,filterBybrand)
//   // console.log(p,c)
//   return (<select
//   className="p-2 border rounded-md cursor-pointer m-2 flex flex-1"
//   value={c === "Brand" ? BValue : CValue}
//   onChange={(e) => {
//     const value = e.target.value;

//     if (value === "") {
//       res("",c)
//       reset();
//       return;
//     }

//     if (c === "Brand") {
//       filterBybrand(value);
//     } else {
//       filterByCategory(value);
//     }

//     res(value, c);
//   }}
// >
//   <option value="">
//     {c}: Not Selected
//   </option>

//   {d.map((itm: Products, indx: number) => (
//     <option
//       key={indx}
//       value={c === "Brand" ? itm.brand : itm.mainCategory}
//     >
//       {c === "Brand" ? itm.brand : itm.mainCategory}
//     </option>
//   ))}
// </select>
//   )
  // return (
  //   <select
  //     className="p-2 border rounded-md cursor-pointer m-2 flex flex-1"
  //     value={c == "Brand" ? BValue : CValue}
  //     onChange={(e) => {
  //       const v = e.target.value;
  //       console.log(v);
  //       res(v, c);
  //     }}
  //   >
  //     <option
  //       value=""
  //       onClick={() => {
  //         reset();
  //       }}
  //     >
  //       {c}:Not Selected{" "}
  //     </option>
  //     {d.map((itm:Products, indx:number) => {
  //       return (
  //         <option
  //           value={itm.name}
  //           key={indx}
  //           onClick={() => {
  //             {
  //               c == "Brand"

  //                 ? filterBybrand(itm.brand!)
  //                 : filterByCategory(itm.mainCategory!);
  //             }
  //           }}
  //         >
  //           {c == "Brand" ? itm.brand : itm.mainCategory}
  //         </option>
  //       );
  //     })}
  //   </select>
  

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
    <select
      className="p-2 border rounded-md cursor-pointer m-2 flex flex-1"
      value={c == "Brand" ? BValue : CValue}
      onChange={(e) => {
        const v = e.target.value;
        console.log(v);
        res(v, c);
      }}
    >
      <option
        value=""
        onClick={() => {
          reset();
        }}
      >
        {c}:Not Selected{" "}
      </option>
      {d.map((itm:Products, indx:number) => {
        return (
          <option
            value={itm.name}
            key={indx}
            onClick={() => {
              {
                c == "Brand"

                  ? filterBybrand(itm.brand!)
                  : filterByCategory(itm.mainCategory!);
              }
            }}
          >
            {c == "Brand" ? itm.brand : itm.mainCategory}
          </option>
        );
      })}
    </select>
  );
}
"use client";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { RiArrowDropUpLine } from "react-icons/ri";
import { Drop } from "./Dropdown";
import { Search } from "./search";
import { OpenModal } from "./Modal";
import { Products, productszu } from "../_store/data";
interface Data {
  id?: string;
  name?: string;
  mainCategory?: string;
  country?: string;
  brand?: string;
}

export function ItemRendering() {
  const d = productszu((state) => state.p);
  const update = productszu((state) => state.updateProductFields);
  const del = productszu((state) => state.deleteProduct);
  const [data, setchangedData] = useState<Partial<Data>>({});
  const [openBar, setClosebar] = useState<number | undefined>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, itmid: any) => {
    const { name, value } = e.target;
    setchangedData((prev) => ({ ...prev, [name]: value, ["id"]: itmid }));
  };
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    for (const key of Object.keys(data || {}) as (keyof Data)[]) {
      const value = data[key];
      if (!value || value.trim() === "") {
        toast.error("Input fields are empty");
        return;
      }
    }
    if (data.id) {
      update(data.id, data);
    } else {
      toast.error("ID is missing, cannot update");
    }
    // update(data.id, data);
    setClosebar(undefined);
    setchangedData({});
    toast.success("The data has been changed");
  }
  return (
    <div className="w-full  h-[400px] flex flex-col overflow-y-scroll">
      {/* product rendering staarting point */}
      {d.length > 0 ? (
        d.map((itm: Products, indx: number) => {
          return (
            <div key={indx}>
              <div
                key={indx}
                className="h-[40px] w-full  flex items-center mt-5 transition-all duration-300 ease-in-out"
              >
                <div className="flex-1">
                  <img
                    className="w-[50px] h-[50px] rounded-md"
                    src={itm.image}
                  ></img>
                </div>
                <div className="flex-1 text-ellipsis overflow-hidden">
                  {itm.name}
                </div>
                <div className="flex-1">{itm.mainCategory}</div>
                <div className="flex-1">{itm.price}$</div>
                <div className="flex-1 flex justify-center items-center cursor-pointer">
                  {openBar == indx ? (
                    <RiArrowDropDownLine
                      size={30}
                      onClick={() => {
                        if (openBar == indx) {
                          setClosebar(undefined);
                        } else {
                          setClosebar(indx);
                        }
                      }}
                    />
                  ) : (
                    <RiArrowDropUpLine
                      size={30}
                      onClick={() => {
                        setchangedData({});
                        if (openBar == indx) {
                          setClosebar(undefined);
                        } else {
                          setClosebar(indx);
                        }
                      }}
                    />
                  )}
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div
                  className={`w-full flex flex-row max-md:flex-col ${
                    indx === openBar
                      ? "max-h-[auto] opacity-100"
                      : "h-0 opacity-0 hidden"
                  } transition-all duration-300 ease-in-out flex-wrap`}
                >
                  <div className="flex-1">
                    <img
                      src={itm.image}
                      className="m-auto mt-5  w-[210px] h-[200px]"
                    />
                  </div>
                  <div className="flex-1  p-3">
                    <label htmlFor="name">Name:</label>
                    <input
                      className="w-full h-8 rounded-md mb-5 mt-1 p-2 border-[1px] border-black flex-1"
                      name="name"
                      defaultValue={itm.name}
                      required
                      onChange={(e) => {
                        handleChange(e, itm.id);
                      }}
                    ></input>
                    <label htmlFor="name">Category:</label>
                    <input
                      className="w-full h-8 rounded-md mb-5 mt-1 p-2 border-[1px] border-black flex-1"
                      defaultValue={itm.mainCategory}
                      name="mainCategory"
                      required
                      onChange={(e) => {
                        handleChange(e, itm.id);
                      }}
                    ></input>
                    <label htmlFor="name">Brand</label>
                    <input
                      className="w-full h-8 rounded-md mb-5 mt-1 p-2 border-[1px] border-black flex-1"
                      defaultValue={itm.brand}
                      name="brand"
                      required
                      onChange={(e) => {
                        handleChange(e, itm.id);
                      }}
                    ></input>
                    <button
                      className="w-full bg-red-600 rounded-2xl h-[35px] cursor-pointer"
                      type="button"
                      onClick={() => {
                        if (itm.id) {
                          del(itm.id);
                        } else {
                          toast.error("Cannot delete: ID missing");
                        }
                        setClosebar(undefined);
                        setchangedData({});
                        toast.success("Deleted Successfully!!!");
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="flex-1  p-3">
                    <label htmlFor="name">Country:</label>
                    <input
                      className="w-full h-8 rounded-md mb-5 mt-1 p-2 border-[1px] border-black flex-1"
                      defaultValue={itm.country}
                      name="country"
                      required
                      onChange={(e) => {
                        handleChange(e, itm.id);
                      }}
                    ></input>
                    <label htmlFor="name">Stock(Unchangable)</label>
                    <input
                      className="w-full h-8 rounded-md mb-5 mt-1 p-2 border-[1px] border-black flex-1"
                      value={itm.stock}
                      name="stock"
                      readOnly
                    ></input>
                    <label htmlFor="name">ReservedStock:</label>
                    <input
                      className="w-full h-8 rounded-md mb-5 mt-1 p-2 border-[1px] border-black flex-1"
                      value={itm.reservedStock}
                      name="reservedStock"
                      readOnly
                    ></input>
                    {!Object.values(data).every((value) => value === "") && (
                      <button
                        className="w-full bg-green-300 rounded-2xl h-[35px] cursor-pointer"
                        type="submit"
                      >
                        Update Changes
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          );
        })
      ) : (
        <div className="m-auto text-[22px] text-violet-400">
          !!!!There is no such data inside inventory based on your input
        </div>
      )}
    </div>
  );
}

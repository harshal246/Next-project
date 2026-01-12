"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { productszu } from "../_store/data";
import { v4 as uuidv4 } from "uuid";
export function OpenModal() {
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const addp = productszu((state) => state.addproduct);
  const [s, setInput] = useState({});
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput({
      ...s,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Product Is Added");
    const productWithId = {
      id: uuidv4(),
      ...s,
    };
    addp(productWithId);
    setIsOpen(false);
  }
  return (
    <>
      <button
        className="text-1xl  bg-violet-400 w-[130px] h-[40px] m text-white rounded-md cursor-pointer mt-7"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        + Add Product
      </button>
      <Modal
        isOpen={isOpen}
        style={{
          overlay: {
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            position: "relative",
            inset: "auto",
            padding: "0",
            border: "none",
            background: "transparent",
            overflow: "visible",
          },
        }}
        onRequestClose={() => {
          setIsOpen(false);
        }}
      >
        <div
          className="relative bg-white rounded-2xl shadow-xl
            w-full
            sm:w-[95vw]
            md:w-[80vw]
            lg:w-[70vw]
            xl:w-[60vw]
            max-w-[1100px]
            max-h-[90vh]
            flex flex-col
            overflow-hidden"
        >
          <div className="flex-1 flex overflow-y-auto overflow-x-hidden p-4">
            <form onSubmit={handleSubmit} className="w-full">
              <IoClose
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-red-600 absolute right-4 top-2 text-3xl cursor-pointer"
              />
              <div className="text-[20px] pl-6 pt-5">Add Category</div>
              <input
                type="text"
                name="mainCategory"
                placeholder="Add Category"
                onChange={handleChange}
                className="w-[95%] h-10 pl-5 shadow-[24px_19px_17px_9px_rgba(0,_0,_0,_0.05)] m-3 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
                required
              />
              <div className="text-[20px] pl-6 pt-5">Add Name</div>
              <input
                type="text"
                name="brand"
                placeholder="Add Brand"
                onChange={handleChange}
                className="w-[95%] h-10 pl-5 shadow-[24px_19px_17px_9px_rgba(0,_0,_0,_0.05)] m-3 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
                required
              />
              <div className="text-[20px] pl-6 pt-5">Add Brand</div>
              <input
                type="text"
                name="name"
                placeholder="Add Name"
                onChange={handleChange}
                className="w-[95%] h-10 p-3 shadow-[24px_19px_17px_9px_rgba(0,_0,_0,_0.05)] m-3 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
                required
              />
              <div className="text-[20px] pl-6 pt-5">Add Price</div>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                placeholder="Add Price"
                className="w-[95%] h-10 p-3 shadow-[24px_19px_17px_9px_rgba(0,_0,_0,_0.05)] m-3 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
                required
              />
              <div className="text-[20px] pl-6 pt-5">Add Country</div>
              <input
                type="text"
                name="country"
                placeholder="Add country"
                onChange={handleChange}
                className="w-[95%] h-10 pl-5 shadow-[24px_19px_17px_9px_rgba(0,_0,_0,_0.05)] m-3 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
                required
              />
              <div className="text-[20px] pl-6 pt-5">Add Stock</div>
              <input
                type="number"
                name="stock"
                placeholder="Add Stock"
                onChange={handleChange}
                className="w-[95%] h-10 pl-5 shadow-[24px_19px_17px_9px_rgba(0,_0,_0,_0.05)] m-3 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
                required
              />
              <div className="text-[20px] pl-6 pt-5">Add Reserved Stock</div>
              <input
                type="number"
                name="reservedStock"
                placeholder="Add reservedStock"
                onChange={handleChange}
                className="w-[95%] h-10 pl-5 shadow-[24px_19px_17px_9px_rgba(0,_0,_0,_0.05)] m-3 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-[95%] p-2 rounded-[10px] ml-5 bg-violet-400 cursor-pointer mb-[10px]"
              >
                Add Product!!
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

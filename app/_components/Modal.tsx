"use client"

import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import Modal from "react-modal"
import { IoClose } from "react-icons/io5";
import { productszu } from "../_store/data";
import { v4 as uuidv4 } from "uuid";
export function OpenModal() {
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const addp = productszu((state) => state.addproduct);
  const [s, setInput] = useState({});
  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    setInput({
      ...s,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
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
        className="text-1xl font-bold bg-violet-400 w-[130px] h-[40px] rounded-md cursor-pointer  m-2"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        + Add Product
      </button>
      <Modal
        isOpen={isOpen}
        style={{
          content: {
            boxShadow: "24px 19px 17px 9px rgba(0, 0, 0, 0.05)",
            borderRadius: "10px",
            margin: "auto",
            border: "none",
            padding: "10px",
            display: "flex",
            width: "500px",
            height: "500px",
            flexDirection: "column",
          },
        }}
        onRequestClose={() => {
          setIsOpen(false);
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="relative w-full h-full bg-transparent ">
            <IoClose
              onClick={() =>{setIsOpen(false)}}  
              className="text-red-600 absolute right-1 text-2xl cursor-pointer  "
            />
            <div className="text-[20px] pl-6 pt-5">Add Category</div>
            <input
              type="text"
              name="mainCategory"
              placeholder="Add Category"
              onChange={handleChange}
              className="w-5/6 h-10 pl-5 shadow-[24px_19px_17px_9px_rgba(0,_0,_0,_0.05)] m-3 rounded-[10px]"
              required
            />
            <div className="text-[20px] pl-6 pt-5">Add Name</div>
            <input
              type="text"
              name="brand"
              placeholder="Add Brand"
              onChange={handleChange}
              className="w-5/6 h-10 pl-5 shadow-[24px_19px_17px_9px_rgba(0,_0,_0,_0.05)] m-3 rounded-[10px]"
              required
            />
            <div className="text-[20px] pl-6 pt-5">Add Brand</div>
            <input
              name="name"
              placeholder="Add Name"
              onChange={handleChange}
              className="w-5/6 h-10 p-3 shadow-[24px_19px_17px_9px_rgba(0,_0,_0,_0.05)] m-3 rounded-[10px]"
              required
            />
            <div className="text-[20px] pl-6 pt-5">Add Price</div>
            <input
              name="price"
              onChange={handleChange}
              placeholder="Add Price"
              className="w-5/6 h-10 p-3 shadow-[24px_19px_17px_9px_rgba(0,_0,_0,_0.05)] m-3 rounded-[10px]"
              required
            />
            <div className="text-[20px] pl-6 pt-5">Add Country</div>
            <input
              type="text"
              name="country"
              placeholder="Add country"
              onChange={handleChange}
              className="w-5/6 h-10 pl-5 shadow-[24px_19px_17px_9px_rgba(0,_0,_0,_0.05)] m-3 rounded-[10px]"
              required
            />
            <div className="text-[20px] pl-6 pt-5">Add Stock</div>
            <input
              type="text"
              name="stock"
              placeholder="Add Stock"
              onChange={handleChange}
              className="w-5/6 h-10 pl-5 shadow-[24px_19px_17px_9px_rgba(0,_0,_0,_0.05)] m-3 rounded-[10px]"
              required
            />
            <div className="text-[20px] pl-6 pt-5">Add Reserved Stock</div>
            <input
              type="text"
              name="reservedStock"
              placeholder="Add reservedStock"
              onChange={handleChange}
              className="w-5/6 h-10 pl-5 shadow-[24px_19px_17px_9px_rgba(0,_0,_0,_0.05)] m-3 rounded-[10px]"
              required
            />
            <button
              type="submit"
              className="w-[90%] p-2 rounded-[10px] ml-5 bg-violet-400 cursor-pointer"
            >
              Add Product!!
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
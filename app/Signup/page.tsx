"use client"
import toast from "react-hot-toast"

import { useRouter } from "next/navigation";

import { useState } from "react";
interface dataType {
  email: string;
  password: string;
  username:string; 
}

export default function signup(){
    const router = useRouter();
      const [d, setData] = useState<dataType>({ email: "", password: "",username:"" });
      function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const check = new Promise((resolve, reject)=>{
          resolve(localStorage.setItem("loginData", JSON.stringify(d)));
          reject("Error arrived");
        })
          .then(() => {
            router.push("/Home");
          })
          .catch(() => {
            toast.error("Error has arrived");
          });
      }
      function changeData(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
      return (
        <form onSubmit={HandleSubmit}>
          <div className="h-screen w-screen flex m-auto">
            <div className="w-[400px] h-[500px] overflow-hidden flex-col m-auto flex justify-between  items-center rounded-[20px] shadow-[-1px_7px_34px_7px_rgba(0,_0,_0,_0.1)]">
              <span className="m-5 text-2xl">Sign up</span>
            <div className="w-[90%] flex flex-col m-5">
            <label htmlFor="email" className="text-[18px]">
              Enter Username
            </label>
            <input
              name="username"
              placeholder="Enter your username here"
              onChange={changeData}
              value={d.username}
              className="h-[40px] rounded-md p-3 shadow-[-1px_7px_34px_7px_rgba(0,_0,_0,_0.1)]"
              required
            />
            </div>
              <div className="w-[90%] flex flex-col m-5">
                <label htmlFor="email" className="text-[18px]">
                  Enter email
                </label>
                <input
                  name="email"
                  placeholder="Enter your email here"
                  onChange={changeData}
                  value={d.email}
                  className="h-[40px] rounded-md p-3 shadow-[-1px_7px_34px_7px_rgba(0,_0,_0,_0.1)]"
                  required
                />
              </div>
              <div className="w-[90%] flex flex-col m-5">
                <label htmlFor="email" className="text-[18px]">
                  Enter password
                </label>
                <input
                  name="password"
                  placeholder="Enter your password here"
                  value={d.password}
                  className="h-[40px] rounded-md p-3 shadow-[-1px_7px_34px_7px_rgba(0,_0,_0,_0.1)]"
                  onChange={changeData}
                  required
                />
              </div>
              <button
                className="w-[90%] h-[40px] p-[5px] bg-violet-400 mb-5 rounded-md cursor-pointer"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      )
}
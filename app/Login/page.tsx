"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
interface dataType {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [d, setData] = useState<dataType>({ email: "", password: "" });
  function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const check = new Promise((resolve, reject) => {
      resolve(localStorage.setItem("loginData", JSON.stringify(d)));
      reject("Error arrived");
    })
      .then((d) => {
        router.push("/Home");
      })
      .catch((err) => {
        toast.error("Error has arrived");
      });
    localStorage.setItem("loginData", JSON.stringify(d));
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
        <div className="w-[400px] h-[500px] flex-col m-auto flex justify-around items-center rounded-[20px] shadow-[-1px_7px_34px_7px_rgba(0,_0,_0,_0.1)]">
          <span className="m-10 text-2xl">Login</span>
          <div className="w-[90%] flex flex-col m-10">
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
          <div className="w-[90%] flex flex-col m-10">
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
  );
}

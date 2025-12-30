"use client"
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { TiHome } from "react-icons/ti";
import { FaRegChartBar } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { MdInventory2 } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
export function SIdebar() {
  const pathname=usePathname()
  const router=useRouter()
  const [close, setClosed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const invalidPaths = ["/Login", "/Signup"];
   const hideSidebar = invalidPaths.includes(pathname);
  if (hideSidebar) return null
  return (
    <>
      <button
        onClick={() => {
          setMobileOpen(!mobileOpen)
          setClosed(!close)
        }
        }
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#c7c4bf] rounded-lg shadow-lg"
      >
        {mobileOpen ? <IoClose size={24}/> : <HiMenuAlt3 size={24} />}
      </button>

      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-transparent bg-opacity-50 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar containerrrr */}
      <div
        className={`
          h-screen w-[80px] bg-[#c7c4bf] inline-flex
          fixed md:relative
          transition-transform duration-300 ease-in-out
          z-40
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <Sidebar
          className="!bg-[#c7c4bf]"
          collapsed={close}
          rootStyles={{
            backgroundColor: "#c7c4bf",
          }}
        >
          <Menu
            menuItemStyles={{
              button: ({ active }:any) => ({
                backgroundColor: active ? "#a78bfa99" : "transparent",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#a78bfa99",
                  color: "black",
                },
              }),
            }}
          >
            <MenuItem
              active={pathname === "/Home"}
              onClick={() => {
                router.push("/Home")
                setClosed(true)
                setMobileOpen(false);
              }}
            >
              <TiHome size={20} className="w-full"/>
            </MenuItem>
            
            <MenuItem
              active={pathname === "/chart"}
              onClick={() => {
                setMobileOpen(false);
                setClosed(true)
                router.push("/chart")
              }}
            >
              <FaRegChartBar size={20} className="w-full" />
            </MenuItem>
            <MenuItem>
            <LuLogOut size={20} className="w-full" onClick={()=>{
              localStorage.removeItem("loginData")
              router.push("/Signup")
            }}/>
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
// export function SIdebar() {
//     const navigate =useNavigate()
//   const [close, setClosed] = useState(true);
//   const {pathname}=useLocation()
//   console.log(pathname)
//   return (
//     <div className="h-screen w-[80px] bg-[#c7c4bf] inline-flex">
//       <Sidebar
//       className="!bg-[#c7c4bf]"
//         collapsed={close}
//         rootStyles={{
//           backgroundColor: "#c7c4bf",
//         }}
//       >
//         <Menu
//           menuItemStyles={{
//             button: ({active})=>({
//               backgroundColor: active ? "#a78bfa99" : "transparent",
//             // color: active ? "black" : "gray",                 
//                 borderRadius:"20px",
//               "&:hover": {
//                 backgroundColor: "#a78bfa99",
//                 color: "black",
//               }
//             }),
//           }}
//         >
//           <MenuItem
//           active={pathname==="/"} 
//           onClick={()=>{navigate("/")}}>
//             <TiHome size={20} className="w-full"/>
//           </MenuItem>
//           <MenuItem
//           active={pathname==="/chart"} 
//           onClick={()=>{
//             navigate("/chart")
//           }}>
//             <FaRegChartBar size={20} className="w-full" />
//           </MenuItem>
//         </Menu>
        
//       </Sidebar>
//     </div>
//   );
// }

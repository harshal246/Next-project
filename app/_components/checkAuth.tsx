"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast"

const authroutes = ["/login", "/signup"];
const mainroute = "/"; 

export function Checkauthentication({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("currentUser");
    if (token && authroutes.includes(pathname)) {
      toast.success("You are already authenticated")
      router.replace(mainroute);
      return;
    }

    if (!token && !authroutes.includes(pathname)) {
      toast.error("You need to be logged in first to access pages"
      )
      router.replace("/signup");
      return;
    }

    setChecking(false);
  }, [pathname, router]);

  if (checking) return null;

  return <>{children}</>;
}

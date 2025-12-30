"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PUBLIC_ROUTES = ["/Login", "/Signup"];
const HOME_ROUTE = "/Home"; 

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("loginData");
    if (token && PUBLIC_ROUTES.includes(pathname)) {
      router.replace(HOME_ROUTE);
      return;
    }

    if (!token && !PUBLIC_ROUTES.includes(pathname)) {
      router.replace("/Signup");
      return;
    }

    setChecking(false);
  }, [pathname, router]);

  if (checking) return null;

  return <>{children}</>;
}

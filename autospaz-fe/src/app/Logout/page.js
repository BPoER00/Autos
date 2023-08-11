"use client"
import ProgresBar from "@/components/Inputs/ProgresBar";
import { useEffect } from "react";
import { deleteCookie } from "@/config/cookiesConfig";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  useEffect(() => {
    deleteCookie();
    router.refresh();
  }, []);
  return <ProgresBar />;
}

export default page;

"use client";
import NavBar from "@/components/NavBar";
import AutoProvider from "@/context/AutoContext";
import { useRouter } from "next/navigation";

function Content({ children }) {
  const router = useRouter();

  return (
    <>
      <NavBar>
        <AutoProvider>
          {children}
        </AutoProvider>
      </NavBar>
    </>
  );
}

export default Content;

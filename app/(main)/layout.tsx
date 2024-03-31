import Sidebar from "@/components/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Sidebar className="hidden md:flex" />
      <main className="md:pl-[256px] h-full max-md:pt-[50px]">
        <div className="h-full bg-red-500">{children}</div>
      </main>
    </>
  );
};

export default layout;

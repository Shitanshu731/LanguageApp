import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type props = {
  title: string;
};

const Header = ({ title }: props) => {
  return (
    <div className="sticky top-0 bg-white pb-3 max-md:pt-[16px] md-mt-16 flex items-center justify-between border-b-2 mb-5 text-neutral-400 md:z-50">
      <Link href="/courses">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
        </Button>
      </Link>
      <h1 className="font-bold text-lg">{title}</h1>
    </div>
  );
};

export default Header;

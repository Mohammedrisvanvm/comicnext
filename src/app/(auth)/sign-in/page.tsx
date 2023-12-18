"use client"

import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="container relative flex pt-20 felx-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20"></Icons.logo>
            <h1 className="text-2xl font-bold">Signin</h1>
            <Link
              href="/sign-up"
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5 ",
              })}
            >
              Sign-up
              <ArrowRight className="h-4 w-4 " />
            </Link>
          </div>

          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Page;

"use client";
import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
 
const Page = () => {
  const AuthCredentialsValidator=z.object({
    email:z.string().email(),
    password:z.string().min(8,{message:"password must be 8 charaters long."})
  })
  const {register,handleSubmit,formState:{errors,}} = useForm({resolver:zodResolver(AuthCredentialsValidator)});
  return (
    <>
      <div className="container relative flex pt-20 felx-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20"></Icons.logo>
            <h1 className="text-2xl font-bold">Create an account</h1>
            <Link
              href="/sign-in"
              className={buttonVariants({ variant: "link" })}
            >
              Already have account? Sign-in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grif gap-6">
            <form>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2"></div>
                <Label htmlFor="email">Email</Label>
                <Input
                  className={cn({ "focus-visible:ring-red-500": true })}
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2"></div>
                <Label htmlFor="password">Password</Label>
                <Input
                  className={cn({ "focus-visible:ring-red-500": true })}
                  placeholder="*********"
                />
                <Button>Sign Up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

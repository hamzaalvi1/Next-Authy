"use client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardWrapper } from "@/components/CardWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const LoginForm = () => {
  const form = useForm();
  return (
    <CardWrapper
      isHeader={true}
      title={"🔐 Authy"}
      description="Welcome Back!"
      classes=""
    >
      <Form {...form}>
        <form>
          <div className="space-y-3">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your email address"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="************"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="w-full text-sm font-normal h-[45px] rounded-md mt-4"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </Form>
      <div className="flex items-center mt-4 gap-4">
        <div className="border-2 border-input rounded-md bg-transparent w-3/6 flex h-16 items-center justify-center gap-2 cursor-pointer ">
          <FcGoogle size={25} />
          <p className="text-sm font-medium">Login With Google</p>
        </div>
        <div className="border-2 border-input rounded-md bg-transparent w-3/6 flex h-16 items-center justify-center gap-2 cursor-pointer ">
          <FaGithub size={25} />
          <p className="text-sm font-medium">Login With Github</p>
        </div>
      </div>
      <Button asChild variant={"link"} className="p-0 text-[13px] font-normal">
        <Link href={"/auth/register"}>Do you want to signup?</Link>
      </Button>
    </CardWrapper>
  );
};

export default LoginForm;

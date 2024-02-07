"use client";
import * as z from "zod";
import Link from "next/link";
import { registerUser } from "@/actions";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "./AuthSchemas";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "@/components/CardWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const RegisterForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const handleOnPaste = (evt: React.ClipboardEvent<HTMLInputElement>) => {
    evt.preventDefault();
  };
  const handleRegistration = async (values: z.infer<typeof RegisterSchema>) => {
    const user = await registerUser(values);
    if (!user?.success) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: user?.message,
      });
    }
  };
  return (
    <CardWrapper
      isHeader={true}
      title={"🔐 Authy"}
      description="Create an account for registration"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleRegistration)}>
          <div className="space-y-3">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="************"
                      type="password"
                      onPaste={handleOnPaste}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full text-sm font-normal h-[45px] rounded-md mt-4"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Loading...." : "Register"}
            </Button>
          </div>
        </form>
      </Form>
      <Button
        asChild
        variant={"link"}
        className="p-0 text-[13px] font-normal text-center block mt-4"
      >
        <Link href={"/auth/login"}>Already have an Account?</Link>
      </Button>
    </CardWrapper>
  );
};

export default RegisterForm;

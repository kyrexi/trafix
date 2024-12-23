"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authenticate } from "@/lib/actions";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <div>
      {/* The outer form element */}
      <form className="space-y-6" action={formAction}>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Log in to Your Account</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to get started
          </p>
        </div>
        <Card className="mx-auto max-w-sm">
          {/* <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader> */}
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                {/* Label and input for username */}
                <Label htmlFor="username">User Name</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              {/* <div className="grid gap-2">
                {/* Label and input for company ID */}
              {/* <Label htmlFor="companyid">Company ID</Label>
                <Input
                  id="companyid"
                  name="companyid"
                  type="text"
                  placeholder="Company ID"
                  required
                />
              </div> */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  {/* Label and input for password */}
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="******"
                  required
                />
              </div>
              {/* Login button */}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
        {/* Display state if available */}

        <div className="hidden">{state && toast.error(state)}</div>
        <div className="mt-4 text-center text-sm">
          {/* Link to sign up page */}
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

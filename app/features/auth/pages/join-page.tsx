import { Form, Link } from "react-router";
import type { Route } from "./+types/join-page";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Join | wemake" }];
};

export default function JoinPage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <Button
        variant={"ghost"}
        asChild
        className="absolute right-8 top-8 left-0"
      >
        <Link to="/auth/login">Login</Link>
      </Button>
      <div className="flex flex-col items-center justify-center w-full max-w-md gap-10">
        <h1 className="text-2xl font-semibold">Join</h1>
        <Form className="w-full space-y-5">
          <InputPair
            id="name"
            label="Name"
            description="Enter your name"
            name="name"
            required
            type="text"
            placeholder="Enter your name"
          />
          <InputPair
            id="username"
            label="UserName"
            description="Enter your username"
            name="username"
            maxLength={20}
            required
            type="text"
            placeholder="i.e wemake"
          />
          <InputPair
            id="email"
            label="Email"
            description="Enter your email"
            name="email"
            required
            type="email"
            placeholder="i.e wemake@gmail.com"
          />
          <InputPair
            id="password"
            label="Password"
            description="Enter your password"
            name="password"
            required
            type="password"
            placeholder="********"
          />
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </Form>
      </div>
    </div>
  );
}

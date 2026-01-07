import { Form, Link, redirect, useNavigation } from "react-router";
import type { Route } from "./+types/join-page";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import AuthButtons from "../components/auth-buttons";
import { makeSSRClient } from "~/supa-client";
import z from "zod";
import { checkUsernameExists } from "../queries";
import { LoaderCircle } from "lucide-react";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Join | wemake" }];
};

const formSchema = z.object({
  name: z.string().min(3),
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const { success, data, error } = formSchema.safeParse(
    Object.fromEntries(formData)
  );
  if (!success) {
    return {
      formErrors: error.flatten().fieldErrors,
    };
  }
  const usernameExists = await checkUsernameExists(request, {
    username: data.username,
  });
  if (usernameExists) {
    return { formErrors: { username: ["username already exists"] } };
  }
  const { client, headers } = makeSSRClient(request);
  const { error: signUpError } = await client.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        name: data.name,
        username: data.username,
      },
    },
  });
  if (signUpError) {
    return {
      signUpError: signUpError.message,
    };
  }
  return redirect("/", { headers });
};

export default function JoinPage({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "submitting" || navigation.state === "loading";
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
        <Form className="w-full space-y-5" method="post">
          <InputPair
            id="name"
            label="Name"
            description="Enter your name"
            name="name"
            required
            type="text"
            placeholder="Enter your name"
          />
          {actionData && "formErrors" in actionData && (
            <p className="text-red-500">{actionData.formErrors?.name}</p>
          )}
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
          {actionData && "formErrors" in actionData && (
            <p className="text-red-500">{actionData.formErrors?.username}</p>
          )}
          <InputPair
            id="email"
            label="Email"
            description="Enter your email"
            name="email"
            required
            type="email"
            placeholder="i.e wemake@gmail.com"
          />
          {actionData && "formErrors" in actionData && (
            <p className="text-red-500">{actionData.formErrors?.email}</p>
          )}
          <InputPair
            id="password"
            label="Password"
            description="Enter your password"
            name="password"
            required
            type="password"
            placeholder="********"
          />
          {actionData && "formErrors" in actionData && (
            <p className="text-red-500">{actionData.formErrors?.password}</p>
          )}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Create account"
            )}
          </Button>
          {actionData && "signUpError" in actionData && (
            <p className="text-red-500">{actionData.signUpError}</p>
          )}
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}

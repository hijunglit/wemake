import { Form } from "react-router";
import type { Route } from "./+types/otp-start-page";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";

export default function OtpStartPage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center w-full max-w-md gap-10">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Log in with OTP</h1>
          <p className="text-sm text-muted-foreground">
            We will send you a 4-digit code to log in to your account.
          </p>
        </div>
        <Form className="w-full space-y-5">
          <InputPair
            id="email"
            label="Email"
            description="Enter your email"
            name="email"
            required
            type="email"
            placeholder="i.e wemake@gmail.com"
          />
          <Button type="submit" className="w-full">
            Send OTP
          </Button>
        </Form>
      </div>
    </div>
  );
}

import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/promote-page";
import { Form } from "react-router";
import SelectPair from "~/common/components/select-pair";
import { Calendar } from "~/common/components/ui/calendar";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DateTime } from "luxon";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Promote Product | ProductHunt Clone" },
    { name: "description", content: "Promote your product" },
  ];
};

export default function PromotePage() {
  const [promotionPeriod, setPromotionPeriod] = useState<
    DateRange | undefined
  >();
  const totalDays =
    promotionPeriod?.from && promotionPeriod?.to
      ? DateTime.fromJSDate(promotionPeriod.to).diff(
          DateTime.fromJSDate(promotionPeriod.from),
          "days"
        ).days
      : 0;
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero
        title="Promote Your Product"
        subtitle="Boost your product's visibility"
      />
      <Form className="max-w-screen-sm mx-auto flex flex-col gap-10 items-center">
        <SelectPair
          label="Promotion Type"
          description="The type of promotion you want to do"
          name="product"
          placeholder="Select a product"
          options={[
            {
              label: "AI dark mode maker",
              value: "ai-dark-mode-maker",
            },
            {
              label: "AI dark mode maker 2",
              value: "ai-dark-mode-maker-2",
            },
          ]}
        />
        <div className="flex flex-col gap-2 items-center w-full">
          <label className="flex flex-col gap-1">
            Select a range of dates for promotion
            <small className="text-muted-foreground text-center block">
              Minimum 3 days
            </small>
          </label>
          <Calendar
            mode="range"
            selected={promotionPeriod}
            onSelect={setPromotionPeriod}
            min={3}
            disabled={[{ before: new Date() }]}
          />
        </div>
        <Button disabled={totalDays === 0}>
          Go to checkout (${totalDays * 20})
        </Button>
      </Form>
    </div>
  );
}

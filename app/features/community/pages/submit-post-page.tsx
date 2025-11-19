import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-post-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";

export const meta: Route.MetaFunction = () => [
  { title: "Submit Post | wemake" },
  { name: "description", content: "Submit a post" },
];

export default function SubmitPostPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Create Discussion"
        subtitle="Ask questions, share ideas, and get feedback"
      />
      <Form>
        <InputPair
          label="Title"
          name="title"
          id="title"
          description="(40 characters or less)"
          required
          placeholder="i.e What is the best productibility tool?"
        />
        <SelectPair
          required
          name="category"
          label="Category"
          description="Select the category of your discussion"
          placeholder="i.e Productivity"
          options={[
            { label: "Productivity", value: "productivity" },
            { label: "Marketing", value: "marketing" },
            { label: "AI", value: "ai" },
          ]}
        />
      </Form>
    </div>
  );
}

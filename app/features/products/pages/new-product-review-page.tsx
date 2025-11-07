import { Hero } from "~/common/components/hero";
import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/new-product-review-page";

export function loader({ params }: Route.LoaderArgs) {
  return {};
}

export function action({ params }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "New Review | wemake" },
    { name: "description", content: "Create a new product review" },
  ];
};

export default function NewProductReviewPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero title="New Review" subtitle="Write a review for this product" />
      <Form className="max-w-screen-md mx-auto mt-8">
        <Button type="submit">Submit Review</Button>
      </Form>
    </div>
  );
}


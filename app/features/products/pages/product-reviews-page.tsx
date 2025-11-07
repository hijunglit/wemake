import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/product-reviews-page";

export function loader({ params }: Route.LoaderArgs) {
  return {};
}

export function action({ params }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Product Reviews | wemake" },
    { name: "description", content: "Product reviews page" },
  ];
};

export default function ProductReviewsPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero title="Product Reviews" subtitle="View all reviews" />
    </div>
  );
}


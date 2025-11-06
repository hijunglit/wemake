import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/categories-page";
import { CategoryCard } from "../components/category-card";

export const meta: Route.MetaFunction = () => [
  { title: "Categories | ProductHunt Clone" },
  { name: "description", content: "Browse products by category" },
];

export default function CategoriesPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Categories"
        subtitle="Search for title by title or description"
      />
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryCard
            key={`categoryId-${index}`}
            categoryId={`categoryId-${index}`}
            name="Category name"
            description="Category description"
          />
        ))}
      </div>
    </div>
  );
}

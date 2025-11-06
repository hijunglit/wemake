import type { Route } from "./+types/category-page";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";

export const meta = ({ params }: Route.MetaArgs) => {
  return [
    { title: `Developer tools | ProductHunt Clone` },
    { name: "description", content: `Browse Developer tools products` },
  ];
};

export default function CategoryPage() {
  return (
    <div className="space-y-20">
      <Hero
        title={"Developer tools"}
        subtitle={`Tools for developers to build their products`}
      />
      <div className="space-y-10 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`productId-${index}`}
            name="productName"
            description="Product Description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}

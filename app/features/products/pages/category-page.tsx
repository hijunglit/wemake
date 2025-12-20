import type { Route } from "./+types/category-page";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";
import {
  getCategory,
  getCategoryPages,
  getProductByCategory,
} from "../queries";
import z from "zod";
import { makeSSRClient } from "~/supa-client";

export const meta = ({ params }: Route.MetaArgs) => {
  return [
    { title: `Developer tools | ProductHunt Clone` },
    { name: "description", content: `Browse Developer tools products` },
  ];
};

const paramsSchema = z.object({
  // 이렇게 하면 url로부터 받는 string을 number 타입으로 변환시켜준다.
  category: z.coerce.number(),
});

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { client, headers } = makeSSRClient(request);
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;
  const { data, success } = paramsSchema.safeParse(params);
  if (!success) throw new Response("Invalid category", { status: 400 });
  const category = await getCategory(client, { id: data.category });
  const products = await getProductByCategory(client, {
    id: data.category,
    page: Number(page),
  });
  const totalPage = await getCategoryPages(client, {
    id: Number(data.category),
  });
  return { category, products, totalPage };
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero
        title={"Developer tools"}
        subtitle={`Tools for developers to build their products`}
      />
      <div className="space-y-10 w-full max-w-screen-md mx-auto">
        {loaderData.products.map((product) => (
          <ProductCard
            id={product.product_id}
            name={product.name}
            description={product.tagline}
            reviewsCount={product.reviews}
            viewsCount={product.views}
            votesCount={product.upvotes}
          />
        ))}
      </div>
      <ProductPagination totalPages={loaderData.totalPage} />
    </div>
  );
}

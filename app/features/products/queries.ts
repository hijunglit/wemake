import { DateTime } from "luxon";
import client from "~/supa-client";
import { PAGE_SIZE } from "./constants";

const product_list_select = `
        product_id,
        name,
        tagline,
        upvotes:stats->>upvotes,
        views:stats->>views,
        reviews:stats->>reviews`;

export const getProductsByDateRange = async ({
  startDate,
  endDate,
  limit,
  page = 1,
}: {
  startDate: DateTime;
  endDate: DateTime;
  limit: number;
  page?: number;
}) => {
  const { data, error } = await client
    .from("products")
    .select(product_list_select)
    .order("stats->>upvotes", { ascending: false })
    .gte("created_at", startDate.toISO())
    .lte("created_at", endDate.toISO())
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);
  if (error) throw error;
  return data;
};

export const getProductPagesByDateRange = async ({
  startDate,
  endDate,
}: {
  startDate: DateTime;
  endDate: DateTime;
}) => {
  const { count, error } = await client
    .from("products")
    .select(`product_id`, { count: "exact", head: true })
    .gte("created_at", startDate.toISO())
    .lte("created_at", endDate.toISO());
  if (error) throw error;
  if (!count) return 1;
  return Math.ceil(count / PAGE_SIZE);
};

export const getCategories = async () => {
  const { data, error } = await client
    .from("categories")
    .select(`category_id, name, description`);
  if (error) throw error;
  return data;
};

export const getCategory = async (id: number) => {
  const { data, error } = await client
    .from("categories")
    .select("*")
    .eq("category_id", id)
    // array가 반환되는걸 원치 않으므로 single() 사용.
    // 해당 query가 단 한 개의 row만을 생성한다는 것을 알고 있을 때만 single() 사용.
    .single();

  if (error) throw error;
  return data;
};

export const getProductByCategory = async ({
  id,
  page,
}: {
  id: number;
  page: number;
}) => {
  const { data, error } = await client
    .from("products")
    .select(product_list_select)
    .eq("category_id", id)
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);
  if (error) throw error;
  return data;
};

export const getCategoryPages = async (id: number) => {
  const { count, error } = await client
    .from("products")
    .select(`product_id`, { count: "exact", head: true })
    .eq("category_id", id);
  if (error) throw error;
  if (!count) return 1;
  return Math.ceil(count / PAGE_SIZE);
};

export const getProductBySearch = async ({
  query,
  page,
}: {
  query: string;
  page: number;
}) => {
  const { data, error } = await client
    .from("products")
    .select(product_list_select)
    // name column 에서 사용자가 입력한 query를 검색
    // .ilike("name", `%${query}%`)
    // .ilike("tagline", `%${query}%`)
    .or(`name.ilike.%${query}%, tagline.ilike.%${query}%`)
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);
  if (error) throw error;
  return data;
};

export const getPagesBySearch = async ({ query }: { query: string }) => {
  const { count, error } = await client
    .from("products")
    .select(`product_id`, { count: "exact", head: true })
    // name column 에서 사용자가 입력한 query를 검색
    // .ilike("name", `%${query}%`)
    // .ilike("tagline", `%${query}%`)
    .or(`name.ilike.%${query}%, tagline.ilike.%${query}%`);
  if (error) throw error;
  if (!count) return 1;
  return Math.ceil(count / PAGE_SIZE);
};

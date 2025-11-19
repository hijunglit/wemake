import type { Route } from "./+types/post-page";

export const meta: Route.MetaFunction = () => [
  { title: "Post | wemake" },
  { name: "description", content: "Post page" },
];

export default function PostPage({ params: { postId } }: Route.ComponentProps) {
  return <div>Post Page: {postId}</div>;
}


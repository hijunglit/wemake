import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/community-page";
import { Form, Link, useSearchParams } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/common/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { PERIOD_OPTIONS, SORT_OPTIONS } from "../constants";
import { Input } from "~/common/components/ui/input";
import { PostCard } from "~/features/products/components/post-card";
import { getPosts, getTopics } from "../queries";

export const meta: Route.MetaFunction = () => [
  { title: "Community | wemake" },
  { name: "description", content: "Community page" },
];

export const loader = async () => {
  const topics = await getTopics();
  const posts = await getPosts();
  return { topics, posts };
};

export default function CommunityPage({ loaderData }: Route.ComponentProps) {
  // SORT_OPTIONS에 따라 URL 파라미터 변경
  const [searchParams, setSearchParams] = useSearchParams();
  const sorting = searchParams.get("sorting") || "newest";
  const period = searchParams.get("period") || "all";
  return (
    <div>
      <Hero title="Community" subtitle="Share your ideas and get feedback" />
      <div className="grid grid-cols-6 items-start gap-40">
        <div className="col-span-4 space-y-10">
          <div className="flex justify-between">
            <div className="space-y-5 w-full">
              <div className="flex items-center gap-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <span className="text-sm">{sorting}</span>
                    <ChevronDownIcon className="size-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {SORT_OPTIONS.map((option) => (
                      <DropdownMenuCheckboxItem
                        className="capitalize cursor-pointer"
                        key={option}
                        onCheckedChange={(checked: boolean) => {
                          if (checked) searchParams.set("sorting", option);
                          setSearchParams(searchParams);
                        }}
                      >
                        {option}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                {sorting === "popular" && (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <span className="text-sm">{period}</span>
                      <ChevronDownIcon className="size-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {PERIOD_OPTIONS.map((option) => (
                        <DropdownMenuCheckboxItem
                          className="capitalize cursor-pointer"
                          key={option}
                          onCheckedChange={(checked: boolean) => {
                            if (checked) searchParams.set("period", option);
                            setSearchParams(searchParams);
                          }}
                        >
                          {option}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              <Form className="w-2/3">
                <Input
                  type="text"
                  name="search"
                  placeholder="Search for discussions"
                />
              </Form>
            </div>
            <Button asChild>
              <Link to={`/community/new`}>Create Discussion</Link>
            </Button>
          </div>
          <div className="space-y-5">
            {loaderData.posts.map((post) => (
              <PostCard
                key={`${post.post_id}`}
                id={post.post_id}
                title={post.title}
                author={post.author}
                authorAvatarUrl={post.author_avatar}
                category={post.topic}
                postedAt={post.created_at}
                votesCount={post.upvotes}
                expanded
              />
            ))}
          </div>
        </div>
        <aside className="col-span-2 space-y-4">
          <span className="text-sm font-bold text-muted-foreground uppercase">
            Topics
          </span>
          <div className="flex flex-col gap-4 items-start">
            {loaderData.topics.map((topic) => (
              <Button key={topic.slug} variant="link" asChild className="p-0">
                <Link to={`/community?category=${topic.slug}`}>
                  {topic.name}
                </Link>
              </Button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

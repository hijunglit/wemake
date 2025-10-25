import { index } from "@react-router/dev/routes"; // or "@remix-run/react" depending on context
import { ProductCard } from "~/features/products/components/product-card"
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Card, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { PostCard } from "~/features/products/components/post-card";

export const meta: MetaFunction = () => {
    return [
        { title: "Wemake | Home" },
        { name: "description", content: "Welcome to Wemake" },
    ]
}

export default function HomePage() {
    return (
        <div className="px-20 space-y-40">
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h2 className="text-5xl font-bold leading-tight tracking-tight">Today's Products</h2>
                        <p className="text-xl font-light text-foreground">Best projects made by our community today.</p>
                        <Button variant="link" asChild className="text-lg p-0">
                            <Link to="/products/leaderboard">Explore all products &rarr;</Link>
                        </Button>
                </div>
                    {Array.from({ length: 10 }).map(() => (
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
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h2 className="text-5xl font-bold leading-tight tracking-tight">Latest Discussions</h2>
                    <p className="text-xl font-light text-foreground">The latest discussion our community.</p>
                    <Button variant="link" asChild className="text-lg p-0">
                        <Link to="/community">Explore all discussion &rarr;</Link>
                    </Button>
                </div>
                {Array.from({ length: 11 }).map((_, index) => (
                    <PostCard
                        id="postId"
                        title= "What is best productibility tool?"
                        author="Nico"
                        authorAvatarUrl="https://github.com/apple.png"
                        category="Productivility"
                        postedAt="12 hours ago"
                    />
                ))}
            </div>    
        </div>
  )
}
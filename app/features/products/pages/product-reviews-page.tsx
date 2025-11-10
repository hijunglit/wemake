import { Button } from "~/common/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/common/components/ui/dialog";
import { ReviewCard } from "~/features/products/components/review-card";
import { CreateReviewDialog } from "../components/create-review-dialog";

export const meta = () => {
  return [
    { title: "Product Reviews | wemake" },
    { name: "description", content: "Product reviews page" },
  ];
};

export default function ProductReviewsPage() {
  return (
    <Dialog>
      <div className="space-y-10 max-w-screen-md">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">10 Reviews</h2>
          <DialogTrigger>
            <Button variant="secondary">Write a Review</Button>
          </DialogTrigger>
        </div>
        <div className="space-y-20">
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <ReviewCard
                key={i}
                name="John Doe"
                username="username"
                avatarFallback="N"
                avatarImage="https://github.com/meta.png"
                rating={5}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,"
                date="10 days ago"
              />
            );
          })}
        </div>
      </div>
      <CreateReviewDialog />
    </Dialog>
  );
}

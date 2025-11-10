import { StarIcon } from "lucide-react";
import { useState } from "react";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/common/components/ui/dialog";
import { Label } from "~/common/components/ui/label";

export function CreateReviewDialog() {
  const [rating, setRating] = useState<number>(0);
  const [hoverStar, setHoverstar] = useState<number>(0);
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl">
          What do you think of this product?
        </DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
      <Form className="space-y-10">
        <div>
          <Label className="flex flex-col gap-1">
            Rating
            <small className="text-muted-foreground">
              What would you rate this product?
            </small>
          </Label>
          <div className="flex justify-start gap-2 mt-5">
            {[1, 2, 3, 4, 5].map((star) => (
              <label
                key={star}
                className="relative"
                onMouseEnter={() => setHoverstar(star)}
                onMouseLeave={() => setHoverstar(0)}
              >
                <StarIcon
                  className="size-5 text-yellow-400"
                  fill={
                    hoverStar >= star || rating >= star
                      ? "currentColor"
                      : "none"
                  }
                />
                <input
                  type="radio"
                  value="star"
                  name="rating"
                  required
                  className="opacity-0 h-px w-px absolute"
                  onChange={() => setRating(star)}
                />
              </label>
            ))}
          </div>
        </div>

        <InputPair
          textArea
          required
          label="Review"
          placeholder="Tell us what you think of this product"
          description="Maximum 1000 characters"
        />
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  );
}

import { StarIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";

interface ReviewCardProps {
  name: string;
  username: string;
  avatarFallback: string;
  avatarImage?: string;
  rating: number;
  content: string;
  date: string;
}

export function ReviewCard({
  name,
  username,
  avatarFallback,
  avatarImage,
  rating,
  content,
  date,
}: ReviewCardProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>{avatarFallback}</AvatarFallback>
          {avatarImage && <AvatarImage src={avatarImage} />}
        </Avatar>
        <div>
          <h4 className="text-lg font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
      </div>
      <div className="flex text-yellow-400">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon
            key={index}
            className="size-4"
            fill={index < rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <p className="text-muted-foreground">{content}</p>
      <span className="text-xs text-muted-foreground">{date}</span>
    </div>
  );
}

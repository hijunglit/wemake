import { Link } from "react-router";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { ChevronRightIcon } from "lucide-react";

interface CategoryCardProps {
  categoryId: string;
  name: string;
  description: string;
}

export function CategoryCard({
  categoryId,
  name,
  description,
}: CategoryCardProps) {
  return (
    <Link to={`/products/categories/${categoryId}`} className="block">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {name} <ChevronRightIcon className="size-6" />
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

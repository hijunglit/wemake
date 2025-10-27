import { DateTime } from "luxon";
import type { Route } from "./+types/daily-leaderboard-page";
import { data, isRouteErrorResponse } from "react-router";
import z from "zod";

const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
})

export const loader = ({params}: Route.LoaderArgs) => {
  const { year, month, day } = params;
  paramsSchema.safeParse(params);
  const date = DateTime.fromObject({
    year: Number(year),
    month: Number(month),
    day: Number(day),
  }).setZone("Asia/Seoul");
  if (!date.isValid) {
    throw data(
      {
        error_code: "400",
        message: "date is invalid",
      },
      {status: 400},
    )
  }
  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
  if (date > today) {
    throw data(
      {
        error_code: "400",
        message: "future date",
      },
      {status: 400},
    )
  }
  return {
    date,
  }
}

export default function DailyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">

    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>{error.data.message} / {error.data.error_code}</div>
    )
  }
  if (error instanceof Error) {
    return <div>{ error.message }</div>
  }
  return <div>Unknown error</div>
}
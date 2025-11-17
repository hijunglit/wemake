import type { Route } from "./+types/social-start-page";

export default function SocialStartPage({
  params: { provider },
}: Route.ComponentProps) {
  return (
    <div>
      <h1>Social Start - {provider}</h1>
    </div>
  );
}


import type { Route } from "./+types/social-complete-page";

export default function SocialCompletePage({
  params: { provider },
}: Route.ComponentProps) {
  return (
    <div>
      <h1>Social Complete - {provider}</h1>
    </div>
  );
}


import { redirect } from "react-router";

export function loader() {
  return Response.json({ hello: "world" });
}

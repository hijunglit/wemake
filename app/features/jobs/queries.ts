import client from "~/supa-client";
import type { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from "./constants";

export const getJobs = async ({
  limit,
  location,
  type,
  salary,
}: {
  limit: number;
  location?: string;
  type?: string;
  salary?: string;
}) => {
  const baseQuery = client
    .from("jobs")
    .select(
      `
    job_id,
    position,
    overview,
    company_name,
    company_logo,
    company_location,
    job_type,
    location,
    salary_range,
    created_at
    `
    )
    .limit(limit);
  if (location) {
    baseQuery.eq(
      "location",
      // You can write as after the type to cast it to the Enum, just by writing as Cursor will cast it for you.
      location as (typeof LOCATION_TYPES)[number]["value"]
    );
  }
  if (type) {
    baseQuery.eq("job_type", type as (typeof JOB_TYPES)[number]["value"]);
  }
  if (salary) {
    baseQuery.eq("salary_range", salary as (typeof SALARY_RANGE)[number]);
  }
  const { data, error } = await baseQuery;
  if (error) {
    throw error;
  }
  return data;
};

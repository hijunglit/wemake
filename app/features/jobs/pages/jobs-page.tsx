import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/jobs-page";
import { JobCard } from "~/features/products/components/job-card";
import { Button } from "~/common/components/ui/button";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from "../constants";
import { Link, useSearchParams } from "react-router";
import { cn } from "~/lib/utils";

export default function JobsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const onFilterClick = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
    console.log(searchParams.toString());
  };
  return (
    <div className="space-y-20">
      <Hero title="Jobs" subtitle="Companies looking for makers" />
      <div className="grid grid-cols-6 gap-20 items-start">
        <div className="grid grid-cols-3 col-span-4 gap-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <JobCard
              key={`jobId-${index}`}
              id={`jobId-${index}`}
              company="Tesla"
              companyLogoUrl="https://github.com/facebook.png"
              companyHq="San Francisco, CA"
              title="Software Engineer"
              postedAt="12 hours ago"
              type="Full-time"
              positionLocation="Remote"
              salary="$100,000 - $120,000"
            />
          ))}
        </div>
        <div className="col-span-2 sticky top-20 flex flex-col gap-10">
          <div className="flex flex-col gap-2.5 items-start">
            <h4 className="text-sm text-muted-foreground font-bold">Type</h4>
            <div className="flex flex-wrap gap-2">
              {JOB_TYPES.map((type) => (
                <Button
                  variant="outline"
                  onClick={() => onFilterClick("jobs", type.value)}
                  className={cn(
                    type.value === searchParams.get("jobs")
                      ? "bg-primary/50"
                      : ""
                  )}
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-start">
            <h4 className="text-sm text-muted-foreground font-bold">
              Location
            </h4>
            <div className="flex flex-wrap gap-2">
              {LOCATION_TYPES.map((type) => (
                <Button
                  variant="outline"
                  onClick={() => onFilterClick("location", type.value)}
                  className={cn(
                    type.value === searchParams.get("location")
                      ? "bg-primary/50"
                      : ""
                  )}
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-start">
            <h4 className="text-sm text-muted-foreground font-bold">
              Location
            </h4>
            <div className="flex flex-wrap gap-2">
              {SALARY_RANGE.map((type) => (
                <Button
                  variant="outline"
                  onClick={() => onFilterClick("salary", type)}
                  className={cn(
                    type === searchParams.get("salary") ? "bg-primary/50" : ""
                  )}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

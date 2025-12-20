import { Badge } from "~/common/components/ui/badge";
import type { Route } from "./+types/job-page";
import { DotIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";
import { getJobById } from "../queries";
import z from "zod";
import { DateTime } from "luxon";
import { makeSSRClient } from "~/supa-client";

export const loader = async (
  { request }: Route.LoaderArgs,
  { params }: Route.LoaderArgs
) => {
  const { client, headers } = makeSSRClient(request);
  const job = await getJobById(client, { jobId: params.jobId });
  return { job };
};

export const paramsSchema = z.object({
  jobId: z.string(),
});

export default function JobPage({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <div className="bg-gradient-to-tr from-primary/80 to-primary/10 h-60 w-full rounded-lg"></div>
      <div className="grid grid-cols-6 -mt-20 gap-20 items-start">
        <div className="col-span-4 space-y-10">
          <div>
            <div className="size-40 bg-white rounded-full overflow-hidden relative left-10">
              <img src={loaderData.job.company_logo} className="object-cover" />
            </div>
            <h1 className="text-4xl font-bold">{loaderData.job.position}</h1>
            <h4 className="text-lg text-muted-foreground">
              {loaderData.job.company_name}
            </h4>
          </div>
          <div className="flex gap-2 capitalize">
            <Badge variant="secondary">{loaderData.job.job_type}</Badge>
            <Badge variant="secondary">{loaderData.job.location}</Badge>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-3xl font-bold">Overview</h4>
            <p className="text-lg">{loaderData.job.overview}</p>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-3xl font-bold">Responsibilities</h4>
            <ul className="list-disc list-inside">
              {loaderData.job.responsibilities.split(",").map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-3xl font-bold">Qualifications</h4>
            <ul className="list-disc list-inside">
              {loaderData.job.qualifications.split(",").map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-3xl font-bold">Benefits</h4>
            <ul className="list-disc list-inside">
              {loaderData.job.benefits.split(",").map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-3xl font-bold">Skills</h4>
            <ul className="list-disc list-inside">
              {loaderData.job.skills.split(",").map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-2 mt-32 space-y-5 sticky top-20 p-6 border rounded-lg">
          <div className="flex flex-col">
            <span>Avg.salary</span>
            <span className="text-2xl font-medium">
              {loaderData.job.salary_range}
            </span>
          </div>
          <div className="flex flex-col">
            <span>Location</span>
            <span className="text-2xl font-medium capitalize">
              {loaderData.job.location}
            </span>
          </div>
          <div className="flex flex-col">
            <span>Type</span>
            <span className="text-2xl font-medium capitalize">
              {loaderData.job.job_type}
            </span>
          </div>
          <div className="flex">
            <span className="text-sm text-muted-foreground">
              {DateTime.fromISO(loaderData.job.created_at).toRelative()}
            </span>
            <DotIcon className="size-4" />
            <span className="text-sm text-muted-foreground">395 views</span>
          </div>
          <Button className="w-full">Apply now</Button>
        </div>
      </div>
    </div>
  );
}

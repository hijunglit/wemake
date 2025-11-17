import { Badge } from "~/common/components/ui/badge";
import type { Route } from "./+types/job-page";
import { DotIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";

export default function JobPage() {
  return (
    <div>
      <div className="bg-gradient-to-tr from-primary/80 to-primary/10 h-60 w-full rounded-lg"></div>
      <div className="grid grid-cols-6 -mt-20 gap-20 items-start">
        <div className="col-span-4 space-y-10">
          <div>
            <div className="size-40 bg-white rounded-full overflow-hidden relative left-10">
              <img
                src="https://github.com/facebook.png"
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold">Software Engineer</h1>
            <h4 className="text-lg text-muted-foreground">Meta Inc.</h4>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary">Full-time</Badge>
            <Badge variant="secondary">Remote</Badge>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-3xl font-bold">Overview</h4>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-3xl font-bold">Responsibilities</h4>
            <ul className="list-disc list-inside">
              {[
                "Develop and maintain web applications using React and Node.js",
                "Implement new features and improve existing code",
                "Debug and fix bugs in the codebase",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-3xl font-bold">Qualifications</h4>
            <ul className="list-disc list-inside">
              {[
                "Bachelor's degree in Computer Science",
                "3+ years of experience in software development",
                "Strong understanding of JavaScript and React",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-3xl font-bold">Benefits</h4>
            <ul className="list-disc list-inside">
              {["Health insurance", "Dental insurance", "Vision insurance"].map(
                (item) => (
                  <li key={item}>{item}</li>
                )
              )}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-3xl font-bold">Skills</h4>
            <ul className="list-disc list-inside">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "Git",
                "GitHub",
                "Docker",
                "Kubernetes",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-2 mt-32 space-y-5 sticky top-20 p-6 border rounded-lg">
          <div className="flex flex-col">
            <span>Avg.salary</span>
            <span className="text-2xl font-medium">&100,000 - $120,000</span>
          </div>
          <div className="flex flex-col">
            <span>Location</span>
            <span className="text-2xl font-medium">Remote</span>
          </div>
          <div className="flex flex-col">
            <span>Type</span>
            <span className="text-2xl font-medium">Full Time</span>
          </div>
          <div className="flex">
            <span className="text-sm text-muted-foreground">
              Posted 2days ago
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

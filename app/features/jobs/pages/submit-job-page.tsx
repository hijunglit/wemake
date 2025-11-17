import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-job-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from "../constants";
import { Button } from "~/common/components/ui/button";

export default function SubmitJobPage() {
  return (
    <div>
      <Hero title="Post a Job" subtitle="Reach out to the best makers" />
      <Form className="max-w-screen-2xl flex flex-col items-center gap-10 mx-auto">
        <div className="grid grid-cols-3 gap-10 w-full">
          <InputPair
            id="position"
            label="Position"
            description="(40 characters max)"
            name="position"
            maxLength={40}
            required
            type="text"
            placeholder="e.g. Software Engineer"
          />
          <InputPair
            id="overview"
            label="Overview"
            description="(400 characters max)"
            name="overview"
            maxLength={400}
            required
            type="text"
            placeholder="i.g we are looking for a software engineer with a passion for building scalable and efficient systems"
            textArea
          />
          <InputPair
            id="responsibilities"
            label="Responsibilities"
            description="(400 characters max, comma separated)"
            name="responsibilities"
            maxLength={400}
            required
            type="text"
            placeholder="i.e implement new features and improve existing code"
            textArea
          />
          <InputPair
            id="qualifications"
            label="Qualifications"
            description="(400 characters max, comma separated)"
            name="qualifications"
            maxLength={400}
            required
            type="text"
            placeholder="i.e implement new features and improve existing code"
            textArea
          />
          <InputPair
            id="benefits"
            label="Benefits"
            description="(400 characters max, comma separated)"
            name="benefits"
            maxLength={400}
            required
            type="text"
            placeholder="i.e implement new features and improve existing code"
            textArea
          />
          <InputPair
            id="skills"
            label="Skills"
            description="(400 characters max, comma separated)"
            name="skills"
            maxLength={400}
            required
            type="text"
            placeholder="i.e implement new features and improve existing code"
            textArea
          />
          <InputPair
            id="companyName"
            label="Company Name"
            description="(400 characters max, comma separated)"
            name="companyName"
            maxLength={40}
            required
            type="text"
            placeholder="i.e implement new features and improve existing code"
          />
          <InputPair
            id="companyLogoUrl"
            label="Company Logo URL"
            description="(400 characters max)"
            name="companyLogoUrl"
            required
            type="url"
            placeholder="https://example.com/logo.png"
          />
          <InputPair
            id="companyLocation"
            label="Company Location"
            description="(40 characters max)"
            name="companyLocation"
            maxLength={40}
            required
            type="text"
            placeholder="e.g. San Francisco, CA"
          />
          <InputPair
            id="applyUrl"
            label="Apply URL"
            description="(40 characters max)"
            name="applyUrl"
            maxLength={40}
            required
            type="url"
            placeholder="https://example.com/apply"
          />
          <SelectPair
            label="Job Type"
            description="Select the type of job"
            name="jobType"
            required
            placeholder="Select the job of type"
            options={JOB_TYPES.map((type) => ({
              label: type.label,
              value: type.value,
            }))}
          />
          <SelectPair
            label="Job Location"
            description="Select the type of job"
            name="jobLocation"
            required
            placeholder="Select the job of type"
            options={LOCATION_TYPES.map((location) => ({
              label: location.label,
              value: location.value,
            }))}
          />
          <SelectPair
            label="Salary Range"
            description="Select the type of job"
            name="salaryRange"
            required
            placeholder="Select the salary range of the job"
            options={SALARY_RANGE.map((salary) => ({
              label: salary,
              value: salary,
            }))}
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Post job for $100
        </Button>
      </Form>
    </div>
  );
}

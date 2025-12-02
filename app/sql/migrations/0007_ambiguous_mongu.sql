ALTER TABLE "team" DROP CONSTRAINT "time_size_check";--> statement-breakpoint
ALTER TABLE "team" DROP CONSTRAINT "product_description_check";--> statement-breakpoint
ALTER TABLE "team" ALTER COLUMN "roles" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "team" ADD CONSTRAINT "team_size_check" CHECK ("team"."team_size" BETWEEN 1 AND 100);--> statement-breakpoint
ALTER TABLE "team" ADD CONSTRAINT "product_description_check" CHECK (LENGTH("team"."product_description") <= 200);
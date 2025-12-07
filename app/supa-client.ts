import { createClient } from "@supabase/supabase-js";
import type { MergeDeep, SetFieldType, SetNonNullable } from "type-fest";
import type { Database as supabaseDatabase } from "database.types";

type Database = MergeDeep<
  supabaseDatabase,
  {
    public: {
      Views: {
        community_post_list_view: {
          Row: SetFieldType<
            SetNonNullable<
              supabaseDatabase["public"]["Views"]["community_post_list_view"]["Row"]
            >,
            "author_avatar",
            "string" | null
          >;
        };
      };
    };
  }
>;

const client = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_PUBLIC_KEY!
);
export default client;

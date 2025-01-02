import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (({ }) => {
  redirect(303, '/home')
}) satisfies PageLoad
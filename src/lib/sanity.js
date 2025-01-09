import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "YOUR_PROJECT_ID",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01"
});

export async function getAllPosts() {
  const query = `*[_type == "post"]{title, slug, body}`;
  return await client.fetch(query);
}

import { createClient } from "contentful";

const client = createClient({
  space: "YOUR_SPACE_ID",
  accessToken: "YOUR_CONTENT_DELIVERY_API_TOKEN"
});

export async function getEntriesByType(contentType) {
  const response = await client.getEntries({ content_type: contentType });
  return response.items;
}

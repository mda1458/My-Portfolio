import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const token = import.meta.env.VITE_SANITY_TOKEN;
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
export const client = createClient({
  projectId,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
}
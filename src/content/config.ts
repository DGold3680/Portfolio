// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const projectCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    details: z.string(),
    coverImg: z.string(),
    tags: z.array(z.string()),
  }),
});

const articleCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    author: z.string().default("David Gold"),
    authorImg: z.string(),
    coverImg: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
    readTime:z.number(),
    tagColor:z.string()
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  project: projectCollection,
  article: articleCollection,
};

//review types exp image types
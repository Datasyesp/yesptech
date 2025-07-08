import type { SchemaTypeDefinition } from "sanity"
import { blogPost, blockContent } from "./schemas/blogPost"
import { category } from "./schemas/category"
import { author } from "./schemas/author"
import { faq } from "./schemas/faq"
import { seo } from "./schemas/seo"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, blockContent, category, author, faq, seo],
}

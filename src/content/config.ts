import { defineCollection, z } from "astro:content"

const filosofiabarata = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tipo: z.string().optional(),
    categorias: z.string(),
    etiquetas: z.string().optional(),
    img: z.string().optional(),
  }),
})

export const collections = { filosofiabarata }
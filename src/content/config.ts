import { z, defineCollection } from "astro:content";

const mainCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        picture: z.string().optional(),
        linkedin: z.string().url().optional(),
        resume: z.string().url().optional()
    })
})

const experiencesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        company: z.string(),
        position: z.string(),
        picture: z.string(),
        start: z.date(),
        end: z.date().optional(),
        link: z.string().url().optional()
    })
})

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        picture: z.string(),
        technologies: z.array(z.string()),
        start: z.date(),
        end: z.date().optional(),
        link: z.string().url().optional(),
    })
})

export const collections = {
    main: mainCollection,
    experiences: experiencesCollection,
    projects: projectsCollection
}
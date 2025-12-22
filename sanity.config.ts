'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'

// Custom structure for organizing content
const deskStructure = (S: any) =>
    S.list()
        .title('Content')
        .items([
            // Page Builder - Dynamic Pages
            S.listItem()
                .title('Page Builder')
                .schemaType('page')
                .child(S.documentTypeList('page').title('All Pages')),

            S.divider(),

            // Legacy Pages (Home & About)
            S.listItem()
                .title('Static Pages')
                .child(
                    S.list()
                        .title('Static Pages')
                        .items([
                            S.listItem()
                                .title('Home Page')
                                .child(S.document().schemaType('homePage').documentId('homePage')),
                            S.listItem()
                                .title('About Page')
                                .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
                            S.listItem()
                                .title('Contact Page')
                                .child(S.document().schemaType('contactPage').documentId('contactPage')),
                        ])
                ),

            S.divider(),


            // Faculty Group
            S.listItem()
                .title('Faculty')
                .child(
                    S.list()
                        .title('Faculty')
                        .items([
                            S.listItem()
                                .title('Faculty Categories')
                                .schemaType('facultyCategory')
                                .child(S.documentTypeList('facultyCategory').title('Faculty Categories')),
                            S.listItem()
                                .title('Faculty Departments')
                                .schemaType('faculty')
                                .child(S.documentTypeList('faculty').title('Faculty Departments')),
                            S.listItem()
                                .title('Faculty Members')
                                .schemaType('facultyMember')
                                .child(S.documentTypeList('facultyMember').title('Faculty Members')),
                        ])
                ),

            S.divider(),

            // Courses
            S.listItem()
                .title('Courses')
                .schemaType('course')
                .child(S.documentTypeList('course').title('Courses')),

            // Blog Posts
            S.listItem()
                .title('Blog Posts')
                .schemaType('post')
                .child(S.documentTypeList('post').title('Blog Posts')),

            // Events
            S.listItem()
                .title('Events')
                .schemaType('event')
                .child(S.documentTypeList('event').title('Events')),

            // Job Positions
            S.listItem()
                .title('Job Positions')
                .schemaType('job')
                .child(S.documentTypeList('job').title('Job Positions')),

            // Virtual Tour
            S.listItem()
                .title('Virtual Tour')
                .child(S.document().schemaType('virtualTour').documentId('virtualTour')),

            S.divider(),

            // Settings Group
            S.listItem()
                .title('Settings')
                .child(
                    S.list()
                        .title('Settings')
                        .items([
                            S.listItem()
                                .title('Header Settings')
                                .child(S.document().schemaType('headerSettings').documentId('headerSettings')),
                            S.listItem()
                                .title('Navigation Menu')
                                .child(S.document().schemaType('navigation').documentId('navigation')),
                            S.listItem()
                                .title('Footer')
                                .child(S.document().schemaType('footer').documentId('footer')),
                        ])
                ),
        ])

export default defineConfig({
    basePath: '/studio',
    projectId: projectId || '',
    dataset: dataset || '',
    // Add and edit the content schema in the './sanity/schema' folder
    schema,
    plugins: [
        structureTool({
            structure: deskStructure,
        }),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
    ],
})

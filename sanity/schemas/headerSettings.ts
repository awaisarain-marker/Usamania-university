import { defineField, defineType } from 'sanity'

export const headerSettings = defineType({
    name: 'headerSettings',
    title: 'Header Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Settings Name',
            type: 'string',
            initialValue: 'Header Settings',
            hidden: true,
        }),

        // Logo Section
        defineField({
            name: 'logoUrl',
            title: '🏛️ Logo - Option 1: Paste URL',
            type: 'url',
            description: 'External URL for the logo image',
        }),
        defineField({
            name: 'logo',
            title: '🏛️ Logo - Option 2: Upload',
            type: 'image',
            description: 'Or upload a logo image directly (URL takes priority)',
            options: { hotspot: true },
        }),

        // Announcement Button (Admission Open)
        defineField({
            name: 'announcementText',
            title: '📢 Announcement Button - Text',
            type: 'string',
            description: 'e.g., "Admission Open Spring 2026!"',
            initialValue: 'Admission Open Spring 2026!',
        }),
        defineField({
            name: 'announcementLink',
            title: '📢 Announcement Button - Link',
            type: 'url',
            description: 'URL when clicked (e.g., admission portal)',
            initialValue: 'https://eduboard.uit.edu/AdmissionPortal/Login',
        }),
        defineField({
            name: 'announcementVisible',
            title: '📢 Announcement Button - Show/Hide',
            type: 'boolean',
            description: 'Toggle to show or hide the announcement button',
            initialValue: true,
        }),

        // Apply Now Button
        defineField({
            name: 'applyNowText',
            title: '🎓 Apply Now Button - Text',
            type: 'string',
            description: 'e.g., "Apply Now"',
            initialValue: 'Apply Now',
        }),
        defineField({
            name: 'applyNowLink',
            title: '🎓 Apply Now Button - Link',
            type: 'string',
            description: 'URL when clicked (e.g., /admission)',
            initialValue: '/admission',
        }),

        // Explore Button (opens mega menu)
        defineField({
            name: 'exploreText',
            title: '🔍 Explore Button - Text',
            type: 'string',
            description: 'Text for the menu button (opens mega menu)',
            initialValue: 'Explore',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Header Settings',
                subtitle: 'Logo, Buttons, and Announcement',
            }
        },
    },
})

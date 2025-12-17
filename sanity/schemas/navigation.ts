import { defineField, defineType } from 'sanity'

// Menu Item schema (for nested items)
export const menuItem = defineType({
    name: 'menuItem',
    title: 'Menu Item',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            description: 'Text to display in the menu',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'href',
            title: 'Link URL',
            type: 'string',
            description: 'URL the menu item links to (e.g., /about-us or https://...)',
        }),
        defineField({
            name: 'children',
            title: 'Sub-menu Items',
            type: 'array',
            of: [{ type: 'menuItem' }],
            description: 'Drag and drop to reorder sub-menu items',
        }),
    ],
    preview: {
        select: {
            title: 'label',
            href: 'href',
            children: 'children',
        },
        prepare({ title, href, children }) {
            return {
                title,
                subtitle: children?.length ? `${children.length} sub-items` : href || 'No link',
            }
        },
    },
})

// Main Navigation schema (singleton - only one navigation document)
export const navigation = defineType({
    name: 'navigation',
    title: 'Navigation Menu',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Navigation Name',
            type: 'string',
            initialValue: 'Main Navigation',
            hidden: true,
        }),
        defineField({
            name: 'menuItems',
            title: 'Menu Items',
            type: 'array',
            of: [{ type: 'menuItem' }],
            description: 'Drag and drop to reorder main menu categories',
        }),
    ],
    preview: {
        select: {
            items: 'menuItems',
        },
        prepare({ items }) {
            return {
                title: 'Main Navigation',
                subtitle: `${items?.length || 0} menu categories`,
            }
        },
    },
})

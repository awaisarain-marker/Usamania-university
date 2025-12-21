import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'contactPage',
    title: 'Contact Us Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'contact', title: 'Contact Information' },
        { name: 'form', title: 'Form Settings' },
    ],
    fields: [
        // ===== HERO SECTION =====
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            group: 'hero',
            initialValue: 'Contact Us',
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'string',
            group: 'hero',
            initialValue: 'Get in touch with UIT University',
        }),
        defineField({
            name: 'heroBgImage',
            title: 'Hero Background Image',
            type: 'url',
            group: 'hero',
        }),

        // ===== CONTACT INFORMATION =====
        defineField({
            name: 'address',
            title: 'Address',
            type: 'text',
            group: 'contact',
            initialValue: 'ST-13, Abul Hasan Isphahani Road, Block 7, Gulshan-e-Iqbal (Opposite Safari Park) Karachi 75300.',
        }),
        defineField({
            name: 'uanNumber',
            title: 'UAN Number',
            type: 'string',
            group: 'contact',
            initialValue: '(92-21) 111-978-275, 34994305, 34978274-5',
        }),
        defineField({
            name: 'admissionsNumber',
            title: 'Admissions Number',
            type: 'string',
            group: 'contact',
            initialValue: '0333-0399113',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            group: 'contact',
            initialValue: 'info@uitu.edu.pk',
        }),
        defineField({
            name: 'mapEmbedUrl',
            title: 'Google Maps Embed URL',
            type: 'url',
            group: 'contact',
            description: 'Use the embed URL from Google Maps',
        }),

        // ===== FORM SETTINGS =====
        defineField({
            name: 'formTitle',
            title: 'Form Title',
            type: 'string',
            group: 'form',
            initialValue: 'Feedback',
        }),
        defineField({
            name: 'formSubmitText',
            title: 'Submit Button Text',
            type: 'string',
            group: 'form',
            initialValue: 'Submit',
        }),
        defineField({
            name: 'formSuccessMessage',
            title: 'Success Message',
            type: 'text',
            group: 'form',
            initialValue: 'Thank you for your feedback! We have received your message and will get back to you soon.',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Contact Us Page',
                subtitle: 'Contact page settings',
            }
        },
    },
})

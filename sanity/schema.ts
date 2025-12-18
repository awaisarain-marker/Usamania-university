import { type SchemaTypeDefinition } from 'sanity'

import { headerSettings } from './schemas/headerSettings'
import { navigation, menuItem } from './schemas/navigation'
import hero from './schemas/hero'
import { course } from './schemas/course'
import post from './schemas/post'
import { footer } from './schemas/footer'
import doubleImage from './schemas/doubleImage'
import quote from './schemas/quote'
import twoColumnImageGrid from './schemas/twoColumnImageGrid'
import event from './schemas/event'
import homePage from './schemas/homePage'
import aboutPage from './schemas/aboutPage'
import facultyMember from './schemas/facultyMember'
import faculty from './schemas/faculty'
import facultyCategory from './schemas/facultyCategory'
import page from './schemas/page'
import { pageBuilderBlocks } from './schemas/pageBuilderBlocks'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        // Pages
        page,
        homePage,
        aboutPage,
        // Faculty
        faculty,
        facultyCategory,
        facultyMember,
        // Content
        post,
        hero,
        course,
        event,
        // Settings
        navigation,
        menuItem,
        headerSettings,
        footer,
        // Other
        doubleImage,
        quote,
        twoColumnImageGrid,
        // Page Builder Blocks
        ...pageBuilderBlocks,
    ],
}

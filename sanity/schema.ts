import { type SchemaTypeDefinition } from 'sanity'

import hero from './schemas/hero'
import post from './schemas/post'
import { course } from './schemas/course'
import { navigation, menuItem } from './schemas/navigation'
import { headerSettings } from './schemas/headerSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [hero, post, course, navigation, menuItem, headerSettings],
}

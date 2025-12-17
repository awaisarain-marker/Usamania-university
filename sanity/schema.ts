import { type SchemaTypeDefinition } from 'sanity'

import hero from './schemas/hero'
import post from './schemas/post'
import { course } from './schemas/course'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [hero, post, course],
}

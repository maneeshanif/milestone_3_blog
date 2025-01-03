import { type SchemaTypeDefinition } from 'sanity'
import actionblog from './actionblog'
import trendingblog from './trendingblog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [actionblog,trendingblog],
}

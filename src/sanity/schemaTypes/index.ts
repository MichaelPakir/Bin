import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import category from './category'
import banner from '../schemas/banner'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, products, category ],
}

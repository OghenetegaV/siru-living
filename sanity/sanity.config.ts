import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Siru Design Blog',

  projectId: 'jqmr254x',
  dataset: 'production',

  plugins: [structureTool(),],

  schema: {
    types: schemaTypes,
  },
})

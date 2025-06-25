import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'lutkiuk4',
  dataset: 'production',
  apiVersion: '2024-06-25',
  useCdn: true,
}) 
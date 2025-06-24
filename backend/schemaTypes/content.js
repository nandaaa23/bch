export default {
  name: 'featuredContent',
  title: 'Content',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Card Description',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Card Image',
              type: 'image',
              options: { hotspot: true },
            }
          ]
        }
      ]
    }
  ]
}

export default {
  name: 'category',
  title: 'Categoría',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
    },

    {
      name: 'icon',
      title: 'Ícono',
      type: 'image',
    },

    {
      name: 'parent',
      title: 'Categoría padre',
      type: 'reference',
      to: [{type: 'category'}],
      description: 'Opcional. Si se define, esta categoría será hija de otra.',
    },

    {
      name: 'products',
      title: 'Productos (ordenados)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
        },
      ],
    },
  ],
}

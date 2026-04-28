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

    // 🔥 DRAG & DROP
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

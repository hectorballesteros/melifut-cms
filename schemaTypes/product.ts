export default {
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    {name: 'name', title: 'Nombre', type: 'string'},

    {
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [{type: 'image'}],
    },

    {name: 'year', title: 'Año', type: 'number'},
    {
      name: 'team',
      title: 'Equipo',
      type: 'reference',
      to: [{type: 'team'}],
    },

    {
      name: 'isRetro',
      title: 'Es retro?',
      type: 'boolean',
    },

    // 🟢 DISPONIBLE (control principal)
    {
      name: 'available',
      title: 'Disponible',
      type: 'boolean',
    },

    // 🟡 STOCK INMEDIATO (tipo de entrega)
    {
      name: 'inStock',
      title: 'Stock inmediato',
      type: 'boolean',
      initialValue: false,
    },

    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },

    {
      name: 'order',
      title: 'Orden',
      type: 'number',
    },
  ],
}

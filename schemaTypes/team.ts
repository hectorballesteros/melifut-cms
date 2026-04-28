export default {
  name: 'team',
  title: 'Equipo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Escudo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

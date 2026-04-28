const {createClient} = require('@sanity/client')

const client = createClient({
  projectId: 'h597e3q5',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token:
    'sk0eClAQtr6YZ6QXBeNLGStp3DPw3ZgHp7yZflU7DXf6ZA5de2JjdGYUhrPuHp1f6QUQvt7Gx8nR8fua1NFUr8HR4jq5QNPzxlORo20tvLdYtNSQI8TzoGbCPJX5q6S0WhzK4y7ijch9Q8wISzF7Jo9mZOPG2Nb5w7De6zDXnhyWEhVYgT45', // 👈 reemplaza aquí
  useCdn: false,
})

async function sync() {
  const categories = await client.fetch(`
    *[_type == "category"]{
      _id,
      name,
      products[]->{ _id }
    }
  `)

  for (const cat of categories) {
    if (!cat.products) continue

    for (const product of cat.products) {
      await client
        .patch(product._id)
        .setIfMissing({categories: []})
        .append('categories', [{_type: 'reference', _ref: cat._id}])
        .commit()

      console.log(`✅ ${product._id} ← ${cat.name}`)
    }
  }

  console.log('🎉 Sync terminado')
}

sync()

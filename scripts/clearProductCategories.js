const {createClient} = require('@sanity/client')

const client = createClient({
  projectId: 'h597e3q5',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token:
    'sk0eClAQtr6YZ6QXBeNLGStp3DPw3ZgHp7yZflU7DXf6ZA5de2JjdGYUhrPuHp1f6QUQvt7Gx8nR8fua1NFUr8HR4jq5QNPzxlORo20tvLdYtNSQI8TzoGbCPJX5q6S0WhzK4y7ijch9Q8wISzF7Jo9mZOPG2Nb5w7De6zDXnhyWEhVYgT45',
  useCdn: false,
})

async function clearCategories() {
  const products = await client.fetch(`*[_type == "product"]{ _id }`)

  for (const product of products) {
    await client.patch(product._id).unset(['categories']).commit()
    console.log(`🧹 Limpio: ${product._id}`)
  }

  console.log('✅ Todas las categorías eliminadas')
}

clearCategories()

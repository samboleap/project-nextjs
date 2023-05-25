import React from 'react'

async function fetchProducts(id){
  const resp = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  return resp.json()
}

export async function generateMetadata({params}){
  const product = await fetchProducts(params.id)
  return{ 
  title: product.title,
  description: product.description,
  thumbnail: product.images,
  metadataBase: new URL('https://istad.co'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: product.images[0],
    title: product.title,
    description: product.description
  },
  }
}

export default async function ProductDetail({params}) {
    const{id} = params
    const product = await fetchProducts(id)
  return (
    <div>
    <h1>Product Detail: {product.title}</h1>
    <img src={product.images[0]} alt={product.title}/>
    </div>
  )
}
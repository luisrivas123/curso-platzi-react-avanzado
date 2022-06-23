import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg'

// Exportar nombrando los componentes
// Props de Category
export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
  // Elemento html que hace la navegación al href
  // <Anchor href={path}>
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)

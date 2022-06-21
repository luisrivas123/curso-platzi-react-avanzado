import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    window.fetch('https://petiesgram-server.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      // Si, showFixed es diferente a newShowFixed
      // entonces se ejecuta el metodo setShowFixed para actualizar el estado
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    // Escucha el evento scroll y ejecuta el metodo onScroll
    document.addEventListener('scroll', onScroll)
    // Para limpiar los efectos del evenlistner
    return () => document.removeEventListener('scroll', onScroll)
    // se ejecuta cada que cambia el estado
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  return (
    <Fragment>
      {renderList()}
      {/* Se renderiza la lista fija solo cuando showfixed es true*/}
      {showFixed && renderList(true)}
    </Fragment>
  )
}

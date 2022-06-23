import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petiesgram-server.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

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
    <List fixed={fixed}>
      {
        // Una ternaria
        loading
          // Si esta cargando muestra el item con una key
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => 
              <Item key={category.id}>
                <Category {...category} path={`/pet/${category.id}`} />
            </Item>)
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

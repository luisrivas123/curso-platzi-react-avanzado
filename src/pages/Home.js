import React, { Fragment } from "react";
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = () => {
  const { categoryId } = useParams();
  return (
    <Fragment>
      <Layout 
        title='Tu app de fotos de mascotas' 
        subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'>
      </Layout>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Fragment>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})

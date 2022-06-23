import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql, useQuery } from "@apollo/client";
// import { gql } from 'apollo-boost'
// import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
// function renderProp ({ id }) {
//   const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
//     variables: {
//       id: id
//     }
//   }
//   )
//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Error!</p>

//   const { photo = {} } = data
//   return <PhotoCard {...photo} />
// }

export const PhotoCardWithQuery = ({ id }) => {
  // console.log(id)
  // renderProp( id )
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
      variables: {
        id: id
      }
    }
  )
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <PhotoCard {...data.photo} />
  )
}


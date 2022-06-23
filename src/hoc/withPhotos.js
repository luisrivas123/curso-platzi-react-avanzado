import { gql, useQuery } from "@apollo/client";

// Componente de orden superior, envuelve el componente
// y recuperar la información 
export function useGetPhotos (categoryId) {
  const GET_PHOTOS = gql`
    query getPhotos ($categoryId: ID) {
      photos (categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `
  const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId } })

  return { loading, error, data }
}


import { useQuery, gql } from '@apollo/client'

const GET_FAVORITES = gql`
    query getFavs {
        favs {
            id 
            categoryId
            src
            likes
            userId
        }
    }
`

export const GetFavorite = ()=> {
    const {data, loading, error} = useQuery(GET_FAVORITES, {
        fetchPolicy: 'network-only'
    })

    return {data , loading, error}
}

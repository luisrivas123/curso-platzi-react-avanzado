import { useGetPhotos } from '../hoc/withPhotos'
// import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

export const ListOfPhotoCards = (categoryId) => {
  const { error, loading, data }  = useGetPhotos(categoryId)
  return { loading, error, data }
}

// export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)

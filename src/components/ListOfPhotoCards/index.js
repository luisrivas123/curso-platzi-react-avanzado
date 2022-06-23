import React from 'react'
import { useQuery } from "@apollo/client";

import { useGetPhotos } from '../../hoc/withPhotos';
import { PhotoCard } from '../PhotoCard'


// export const ListOfPhotoCards = () => {
//   return (
//     <ul>
//       {/* renderiza el PhotoCard */}
//       {[1, 2, 3, 4, 5, 6, 7].map(id => <PhotoCard key={id} id={id} />)}
//     </ul>
//   )
// }

// export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
export const ListOfPhotoCards = ({ categoryId }) => {

  const { error, loading, data }  = useGetPhotos(categoryId)

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
      {/* {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)} */}
    </ul>
  );
};


import React, { Fragment } from "react";
import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

export default () => {
// export const Detail = () => {
  const { detailId } = useParams();
  // console.log(detailId)
  return (
    <Fragment>
      <PhotoCardWithQuery id={detailId} />
    </Fragment>
  )
}
// export const Detail = () =>{
//   const params = useParams();
//   console.log(params)
//   return (
//     <PhotoCardWithQuery id={params.detailId} />
//   )
// }


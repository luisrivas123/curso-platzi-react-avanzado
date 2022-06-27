import React, {Fragment} from 'react'
import { GetFavorite } from '../container/GetFavorite'
import { ListOfFavs } from '../components/ListOfFavs';


export const Favs = () => {
  <h1>Favs</h1>
  const { data, loading, error } = GetFavorite()
    // console.log(data);
    if (loading) return 'loading...'
    if (error) return 'error'

    return <ListOfFavs favs={data.favs} />
  // return(
  //   <Fragment>
  //     <h1>Favs</h1>
  //   </Fragment>
  // )

    // if(error) 
    //   return <p>Error!</p>
    
    // if(loading) 
    //   return <p>Error!</p>
    
    // const { favs } = data
    
    // return favs.map(fav => <img key={fav.id} src={fav.src} />)
}
  

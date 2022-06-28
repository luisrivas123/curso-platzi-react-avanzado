import React, {Fragment} from 'react'
import { GetFavorite } from '../container/GetFavorite'
import { ListOfFavs } from '../components/ListOfFavs';
import { Layout } from '../components/Layout'

export default () => {
  
  const { data, loading, error } = GetFavorite()
    // console.log(data);
    if (loading) return 'loading...'
    if (error) return 'error'

    return (
      <Fragment>
        <Layout 
          title='Tus fotos de mascotas favoritas' 
          subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'>
        </Layout>
        <ListOfFavs favs={data.favs} />
      </Fragment>
      
    )
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
  

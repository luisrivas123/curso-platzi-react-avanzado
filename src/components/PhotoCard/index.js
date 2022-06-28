import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Article, ImgWrapper, Img } from './styles'
// import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  // Seguarda la referencia de article
  const [show, element] = useNearScreen()
  // const key = `like-${id}`
  // const [liked, setLiked] = useLocalStorage(key, false)
  const { mutation, mutationLoading, mutationError } = ToggleLikeMutation()
  
  const handleFavClick = () => {
    // !liked && mutation({
    mutation({
      variables: {
        input: { id }
      }
    })
    // setLiked(!liked)
  }

  return (
    // Captura el elemento del DOM
    <Article ref={element}>
      {
        show && <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <FavButton
            liked={liked} likes={likes}
            onClick={handleFavClick} 
          />

        </Fragment>
      }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}

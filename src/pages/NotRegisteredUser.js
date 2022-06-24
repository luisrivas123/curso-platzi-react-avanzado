import React, { Fragment } from 'react'
import Context from '../Context'

import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => {

  const { registerMutation, mutationError, mutationLoading } = RegisterMutation()
  
  // <h1>NotRegisteredUser</h1>
  return(
  
  <Context.Consumer>
  {
    ({ activateAuth }) => {
      const onSubmit = ({email, password}) => {
        const input = { email, password }
        const variables = { input }
        registerMutation({ variables })
        .then(activateAuth)
      } 

      const errorMsg = mutationError && 'El usuario ya existe'
      // console.log(mutationLoading);
      return (
        <Fragment>
          <UserForm 
          disabled={mutationLoading}
          error={errorMsg} 
          title='Registrarse' 
          onSubmit={onSubmit} />
          <UserForm title='Iniciar sesión' onSubmit={activateAuth} />
        </Fragment>
      )        
      // return (
      //   <form onSubmit={activateAuth}>
      //     <button>Iniciar sesión</button>
      //   </form>
      // )
    }
  }
  </Context.Consumer>
  )
}

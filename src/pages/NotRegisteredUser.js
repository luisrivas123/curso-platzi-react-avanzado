import React, { Fragment } from 'react'
import Context from '../Context'

import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {

  const { registerMutation, registerError, registerLoading } = RegisterMutation()
  const { loginMutation, loginError, loginLoading } = LoginMutation()
  // <h1>NotRegisteredUser</h1>
  return(
  
  <Context.Consumer>
  {
    ({ activateAuth }) => {
      const onSubmit = ({email, password}) => {
        const input = { email, password }
        const variables = { input }
        // registerMutation({ variables })
        // .then(activateAuth)
        loginMutation({ variables })
        .then(activateAuth)
      } 

      const errorMsg = registerError || loginError && 'El usuario ya existe'
      // const errorMsg = registerError && 'El usuario ya existe'
      // console.log(mutationLoading);
      return (
        <Fragment>

          <UserForm 
          disabled={registerLoading}
          error={errorMsg} 
          title='Registrarse' 
          onSubmit={onSubmit} />

          <UserForm
          disabled={loginLoading}
          error={errorMsg} 
          title='Iniciar sesión' 
          onSubmit={onSubmit} />

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

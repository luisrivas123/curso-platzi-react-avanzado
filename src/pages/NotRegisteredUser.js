import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'

import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  const { registerMutation, registerError, registerLoading } = RegisterMutation()
  const { loginMutation, loginError, loginLoading } = LoginMutation()
  // <h1>NotRegisteredUser</h1>
  
  const onSubmitRegister = ({email, password}) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables })
    // .then(activateAuth)
    .then(({ data }) => {
      const { signup } = data
      // console.log(signup);
      activateAuth(signup)
    })
  }

  const onSubmitLogin = ({email, password}) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables })
    // .then(response => {
    //   console.log(response);
    .then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  } 

  const errorRegisterMsg = registerError && 'El usuario ya existe'
  const erroLoginrMsg = loginError && 'El usuario o Contraseña invalidad'
  // const errorMsg = registerError && 'El usuario ya existe'
  // console.log(mutationLoading);
  return (
    <Fragment>

      <UserForm 
      disabled={registerLoading}
      error={errorRegisterMsg} 
      title='Registrarse' 
      onSubmit={onSubmitRegister} />

      <UserForm
      disabled={loginLoading}
      error={erroLoginrMsg} 
      title='Iniciar sesión' 
      onSubmit={onSubmitLogin} />

    </Fragment>
  )        
  // return (
  //   <form onSubmit={activateAuth}>
  //     <button>Iniciar sesión</button>
  //   </form>
  // )
    
  
}

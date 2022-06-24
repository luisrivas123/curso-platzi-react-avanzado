import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  // <h1>NotRegisteredUser</h1>
  <Context.Consumer>
    {
      // Render prop
      ({ activateAuth }) => {
        return (
          <Fragment>
            <UserForm title='Registrarse' onSubmit={activateAuth} />
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

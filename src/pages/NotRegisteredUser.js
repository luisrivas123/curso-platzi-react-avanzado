import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  // <h1>NotRegisteredUser</h1>
  <Context.Consumer>
    {
      // Render prop
      ({ activateAuth }) => {
        return (
          <UserForm onSubmit={activateAuth} />
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

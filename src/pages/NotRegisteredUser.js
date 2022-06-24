import React from 'react'
import Context from '../Context'

export const NotRegisteredUser = () => (
  // <h1>NotRegisteredUser</h1>
  <Context.Consumer>
    {
      // Render prop
      ({ activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Iniciar sesión</button>
          </form>
        )
      }
    }
  </Context.Consumer>
)

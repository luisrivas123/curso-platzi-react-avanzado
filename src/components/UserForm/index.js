import React from "react";
// Hook
import { useInputValue } from "../../hooks/useInputValue";

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  return (
    <form onSubmit={onSubmit}>
      {/* Recuperar el evento e */}
      <input placeholder='Email' {...email} />

      <input placeholder='Password' type='password' 
        {...password} 
      />

      {/* <input placeholder='Email' 
        value={email.value} 
        onChange={email.onChange} 
      /> */}

      {/* <input placeholder='Password' type='password' 
        value={password.value} 
        onChange={password.onChange} 
      /> */}
      
      <button>Iniciar sesión</button>
      
    </form>
  )
}

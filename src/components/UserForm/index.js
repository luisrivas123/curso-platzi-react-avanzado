import React from "react";
// Hook
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Title, Error } from "./styles";

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    // Evita que el formulario haga su funcionamiento por defecto "un Post"
    event.preventDefault()
    onSubmit({ 
      email: email.value, 
      password: password.value 
    })
  }

  return (
    <div>
      {/* <Form onSubmit={onSubmit}> */}
      <Form disabled={disabled} onSubmit={handleSubmit}>
      <Title>{title}</Title>
        {/* Recuperar el evento e */}
        <Input disabled={disabled} placeholder='Email' {...email} />

        <Input disabled={disabled} placeholder='Password' type='password' 
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
        
        <Button disabled={disabled}>{title}</Button>
        {error && <Error>{error}</Error>}
      </Form>
    </div>
  )
}

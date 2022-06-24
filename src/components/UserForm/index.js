import React from "react";
// Hook
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Title } from "./styles";

export const UserForm = ({ onSubmit, title }) => {
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
      <Title>{title}</Title>
      {/* <Form onSubmit={onSubmit}> */}
      <Form onSubmit={handleSubmit}>
        {/* Recuperar el evento e */}
        <Input placeholder='Email' {...email} />

        <Input placeholder='Password' type='password' 
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
        
        <Button>{title}</Button>
        
      </Form>
    </div>
  )
}

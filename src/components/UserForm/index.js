import React from "react";
// Hook
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Title } from "./styles";

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  return (
    <div>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
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

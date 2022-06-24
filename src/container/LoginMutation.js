import React from 'react'
import { useMutation, gql } from '@apollo/client'

const LOGIN = gql`
mutation login($input: UserCredentials!) {
  login (input: $input)
}
`

export const LoginMutation = () => {
  // return <Mutation {useMutation=(...LOGIN)}>
  //   {children}
  // </Mutation>
  // const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(REGISTER)
  // return { mutation, mutationLoading, mutationError }
  const [loginMutation, { loading: loginLoading, error: loginError }] = useMutation(LOGIN)

  return { loginMutation, loginLoading, loginError }
}

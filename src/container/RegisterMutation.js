import React from 'react'
import { useMutation, gql } from '@apollo/client'

const REGISTER = gql`
mutation signup($input: UserCredentials!) {
  signup (input: $input)
}
`

export const RegisterMutation = () => {
  // return <Mutation {useMutation=(...REGISTER)}>
  //   {children}
  // </Mutation>
  // const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(REGISTER)
  // return { mutation, mutationLoading, mutationError }
  const [registerMutation] = useMutation(REGISTER)

  return { registerMutation }
}

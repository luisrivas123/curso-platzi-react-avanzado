import { useState } from 'react'

export const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  // Recupera el evento y del evento hace un setValue
  const onChange = e => setValue(e.target.value)

  return { value, onChange}
}

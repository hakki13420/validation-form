import { useState } from 'react'

export const useInput = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    date: '',
    password: '',
    confirmPassword: ''
  })

  const handelChange = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return {
    input, setInput, handelChange
  }
}

export default useInput

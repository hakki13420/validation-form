import React, { useState } from 'react'
import './App.scss'
import useInput from './hooks/useInput'

const FormItem = (props) => {
  const [focus, setFocus] = useState(false)
  const { errorMessage, label, id, ...attribus } = props

  const handelBlur = () => {
    setFocus(true)
  }

  const handelFocus = (e) => {
    if (e.target.name === 'confirmPassword') setFocus(true)
  }

  return (
    <div className='form-item'>
      <label htmlFor='name'>{label}</label>
      <input id='name' {...attribus} onBlur={handelBlur} onFocus={handelFocus} autofocuse={focus.toString()} onChange={props.onChange} />
      <span>{errorMessage}</span>
    </div>
  )
}

function App () {
  const { input, setInput, handelChange } = useInput()

  const dataForm = [
    {
      id: 1,
      label: 'name',
      name: 'name',
      type: 'text',
      required: true,
      errorMessage: 'the name must have 6 caracter in min and no coaintain specials characters',
      placeholder: 'name',
      pattern: '^[a-zA-Z]{6,}$'

    },
    {
      id: 2,
      label: 'email',
      name: 'email',
      type: 'email',
      required: true,
      errorMessage: 'you hve to introduce an valid email',
      placeholder: 'email',
      // eslint-disable-next-line no-useless-escape
      pattern: '^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$'

    },
    {
      id: 3,
      label: 'date',
      name: 'date',
      type: 'date',
      required: true,
      errorMessage: 'the name must no coaintain specials characters',
      placeholder: 'date'

    },
    {
      id: 4,
      label: 'password',
      name: 'password',
      type: 'password',
      required: true,
      errorMessage: 'the name must no coaintain specials characters',
      placeholder: 'the passwod must have in min one uppercase caracter and one number and one special cara cter',
      // eslint-disable-next-line no-useless-escape
      pattern: '(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$'

    },
    {
      id: 5,
      label: 'Confirm password',
      name: 'confirmPassword',
      type: 'password',
      required: true,
      errorMessage: 'password no mismatch',
      placeholder: 'confirm password',
      pattern: input.password

    }
  ]

  return (
    <div className='app'>
      <div className='container'>
        <h4>Login Space</h4>
        <form action='#' autoComplete='off'>
          {
            dataForm.map(item => {
              const { id } = item
              return <FormItem key={id} {...item} setInput={setInput} onChange={handelChange} input={input} />
            })
          }
          <button>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default App

import axios from 'axios'
import { ErrorTypes } from 'constants/ErrorTypes'

export const checkUsername = (username) => {
  return axios.get('https://yesno.wtf/api').then(response => response.data.answer === 'yes')
}

export const testUsername = (username) => {
  if (username === null) return ErrorTypes.None
  if (username === '') return ErrorTypes.EmptyUsername
  if (username.length > 16) return ErrorTypes.LongUsername
  return ErrorTypes.None
}

export const dictionary = {
  email: 'It must be an email',
  min: 'Does not comply with the minimum of characters',
  sameAsPassword: 'The value does not match the password',
  PasswordValidator: 'It must contain a number and a capital letter',
  required: 'Required field',
  loginFailed: 'Incorrect email or password'
}

export const getError = vuelidateProperties => {
  if (vuelidateProperties.$params) {
    const foundError = Object.keys(vuelidateProperties.$params).find(element => !vuelidateProperties[element])
    return dictionary[foundError]
  }
}

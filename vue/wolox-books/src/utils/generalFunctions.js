export const dictionary = {
  email: 'Debe ser un correo electrónico',
  min: 'No cumple con el mínimo de caracteres',
  sameAsPassword: 'El valor no coincide con el password',
  PasswordValidator: 'Debe contener un número y una letra mayúscula',
  required: 'Campo requerido'
}

export const getError = vuelidateProperties => {
  const fieldsErrors = Object.keys(vuelidateProperties.$params)
  if (fieldsErrors.length) {
    for (const fieldError of fieldsErrors) {
      if (!vuelidateProperties[fieldError]) {
        console.log(fieldError)
        return dictionary[fieldError]
      }
    }
  }
}

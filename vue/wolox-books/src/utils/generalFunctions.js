export const dictionary = code => {
  let errorType = ''
  switch (code) {
    case 'email':
      errorType = 'Debe ser un correo electrónico'
      break
    case 'min':
      errorType = 'No cumple con el mínimo de caracteres'
      break
    case 'PasswordValidator':
      errorType = 'Debe contener un número y una letra mayúscula'
      break
    default:
      errorType = 'Campo requerido'
  }
  return errorType
}

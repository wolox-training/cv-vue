export const dictionary = code => {
  let errorType = ''
  switch (code) {
    case 'email':
      errorType = 'Debe ser un correo electrónico'
      break
    case 'min':
      errorType = 'No cumple con el mínimo de caracteres'
      break
    default:
      errorType = 'Campo requerido'
  }
  return errorType
}

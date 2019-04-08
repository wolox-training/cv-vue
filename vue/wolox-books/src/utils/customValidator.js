export const PasswordValidator = value => {
  const regex = new RegExp(/^(?=.*\d)(?=.*[A-Z]).+$/)
  return regex.test(value)
}

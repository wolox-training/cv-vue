export const PasswordValidator = value => RegExp(/^(?=.*\d)(?=.*[A-Z]).+$/).test(value)

export const required = value => 
  value ? undefined : 'Value is required';

export const minLength = value => 
  value.length < 8 
    ? 'Values must be at least 8 characters'
    : undefined

export const isMail = value => {
  const regExpMail = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  return regExpMail.test(value) 
    ? undefined
    : 'Value is not an email'
}

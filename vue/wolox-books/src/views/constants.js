import { i18n } from '../config/i18n'

export const registerFieldsArray = [
  {
    name: 'first_name',
    label: i18n.tc('app.firstName')
  },
  {
    name: 'last_name',
    label: i18n.tc('app.lastName')
  },
  {
    name: 'email',
    label: i18n.tc('app.email')
  },
  {
    name: 'password',
    label: i18n.tc('app.password')
  },
  {
    name: 'password_confirmation',
    label: i18n.tc('app.passConfirmation')
  }
]

export const loginFieldsArray = [
  {
    name: 'email',
    label: i18n.tc('app.email')
  },
  {
    name: 'password',
    label: i18n.tc('app.password')
  }
]

export const detailsBook = [
  {
    name: 'author',
    value: i18n.tc('bookDetail.authorDetail')
  },
  {
    name: 'publisher',
    value: i18n.tc('bookDetail.publisherDetail')
  },
  {
    name: 'year',
    value: i18n.tc('bookDetail.yearDetail')
  }
]

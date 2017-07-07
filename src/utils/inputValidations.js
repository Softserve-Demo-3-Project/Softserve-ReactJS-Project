import validator from 'validator';

export const minLengthName = (name, length) => name.length >= length ? null : 'Name must contain at least 3 letters'
export const noNum = (name) => /[0-9]+/.test(name) ? 'No numbers allowed' : null
export const minAge = (age, min) => age >= 18 ? null : 'You have to be at least 18 yeasr old'
export const isEmail = (email) => validator.isEmail(email) ? null : 'This is not a valid email'
export const minLengthUsr = (username, length) => username.length >= length ? null : 'Username must contain at least 5 charachters'
export const minLength = (password, length) => password.length >= length ? null : 'Password must be at least 6 charachters long'
export const areSame = (password, rePassword) => password === rePassword ? null : 'Passwords do not match.'

export function signUpErrors(err) {
  let errors = { pseudo: '', email: '', password: '' };
  if (err.message.includes('pseudo')) errors.pseudo = 'Pseudo incorrect ou déjà pris';

  if (err.message.includes('email')) errors.email = 'email incorrect ou déjà pris';

  if (err.message.includes('password')) errors.password = 'Le mot de passe doit faire 6 caracteres minimum';

  return errors;
}

export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};

export const signUpFormValidationSchema = {
  name: {
    required: true,
    validator: {
      regExp: /^[a-zа-яё\s-]+$/i,
      error: 'Только кириллица, латиница, пробел или дефис',
    },
  },
  email: {
    required: true,
    validator: {
      regExp: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
      error: 'Недопустимый адрес электронной почты',
    },
  },
  password: {
    required: true,
    validator: {
      regExp: /^.{6,}$/i,
      error: 'Минимум шесть символов',
    },
  },
};

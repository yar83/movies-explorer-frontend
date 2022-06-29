export const signUpFormSchema = {
  name: {
    value: '',
    error: '',
    isClear: true,
  },
  email: {
    value: '',
    error: '',
    isClear: true,
  },
  password: {
    value: '',
    error: '',
    isClear: true,
  },
}

export const signInFormSchema = {
  email: signUpFormSchema.email,
  password: signUpFormSchema.password,
};

export const editProfileFormSchema = {
  name: signUpFormSchema.name,
  email: signUpFormSchema.email,
};

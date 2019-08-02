
export default {
  signup: {
    validUserDetails: {
      first_name: 'Ronald',
      last_name: 'Ronny',
      email: 'example@gmail.com',
      password: 'passwordtest100',
      confirmPassword: 'passwordtest100',
    },

    invalidUserDetails: {
      first_name: '',
      last_name: 'Owen',
      email: 'example@gmail.com',
      password: 'password',
      confirmPassword: 'passtest',
    },
  },
  invalidPasswordFormat: {
    email: 'ronald@gmail.com',
    password: 'kronny',
  },
  invalidEmailFormat: {
    email: 'ronald',
    password: 'ronald',
  },
  noEmail: {
    email: '',
    password: 'ronald',
  },
  noPassword: {
    email: 'ronald@gmail.com',
    password: '',
  },

  normalUser: {
    first_name: 'Ronald',
    last_name: 'Ronny',
    email: 'ronald@gmail.com',
    password: 'password1test88',
    confirmPassword: 'passwordtest88',
  },
};

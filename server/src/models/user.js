
import moment from 'moment';

class Users {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.users = [];
  }
  /**
   *
   * @returns {object} User object
   */

  create(data) {
    console.log(data);
    const newUser = {
      id: this.users.length + 1,
      email: data.email || '',
      first_name: data.first_name || '',
      last_name: data.last_name || '',
      password: data.password || '',
      is_admin: data.is_admin || false,
      createdDate: moment.now(),
    };
    this.users.push(newUser);
    return newUser;
  }

  findOne(email) {
    return this.users.find(user => user.email === email);
  }
}

export default new Users();

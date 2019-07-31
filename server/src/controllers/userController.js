
import UsersModel from '../models/user';

const Users = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Users object
   */
  create(req, res) {
    const User = UsersModel.create(req.body);
    return res.status(201).send(User);
  },
};

export default Users;

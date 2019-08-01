
import UsersModel from '../models/user';

const UserController = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Users object
   */

  create(req, res) {
    const { email } = req.body;
    const emailreg = UsersModel.findOne(email);
    if (emailreg) {
      return res.status(409).json({
        error: 'Email is already registered',
      });
    }
    const User = UsersModel.create(req.body);
    return res.status(201).json({
      status: 'success',
      data: {
        ...User,
      },
    });
  },
};

export default UserController;

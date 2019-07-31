
import UsersModel from '../models/user';

const UserController = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Users object
   */
  // eslint-disable-next-line class-methods-use-this
  create(req, res) {
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

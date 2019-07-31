
import { check } from 'express-validator/check';
import notEmpty from '../helpers/notEmpty';

export default {
  signup: [
    check(['firstname', 'lastname', 'email', 'address', 'password', 'confirmPassword'])
      .trim()
      .exists()
      .withMessage('All fields are required')
      .custom(value => notEmpty(value, 'All fields are required')),
    check(['lastname', 'firstname'])
      .isString()
      .withMessage('Firstname and lastname must be a string')
      .isAlpha()
      .withMessage('Only letters are allowed as names')
      .isLength({ min: 3 })
      .withMessage('Firstname and lastname must be minimum of 3 characters'),
    check('email')
      .isEmail()
      .withMessage('Please input a valid email address'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be minimum of 6 characters')
      .matches(/\d/)
      .withMessage('Password must contain a number'),
    check('confirmPassword', 'Passwords don\'t match')
      .custom((value, { req }) => value === req.body.password),

  ],
};

import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';

const registerUser = async (req, res) => {
  const { name, email, password, location } = req.body;

  if (!name || !email || !password || !location) {
    throw new BadRequestError('please provide all values');
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }
  const user = await User.create({ name, email, password, location });

  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw Error('Please provide all values!');
  }
  // We need to add select method which adds password to the findOne user object. That is because in User model password has select set to false and does not exist in this case as we changed this in user creation phase, because we wanted to hide it at that point. Now we need it for bcrypt to make comparison.
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw Error('Invalid Credentials!');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw Error('Invalid Credentials!');
  }
  const token = user.createJWT();

  // this is how we can "hide" password as we don't need it any more and it is not good practice to send sensitive data.
  user.password = undefined;

  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

const updateUser = async (req, res) => {};

export { registerUser, loginUser, updateUser };

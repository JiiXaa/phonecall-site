import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      // validator.isEmail is a function which will be invoked and will automatically get access to whatever is passed in the email when we setting up a user
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    // Sets default select() behavior for this path.
    // Set to true if this path should always be included in the results, false if it should be excluded by default. This setting can be overridden at the query level.
    // !!! Does not work with Model.create (User.create({}) in this case)
    select: false,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'lastName',
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'my city',
  },
});

// Mongoose Middleware (hook)
UserSchema.pre('save', async function () {
  /// this.modifiedPaths() shows a array of modified entries
  // console.log(this.modifiedPaths());

  /// As User model password is set to "select:false", it will not be send on "await user.save()" in authController.js and will be undefined therefore we need to return out of this hook. Also we do not want to hash the already hashed password and avoid future bugs.
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// you can log this right after user is created User.create({}) (i.e authController.js)
// We create a custom mongoose method to be able to access values for a specific user and use with JWT
UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model('User', UserSchema);

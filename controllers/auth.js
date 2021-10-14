import User from "../models/userModel.js";
import errorResponse from "../utils/errorResponse.js";
import sendEmail from "../utils/sendEmail.js";

export const register = async (req, res, next) => {
  const { username, email, password, userType } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ Message: "User already exists" });
  }

  const user = await User.create({
    username,
    email,
    password,
    userType,
    status: false,
  });
  if (user) {
    sendRegistrationEmail(user, 201, res);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new errorResponse("Please provide a password and email", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new errorResponse("Invalid Credentials", 404));
  }

  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new errorResponse("Invalid Credentials", 404));
    // res.status(404).json({
    //   success: false,
    //   error: 'Invalid Credentials',
    // });
  }

  sendToken(user, 200, res);
};
export const forgotpassword = async (req, res, next) => {
  // const { email } = req.body;
  // const user = await User.findOne({ email });
  // if (!user) {
  //   return next(new errorResponse('Email could not be sent', 404));
  // }
  // const resetToken = user.getResetPasswordToken();
  // await user.save();
};
export const resetpassword = (req, res, next) => {
  res.send("Reset Password Route");
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();

  res.status(statusCode).json({
    success: true,
    token,
  });
};

const sendRegistrationEmail = (user, statusCode, res) => {
  const token = user.getRegistrationSignedToken();

  const message = `
<h1>Verify Your Registration</h1>
<h3>Token </h3>: <p>${token}</p></h3>
  `;

  try {
    sendEmail({
      to: user.email,
      subject: "Account Verification",
      text: message,
    });
    res.status(statusCode).json({
      success: true,
      data: "Email Sent",
    });
  } catch (err) {
    next(new errorResponse("Email could not be send", 500));
  }
};

export const authenticateToken = async (req, res) => {
  const user = req.user;

  if (Boolean(user)) {
    return res.status(200).json({ user });
  }

  return res.status(400).json({ Message: "Not Authorized" });
};

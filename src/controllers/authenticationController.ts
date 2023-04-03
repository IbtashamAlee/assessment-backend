import { UserModel as User } from "../models/userModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

const signupController = async (req: Request, res: Response) => {
  try {
    if (!req.body.email && !req.body.password) {
      throw new Error("Email and password is required!");
    }
    var newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });

    let profile = await User.findOne({ email: newUser.email });

    if (profile) {
      throw new Error("User Already Exists!");
    } else {
      bcrypt.hash(newUser.password, Math.random(), async (err, hash) => {
        if (err) {
          console.log("Error is", err.message);
          throw new Error(err.message);
        } else {
          newUser.password = hash;
          await newUser
            .save()
            .then(() => {
              res.status(200).send({
                success: true,
                msg: "User Created!",
                data: null,
              });
            })
            .catch(err => {
              console.log("Error is ", err.message);
              throw new Error(err.message);
            });
        }
      });
    }
  } catch (err: any) {
    return res.status(403).send({
      success: false,
      msg: err.message,
      data: null,
    });
  }
};

export { signupController };

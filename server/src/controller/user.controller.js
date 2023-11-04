import userModel from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";

const signUp = async (req, res) => {
  try {
    const { username, password, displayName } = req.body;

    const checkUser = await userModel.findOne({ username });

    if (checkUser)
      return responseHandler.badrequest(res, "username already used");

    const user = new userModel();

    user.displayName = displayName;
    user.username = username;
    user.setPassword(password);

    await user.save();

    const token = jsonwebtoken.sign(
      { data: user.id },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    responseHandler.created(res, {
      token,
      ...user._doc,
      id: user.id,
    });
  } catch {
    responseHandler.error(res);
  }
};
const signin = async (req, res) => {
    try{
        const {username, password} = req.body;

        const user = await userModel.findOne({ username }).select("username password salt id display");

        if(!user) return responseHandler.badrequest(req, "User not exist")
        
        if (!user.validPassword(password)) return responseHandler.badrequest(res,
            "Wrong passowrd")
    }catch{
       responseHandler.error(res)
    }
}

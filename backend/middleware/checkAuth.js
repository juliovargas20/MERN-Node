import jwt  from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

const CheckAuth = async (req, res, next) => {
    let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
        token = req.headers.authorization.split(" ")[1];
        
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.usuario = await Usuario.findById(decode.id).select("-password -createdAt -updatedAt -__v");

        return next();

    } catch (error) {
        return res.status(404).json({ error: "Hubo un error" });
    }
  }

  if (!token) {
    const error = new Error("token no valido");
    res.status(401).json({ msg: error.message });
  }

};

export default CheckAuth;

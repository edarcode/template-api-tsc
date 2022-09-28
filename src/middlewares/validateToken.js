import jwt from "jsonwebtoken";
import { NO_TOKEN, UNAUTHORIZED } from "../constants/msgs.js";
import { SECRET } from "../env/server.js";

export const validateToken = async (req, res, next) => {
	try {
		const { token } = req.headers;
		if (!token) return res.status(400).json({ msg: NO_TOKEN });
		jwt.verify(token, SECRET); /* lanza err si no es valido */

		next();
	} catch (error) {
		res.status(401).json({ msg: UNAUTHORIZED });
	}
};

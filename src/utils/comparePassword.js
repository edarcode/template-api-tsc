import bcrypt from "bcrypt";

export const comparePassword = async (password, passwordDb) => {
	const isRight = await bcrypt.compare(password, passwordDb);

	return isRight;
};

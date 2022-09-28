import { DataTypes } from "sequelize";

export const defineUser = sequelize => {
	sequelize.define(
		"User",
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validator: {
					isEmail: true
				},
				unique: true
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{ timestamps: false }
	);
};

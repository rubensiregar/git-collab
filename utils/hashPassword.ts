import { hash, genSalt } from "bcrypt";

// menggunakan lib bcrypt dibanding crypto karena salt dari genSalt akan berbeda2 untuk setiap passwd
export const hashPassword = async (password: string) => {
    const salt = await genSalt(10);
    return await hash(password, salt);
};

import { prisma } from "../config/prisma";

interface IRole {
    name: string;
}

const createNewRole = async (data: IRole): Promise<any> => {
    try {
        return await prisma.role.create({ data: data });
    } catch (error) {
        throw {
            rc: 400,
            message: "gagal membuat role",
        };
    }
};

export { createNewRole };

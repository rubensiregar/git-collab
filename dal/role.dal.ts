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

const getListRole = async (): Promise<any> => {
    try {
        return await prisma.role.findMany();
    } catch (error) {
        throw {
            rc: 400,
            message: "gagal get role",
        };
    }
};

const getDetailRole = async (data: any): Promise<any> => {
    try {
        return await prisma.role.findUnique({
            where: { id: parseInt(data.id) },
        });
    } catch (error) {
        throw {
            rc: 400,
            message: "gagal get role",
        };
    }
};
const updateRole = async (id: any, data: any): Promise<any> => {
    try {
        return await prisma.role.update({
            data: data,
            where: { id: parseInt(id) },
        });
    } catch (error) {
        throw {
            rc: 400,
            message: "role tidak ditemukan",
        };
    }
};

export { createNewRole, getListRole, getDetailRole, updateRole };

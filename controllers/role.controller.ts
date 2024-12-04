import { Request, Response } from "express";
import { prisma } from "../config/prisma";

// lanjut controller di bawah
export const postRole = async (req: Request, res: Response): Promise<any> => {
    try {
        const newRole = await prisma.role.create({ data: req.body });
        return res.status(200).send({
            message: "BERHASIL",
            success: true,
            result: { newRole },
        });
    } catch (error: any) {
        return res.status(error.rc ?? 500).send({
            message: "GAGAL",
            success: false,
        });
    }
};

export const getRole = async (req: Request, res: Response): Promise<any> => {
    try {
        const roles = await prisma.role.findMany();
        return res.status(200).send({
            message: "BERHASIL",
            success: true,
            result: { roles },
        });
    } catch (error: any) {
        return res.status(error.rc ?? 500).send({
            message: "GAGAL",
            success: false,
        });
    }
};

export const patchRole = async (req: Request, res: Response): Promise<any> => {
    try {
        const updatedRole = await prisma.role.update({
            data: req.body,
            where: { id: parseInt(req.params.id) },
        });

        return res.status(200).send({
            message: "BERHASIL",
            success: true,
            result: { updatedRole },
        });
    } catch (error: any) {
        return res.status(error.rc ?? 500).send({
            message: "GAGAL",
            success: false,
        });
    }
};

export const deleteRole = async (req: Request, res: Response): Promise<any> => {
    try {
        const newRole = await prisma.role.delete({
            where: { id: parseInt(req.params.id) },
        });
        return res.status(200).send({
            message: "BERHASIL",
            success: true,
            result: { newRole },
        });
    } catch (error: any) {
        return res.status(error.rc ?? 500).send({
            message: "GAGAL",
            success: false,
        });
    }
};

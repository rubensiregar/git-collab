import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import {
    serviceCreateRole,
    serviceGetRole,
    serviceUpdateRole,
} from "../services/role.services";

// lanjut controller di bawah
export const postRole = async (req: Request, res: Response): Promise<any> => {
    try {
        const newRole = await serviceCreateRole(req.body);
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
        const roles = await serviceGetRole(req.params);
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
        const updatedRole = await serviceUpdateRole(req.params.id, req.body);

        return res.status(200).send({
            message: "BERHASIL update role",
            success: true,
            result: { updatedRole },
        });
    } catch (error: any) {
        return res.status(error.rc ?? 500).send({
            message: "GAGAL update role",
            success: false,
            error: error.message,
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

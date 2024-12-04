import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import { serviceCreateArticle } from "../services/article.service";

// lanjut controller di bawah
export const postArticle = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        console.log(req.body);

        const newArticle = await serviceCreateArticle(req.body);
        return res.status(200).send({
            message: "BERHASIL membuat artikel",
            success: true,
            result: { newArticle },
        });
    } catch (error: any) {
        return res.status(error.rc ?? 500).send({
            message: "GAGAL membuat artikel",
            success: false,
        });
    }
};

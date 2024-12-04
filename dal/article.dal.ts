import { prisma } from "../config/prisma";

interface IArticle {
    title: string;
    body: string;
    image: string;
    authorId: number;
}

const createNewArticle = async (data: IArticle): Promise<any> => {
    try {
        return await prisma.article.create({ data: data });
    } catch (error) {
        throw {
            rc: 400,
            message: "gagal membuat artikel. data input salah",
        };
    }
};

export { IArticle, createNewArticle };

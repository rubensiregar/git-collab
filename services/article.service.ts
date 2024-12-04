import { IArticle, createNewArticle } from "../dal/article.dal";

const serviceCreateArticle = async (data: IArticle): Promise<any> => {
    try {
        return await createNewArticle(data);
    } catch (error) {
        throw error;
    }
};

export { serviceCreateArticle };

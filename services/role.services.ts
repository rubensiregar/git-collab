import { createNewRole, getDetailRole, getListRole } from "../dal/role.dal";

interface IRole {
    name: string;
}

const serviceCreateRole = async (data: IRole): Promise<any> => {
    try {
        const newUser = await createNewRole(data);
        return newUser;
    } catch (error) {
        throw error;
    }
};

const serviceGetRole = async (data: any): Promise<any> => {
    try {
        if (data.id) {
            return await getDetailRole(data);
        } else {
            return await getListRole();
        }
    } catch (error) {
        throw error;
    }
};

const serviceUpdateRole = async (data: IRole): Promise<any> => {
    try {
        const newUser = await createNewRole;
        return newUser;
    } catch (error) {
        throw error;
    }
};

const serviceDeleteRole = async (data: IRole): Promise<any> => {
    try {
        const newUser = await createNewRole;
        return newUser;
    } catch (error) {
        throw error;
    }
};

export {
    serviceCreateRole,
    serviceGetRole,
    serviceUpdateRole,
    serviceDeleteRole,
};

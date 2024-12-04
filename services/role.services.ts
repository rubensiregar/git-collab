import {
    createNewRole,
    deleteRole,
    getDetailRole,
    getListRole,
    updateRole,
} from "../dal/role.dal";

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

const serviceUpdateRole = async (id: any, data: IRole): Promise<any> => {
    try {
        if (!data.name) {
            throw { rc: 400, message: "data tidak boleh kosong" };
        }
        const updatedRole = await updateRole(id, data);
        return updatedRole;
    } catch (error) {
        throw error;
    }
};

const serviceDeleteRole = async (id: any): Promise<any> => {
    try {
        const deletedRole = await deleteRole(id);
        return deletedRole;
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

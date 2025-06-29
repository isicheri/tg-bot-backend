import prismaClient from "../../config/db/client";
import { getPrismaClient } from "../../config/db/client/runtime/library";

export class UserService {
    createUser() {}

    async findUserByUsername(username: string) {
        return await prismaClient.user.findFirst({where: {username}})
    }

}
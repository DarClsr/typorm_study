import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Student } from "./entity/Student"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "study",
    synchronize: true,
    logging: false,
    entities: [User,Student],
    migrations: [],
    subscribers: [],
})

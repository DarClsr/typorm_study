import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    console.log("Inserting a new user into the database...")
 // 增加
    // const users=[
    //     {
    //         name:"tom",
    //         sex:2,
    //         age:28,
    //         score:500,
    //         class:"一班"
    //     },
    //     {
    //         name:"lois",
    //         sex:1,
    //         age:22,
    //         score:488,
    //         class:"二班"

    //     }
    // ]
   
    // await AppDataSource.manager.save(User,[
    //     ...users
    // ])


    // 查询
    console.log("Loading users from the database...")

    // 批量修改
    // await AppDataSource.manager.save(User,[
    //     {
    //         id:1,
    //         name:"test",
    //         class:"hahah",
    //         score:100,
    //         sex:0
    //     }
    // ])



    // 删除
    // await AppDataSource.manager.delete(User, 1);
    // await AppDataSource.manager.delete(User, [2,3]);


    // 查询

    // const users=await  AppDataSource.manager.findBy(User,{
    //     sex:1
    // })

    // console.log(users.length)



 
    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

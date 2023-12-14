import { DataSource } from "typeorm";
import { AppDataSource } from "./data-source"
import { IdCard } from "./entity/IdCard";
import { User } from "./entity/User"
import { Department } from "./entity/department";
import { Employee } from "./entity/employee";

AppDataSource.initialize().then(async () => {

    console.log("start task")

   
    // 一对多关联  
    // const e1=new Employee();
    // e1.name="小欧";
    // const e2=new Employee();
    // e2.name="小兰";
    // const e3=new Employee();
    // e3.name="小法";
    // const d1=new Department();
    // d1.name="大润发超市";
    // d1.emplyoees=[e1,e2,e3]


    // await AppDataSource.manager.save(Department,d1);
    // await AppDataSource.manager.save(Employee,[
    //     e1,e2,e3
    // ]);



    // 一对多关联 查询

    const departments=await AppDataSource.manager.find(Department,{
        relations:{
            emplyoees:true
        }
    })

    // console.log(departments[0])


 
    console.log("done task")

}).catch(error => console.log(error))

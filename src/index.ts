import { DataSource } from "typeorm";
import { AppDataSource } from "./data-source"
import { IdCard } from "./entity/IdCard";
import { User } from "./entity/User"
import { Department } from "./entity/department";
import { Employee } from "./entity/employee";
import { Article } from "./entity/Article";
import { Tag } from "./entity/Tag";

AppDataSource.initialize().then(async () => {

    console.log("start task")

    //多对对插入

    // const a=new Article();

    // a.title="文章标题";
    // a.content="文章内容";

    // const a2=new Article();

    // a2.title="文章标题2";
    // a2.content="文章内容2";


    // const t1=new Tag();

    // t1.name="tag01"

    // const t2=new Tag();

    // t2.name="tag2"

    // const t3=new Tag();

    // t3.name="tag03"
    // a.tags=[t1,t3];
    // a2.tags=[t1,t2,t3];
    // await AppDataSource.manager.save(Tag,[t1,t2,t3])

    // await AppDataSource.manager.save(Article,[a,a2])

    // 多对多查询

    const as=await AppDataSource.manager.find(Article,{
        relations:{
            tags:true
        }
    })

    console.log(as)

    const ts=await AppDataSource.manager.find(Tag,{
        relations:{
            articles:true
        }
    })
    console.log(ts)


    // 至于删除就简单了，因为中间表的外键设置了 CASCADE 的级联删除，这样只要你删除了 article 或者 tag，它都会跟着删除关联记录。



   

    
    console.log("done task")

}).catch(error => console.log(error))

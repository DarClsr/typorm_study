import { DataSource } from "typeorm";
import { AppDataSource } from "./data-source"
import { IdCard } from "./entity/IdCard";
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("start task")

    // 关联存储

    // const user=new User();
    // user.name="test02";
    // user.score=200;
    // user.age=12;
    // user.sex=1;
    // user.class="一班";


    // const card=new IdCard();
    // card.cardName="142567895145414634";
    // card.user=user;

    // await AppDataSource.manager.save(user);
    // await AppDataSource.manager.save(card);


    // 关联查询 card relations user
 

    // const cards=await AppDataSource.manager.find(IdCard,{
    //     relations:{
    //         user:true
    //     }
    // })
    // console.log(cards)

    // 关联查询 user relations id_card

    const users=await AppDataSource.manager.find(User,{
        relations:{
            idCard:true
        }
    })

    console.log(users)


 
    console.log("done task")

}).catch(error => console.log(error))

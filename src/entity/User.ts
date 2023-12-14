import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { IdCard } from "./IdCard"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        comment:"名称"
    })
    name: string

  

    @Column()
    sex: number

    @Column()
    age: number

    @Column()
    class: string


    @Column()
    score: number

     // 关联id_card
    @OneToOne(()=>IdCard,(IdCard)=>IdCard.user)
    idCard:IdCard
}

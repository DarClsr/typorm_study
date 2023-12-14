import { Entity, PrimaryGeneratedColumn,Column, JoinColumn, OneToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class IdCard {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 50,
        comment: '身份证号'
    })
    cardName: string

    @JoinColumn()
    @OneToOne(()=>User,{
        cascade:true,
        // 自动关联
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
    })
    user:User
}

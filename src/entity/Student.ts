import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name:"students"
})
export class Student {
    @PrimaryGeneratedColumn({
        comment:"这是id",
        
    })
    id:number


    @Column({
        type:"text",
        comment:"这是姓名"
    })
    name:string


    @Column({
        type:"int",
        comment:"这是性别"
    })
    sex:number

    @Column({
        type:"datetime",
        comment:"这是时间",
        unique:true,
        nullable:false,
    })
    create_time:string

    
    @Column({
        type:"varchar",
        width:10,
        length:100,
        comment:"这是介绍",
        unique:true,
        nullable:false,
        default:"请介绍一下自己"
    })
    desc:string

    @Column({
        type:"double"
    })
    score:number
}
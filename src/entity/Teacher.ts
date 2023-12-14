import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


// 表格名称
@Entity({
    name:"teachers"
})
export class Teacher {


    // 主键 自动增长
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type:"text"
    })
    name: string

  

    @Column("int")
    sex: number

    @Column("int")
    age: number

    @Column("text")
    class: string

    @Column("double")
    score: number
}

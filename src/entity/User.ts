import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

  

    @Column()
    sex: number

    @Column()
    age: number

    @Column()
    class: string


    @Column()
    score: number

}

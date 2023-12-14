import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Department } from "./department"

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        length:50
    })
    name:string


    @JoinColumn({
        name:"d_id"
    })
    @ManyToOne(()=>Department,{
        onDelete:"CASCADE",
    })
    department:Department

}

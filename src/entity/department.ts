import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Employee } from "./employee"

@Entity()
export class Department {
    
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        length:50
    })
    name:string

    
    // 一对多关联  
    @OneToMany(()=>Employee,(employee)=>employee.department,{
        cascade:true,
       
    })
    emplyoees:Employee[]

}

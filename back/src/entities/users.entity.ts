import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';


@Entity('users')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ length: 65 })
    name: string;
  
    @Column({ length: 75, unique: true })
    email: string;

    @Column({})
    password: string;

    @Column({})
    about: string;

    @Column({})
    facebook: string;

    @Column({})
    twitter: string;

    @Column({})
    linkedin: string;

    @Column({})
    instagram: string;

    @Column({})
    profilePhoto: string;
    


}


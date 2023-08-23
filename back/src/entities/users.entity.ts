import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Image } from "./Image.entity";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ length: 65 })
    name: string;
  
    @Column({ length: 75, unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    about: string;

    @Column()
    facebook: string;

    @Column()
    twitter: string;

    @Column()
    linkedin: string;

    @Column()
    instagram: string;

    @OneToOne(() => Image, image => image.user)
    image: Image
    
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
      const isEncrypted = getRounds(this.password);
      if (!isEncrypted) {
        this.password = hashSync(this.password, 10);
      }
    }
    


}


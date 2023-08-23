// src/entities/Image.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./users.entity"; 

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imageName: string;

  @OneToOne(() => User, (user) => user.image)
  user: User
}

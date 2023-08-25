import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Image } from "./images.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 65 })
  name: string;

  @Column({ length: 75, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: "text", nullable: true })
  about: string | null;

  @Column({ type: "text", nullable: true })
  facebook: string | null;

  @Column({ type: "text", nullable: true })
  twitter: string | null;

  @Column({ type: "text", nullable: true })
  linkedin: string | null;

  @Column({ type: "text", nullable: true })
  instagram: string | null;

  @OneToOne(() => Image, (image) => image.user, { cascade: true })
  @JoinColumn()
  image: Image;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
@(0, typeorm_1.Entity)()
class User {
    @(0, typeorm_1.PrimaryGeneratedColumn)()
    id;
    @(0, typeorm_1.Column)({ type: "varchar" }) // Defina o tipo correto da coluna
    firstName = ""; // Inicialização padrão ou inicialize no construtor
    @(0, typeorm_1.Column)({ type: "varchar" }) // Defina o tipo correto da coluna
    lastName = ""; // Inicialização padrão ou inicialize no construtor
    @(0, typeorm_1.Column)({ type: "boolean", default: true }) // Defina o tipo correto da coluna e valor padrão
    isActive = true; // Inicialização padrão ou inicialize no construtor
}
exports.User = User;
// @Entity('users')
// class User{
//     @PrimaryGeneratedColumn("increment")
//     id: number;
//     @Column({ length: 65 })
//     name: string;
//     @Column({ length: 75, unique: true })
//     email: string;
//     @Column({ length: 12, unique: true })
//     phone: string;
//     @CreateDateColumn({ type: "date" })
//     createdAt: string;
//     @Column()
//     password: string;
//     @BeforeInsert()
//     @BeforeUpdate()
//     hashPassword() {
//       const isEncrypted = getRounds(this.password);
//       if (!isEncrypted) {
//         this.password = hashSync(this.password, 10);
//       }
//     }
// }

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
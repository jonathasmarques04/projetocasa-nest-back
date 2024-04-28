import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produto')
export class Produto {
  @PrimaryGeneratedColumn()
  idProduto: number;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  quartos: string;

  @Column()
  suites: string;

  @Column()
  banheiros: string;

  @Column()
  areaUtil: string;

  @Column()
  areaTotal: string;

  @Column()
  localizacao: string;

  @Column()
  valor: number;

  @Column()
  imagem: string;

  @Column()
  imagem1: string;

  @Column()
  imagem2: string;

  @Column()
  imagem3: string;

  @Column()
  imagem4: string;

  @Column()
  imagem5: string;

  @Column()
  imagem6: string;

  @Column()
  imagem7: string;

  @Column()
  imagem8: string;

  @Column()
  imagem9: string;

  @Column()
  imagem10: string;

  @Column()
  imagem11: string;

  @Column()
  imagem12: string;
}

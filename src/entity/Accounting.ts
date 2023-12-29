import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Accounting {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  someField!: string;
}

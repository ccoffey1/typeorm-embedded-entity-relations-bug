import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Departments } from "./Departments";
import { Entity } from "typeorm";

@Entity()
export class Parent {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(() => Departments)
  departments!: Departments;
}

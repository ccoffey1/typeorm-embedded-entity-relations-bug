import { JoinColumn, OneToOne } from "typeorm";
import { Accounting } from "./Accounting";

export class Departments {
  @OneToOne(() => Accounting, { eager: true, cascade: true })
  @JoinColumn()
  accounting!: Accounting;
}

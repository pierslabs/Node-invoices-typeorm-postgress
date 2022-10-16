import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type:'numeric'})
  amount: number;

  @Column({type: 'timestamp with time zone'})
  createdAt: Date;

  @Column()
  description: string;
}

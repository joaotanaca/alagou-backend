import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('floodings')
export default class Floodings {
  @ObjectIdColumn()
  _id!: string;

  @Column()
  name!: string;

  @Column()
  latitude!: number;

  @Column()
  longitude!: number;

  @Column()
  note!: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIME' })
  createAt!: Date;

  @Column()
  user!: string;
}

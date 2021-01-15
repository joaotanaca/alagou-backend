import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity('user')
export default class User {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column({ select: false })
  password!: string;

  @Column()
  floodings!: string[];
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import Floodings from './Floodings';

@Entity('user')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @OneToMany(() => Floodings, (floodings) => floodings.user)
  @JoinColumn({ name: 'flooding_id' })
  floodings: Floodings[];
}

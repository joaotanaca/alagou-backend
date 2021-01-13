import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  // OneToMany,
  // JoinColumn,
} from 'typeorm';
import Floodings from './Floodings';

// import Image from './Image';

@Entity('user')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Floodings, (floodings) => floodings.user)
  @JoinColumn({ name: 'flooding_id' })
  floodings: Floodings;
}

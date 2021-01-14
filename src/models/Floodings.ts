import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  // OneToMany,
  // JoinColumn,
} from 'typeorm';
import User from './User';

@Entity('floodings')
export default class Floodings {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  note: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIME' })
  createAt!: Date;

  @ManyToOne(() => User, (user) => user.floodings, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'flooding_id' })
  user: User;
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  // OneToMany,
  // JoinColumn,
} from 'typeorm';

// import Image from './Image';

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

  // @OneToMany(() => Image, (image) => image.floodings, {
  //   cascade: ['insert', 'update'],
  // })
  // @JoinColumn({ name: 'flooding_id' })
  // images: Image[];
}

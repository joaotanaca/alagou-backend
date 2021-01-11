// import {
//   Entity,
//   Column,
//   PrimaryGeneratedColumn,
//   ManyToOne,
//   JoinColumn,
// } from 'typeorm';

// import Floodings from './Floodings';

// @Entity('images')
// export default class Image {
//   @PrimaryGeneratedColumn('increment')
//   id: number;

//   @Column()
//   path: string;

//   @ManyToOne(() => Floodings, (floodings) => floodings.images)
//   @JoinColumn({ name: 'flooding_id' })
//   floodings: Floodings;
// }

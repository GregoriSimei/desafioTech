import { DataSource } from 'typeorm';
import { typeormConfig } from './typeorm.config';

export const typeormProviders = [
  {
    provide: 'TYPEORM_BD_CONECTION',
    useFactory: async () => {
      const dataSource = new DataSource(typeormConfig);
      return dataSource.initialize();
    },
  },
];

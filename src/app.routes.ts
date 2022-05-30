import { RouterModule } from '@nestjs/core';
import { LaboratoryModule } from './modules/laboratory/laboratory.module';
import { UserModule } from './modules/user/user.module';

export const Routes = RouterModule.register([
  {
    path: 'desafiotech',
    children: [
      {
        path: 'user',
        module: UserModule,
      },
      {
        path: 'laboratory',
        module: LaboratoryModule,
      },
    ],
  },
]);

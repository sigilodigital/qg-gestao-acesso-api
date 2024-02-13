import { NestFactory } from '@nestjs/core';
import { DataSource } from 'typeorm';

import { UtilRepository } from '@libs/common/repository/util.repository';
import { dbPgPilotoConfig_fixture } from '@libs/common/atabases/db-pg-piloto.config';
import { AppModule } from './app.module';
import { ContatoEntity } from './features/usuario/models/entities/contato.entity';
import { DataAccessEntity } from './features/usuario/models/entities/data-access.entity';
import { EmailEntity } from './features/usuario/models/entities/email.entity';
import { EnderecoEntity } from './features/usuario/models/entities/endereco.entity';
import { LoginInfoEntity } from './features/usuario/models/entities/login-info.entity';
import { ProfileEntity } from './features/usuario/models/entities/profile.entity';
import { TelefoneEntity } from './features/usuario/models/entities/telefone.entity';
import { UsuarioEntity } from './features/usuario/models/entities/usuario.entity';
import { SistemaEntity } from './core/auth/models/entities/sistema.entity';
import { MetodoEntity } from './core/auth/models/entities/metodo.entity';
import { SistemaMetodoEntity } from './core/auth/models/entities/sistema-metodo.entity';
import { userList } from './fixtures/users';
import { systemList } from './fixtures/systems';
import { methodList } from './fixtures/methods';

async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    await app.init();

    // const dataSouce = app.get<DataSource>(getDataSourceToken())
    // await dataSouce.synchronize(true)

    const entities = [
        UsuarioEntity, ContatoEntity, EmailEntity, TelefoneEntity,
        EnderecoEntity, LoginInfoEntity, DataAccessEntity, ProfileEntity,
        SistemaEntity, MetodoEntity, /*SistemaMetodoEntity*/
    ];

    const dataSource = await new DataSource(dbPgPilotoConfig_fixture(entities)).initialize();
    const utilRepo = await (new UtilRepository()).init(dataSource.createQueryRunner());

    await utilRepo.manager.connection.dropDatabase();
    await utilRepo.manager.connection.synchronize(true);

    await utilRepo.manager.save(UsuarioEntity, userList);
    await utilRepo.manager.save(SistemaEntity, systemList);
    // await utilRepo.manager.save(MetodoEntity, methodList);

    console.log(await utilRepo.manager.find(UsuarioEntity));
    console.log(await utilRepo.manager.find(ContatoEntity));
    console.log(await utilRepo.manager.find(EmailEntity));
    console.log(await utilRepo.manager.find(TelefoneEntity));
    console.log(await utilRepo.manager.find(EnderecoEntity));

    app.close();
    // await app.listen(configs().server.port, "0.0.0.0");
}

bootstrap();

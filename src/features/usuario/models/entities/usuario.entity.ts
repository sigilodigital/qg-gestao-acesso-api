import { EntityClassOrSchema } from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";

import { EntityAbstractClass } from "@sd-root/libs/common/src/models/classes/entity-abstract.class";
import { ContatoEntity } from "@sd-root/libs/common/src/models/entities/contato/contato.entity";
import { DataAccessEntity } from "./data-access.entity";
import { LoginInfoEntity } from "./login-info.entity";

@Index("PK_TBL_USUARIO", ["id"], { unique: true })
@Entity({ name: 'TBL_USUARIO' })
export class UsuarioEntity extends EntityAbstractClass  {

    @Column("bigint", { name: "cpf", unique: true })
    cpf: number;

    @Column("varchar", { name: "fullname" })
    fullname: string;

    @Column("varchar", { name: "socialname", nullable: true })
    socialname?: string | null;

    @Column("varchar", { name: "gender", nullable: true })
    gender?: string | null;

    @Column("varchar", { name: "maritalStatus", nullable: true })
    maritalStatus?: string | null;

    @Column("varchar", { name: "birthDate", nullable: true })
    birthDate?: Date | null;

    @OneToOne(type => ContatoEntity, e => e._usuario, { cascade: ['insert', 'update', 'remove'] })
    @JoinColumn()
    _contato?: ContatoEntity;

    @OneToOne(type => LoginInfoEntity, e => e._usuario, { cascade: ['insert', 'update', 'remove'] })
    @JoinColumn()
    _loginInfo?: LoginInfoEntity;

    @OneToOne(type => DataAccessEntity, e => e._usuario, { cascade: ['insert', 'update', 'remove'] })
    @JoinColumn()
    _dataAccess?: DataAccessEntity;

    public static getEntityList(): EntityClassOrSchema[] {
        return [UsuarioEntity, LoginInfoEntity, ...DataAccessEntity.getEntityList(), ...ContatoEntity.getEntityList()];
    }
}

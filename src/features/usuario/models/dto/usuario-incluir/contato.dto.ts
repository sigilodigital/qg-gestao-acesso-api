import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Validate, ValidateNested } from 'class-validator';

import { IConstraintSchema } from "@sd-root/libs/common/src/models/interfaces/ConstraintsSchema";
import { ValidaSchema } from "@libs/common/validations/valida-schema";
import { ContatoEntity } from "../../entities/contato.entity";
import { EmailInputDto } from "./email.dto";
import { EnderecoInputDto } from "./endereco.dto";
import { TelefoneInputDto } from "./telefone.dto";

export class ContatoInputDto implements ContatoEntity {

    @ApiProperty({ name: 'id', type: String, nullable: false })
    @Validate(ValidaSchema, [<IConstraintSchema>{}])
    id?: string;

    @ApiProperty({ name: '_emailList', type: EmailInputDto, isArray: true, nullable: false })
    @ValidateNested({ each: true })
    _emailList: EmailInputDto[];

    @ApiProperty({ name: '_emailList', type: TelefoneInputDto, isArray: true, nullable: false })
    @ValidateNested({ each: true })
    _telefoneList: TelefoneInputDto[];

    @ApiProperty({ name: '_emailList', type: EnderecoInputDto, isArray: true, nullable: false })
    @ValidateNested({ each: true })
    _enderecoList: EnderecoInputDto[];
}

export class ContatoOutputDto extends PartialType(ContatoInputDto) {

}

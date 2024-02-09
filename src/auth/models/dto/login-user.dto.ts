import { ApiProperty } from "@nestjs/swagger";
import { Validate } from "class-validator";

import { IConstraintSchema } from "@libs/common/interfaces/ConstraintsSchema";
import { ValidaSchema } from "@sd-root/libs/common/src/validations/valida-schema";
import { ValidaCnpjCpf } from "@sd-root/src/shared/validation/classes/validaCnpjCpf";

export class LoginUserInputDto {

    @ApiProperty({ name: 'username', type: String })
    // @Validate(ValidaCnpjCpf)
    // @Validate(ValidaSchema, [<IConstraintSchema>{ type: 'string', orLength: [11, 14] }])
    username: string;

    @ApiProperty({ name: 'password', type: String })
    // @Validate(ValidaSchema, [<IConstraintSchema>{ type: 'string', orLength: [11, 14] }])
    password: string;

}
export class LoginUserOutputDto {

    id: string;
    fullname: string;
    socialname: string;
    cpf: number;
    __params: {
        isPasswordRequireChange: boolean;
    }
    token?: {
        bearer: string;
        replace: string;
    }

}
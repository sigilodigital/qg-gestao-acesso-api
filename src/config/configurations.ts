import { env } from './envSchema'

export default () => ({
    database: {
        type: env.DB_TYPE,
        host: env.DB_HOST,
        port: env.DB_PORT,
        database: env.DB_NAME,
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        synchronize: false
    },
    server: {
        port: process.env.SRV_PORT
    },
    // globalVars: {
    //     enableDebugMode: JSON.parse(process.env.DEBUG_MODE)
    // },
    // mensagens: [
    //     { ordem: 1, message: "Falha. Campo @campo não informado.", code: 1, priority: 1 },
    //     { ordem: 2, message: "Falha. Tamanho do campo @campo é inválido.", code: 2, priority: 1 },
    //     { ordem: 3, message: "Falha. Tipo do campo @campo é inválido.", code: 3, priority: 1 },
    //     { ordem: 4, message: "Falha. Valor do campo @campo é inválido.", code: 4, priority: 1 },
    //     { ordem: 5, message: "Falha. Acesso negado.5", code: 5, priority: 1 },
    //     { ordem: 6, message: "Falha. Sistema não autenticado", code: 6, priority: 1 },
    //     { ordem: 7, message: "Falha. Acesso negado.7", code: 7, priority: 1 },
    //     { ordem: 8, message: "Falha. Acesso negado.8", code: 8, priority: 1 },
    //     { ordem: 9, message: "Usuário não existe.", code: 9, priority: 1 },
    //     { ordem: 10, message: "Usuário existe.", code: 10, priority: 1 },
    //     { ordem: 11, message: "Não existe registro para o cod_cpf_cnpj e cod_interessado informados.", code: 11, priority: 1 },
    //     { ordem: 12, message: "Não existe registro para o cod_cpf_cnpj informado.", code: 12, priority: 1 },
    //     { ordem: 13, message: "Não existe registro para o cod_interessado informado.", code: 13, priority: 1 },
    //     { ordem: 14, message: "Falha. Acesso público negado.", code: 14, priority: 1 },
    //     { ordem: 15, message: "Registro encontrado.", code: 15, priority: 1 },
    //     { ordem: 16, message: "Registro não encontrado.", code: 16, priority: 1 },
    //     { ordem: 17, message: "Registro incluído.", code: 17, priority: 1 },
    //     { ordem: 18, message: "Falha. Campo @campo não é compatível com o tipo da pessoa do cod_cpf_cnpj informado.", code: 18, priority: 1 },
    //     { ordem: 19, message: "Falha. Usuário externo já cadastrado.", code: 19, priority: 1 },
    //     { ordem: 20, message: "Falha. CEP não cadastrado na base.", code: 20, priority: 1 },
    //     { ordem: 21, message: "Falha. UF <UF informada> não cadastrada na base.", code: 21, priority: 1 },
    //     { ordem: 22, message: "Falha. UF <UF informada> inativa.", code: 22, priority: 1 },
    //     { ordem: 23, message: "Falha. Estado civil <estado civil informado> não cadastrado na base.", code: 23, priority: 1 },
    //     { ordem: 24, message: "Falha. Estado civil <estado civil informado> inativo.", code: 24, priority: 1 },
    //     { ordem: 25, message: "Falha. País <país informado> não cadastrado na base.", code: 25, priority: 1 },
    //     { ordem: 26, message: "Falha. País <país informado> inativo.", code: 26, priority: 1 },
    //     { ordem: 27, message: "Falha. Tipo de arquivo pessoal <tipo de arquivo pessoal informado> não cadastrado na base.", code: 27, priority: 1 },
    //     { ordem: 28, message: "Falha. Tipo de arquivo pessoal <tipo de arquivo pessoal informado> inativo.", code: 28, priority: 1 },
    //     { ordem: 29, message: "Falha. Não existe registro para o cod_cpf_cnpj e cod_interessado informados.", code: 29, priority: 1 },
    //     { ordem: 30, message: "Falha. Tipo de telefone <tipo de telefone informado> não cadastrado na base.", code: 30, priority: 1 },
    //     { ordem: 31, message: "Falha. Tipo de telefone <tipo de telefone informado> inativo.", code: 31, priority: 1 },
    //     { ordem: 32, message: "Falha. Pergunta secreta @campo não cadastrada na base.", code: 32, priority: 1 },
    //     { ordem: 33, message: "Falha. Pergunta secreta @campo inativa.", code: 33, priority: 1 },
    //     { ordem: 34, message: "Falha. Tipo de relacionamento fiscal <tipo de relacionamento fiscal informado> não cadastrado na base.", code: 34, priority: 1 },
    //     { ordem: 35, message: "Falha. Tipo de relacionamento fiscal <tipo de relacionamento fiscal informado> inativo.", code: 35, priority: 1 },
    //     { ordem: 36, message: "Falha. @campo @valor informado inválido.", code: 36, priority: 1 },
    //     { ordem: 37, message: "Falha. Tamanho do arquivo do campo @campo é maior que <tamanho máximo do definido para o arquivo>.", code: 37, priority: 1 },
    //     { ordem: 38, message: "Falha. Extensão do arquivo do campo @campo é maior que diferente de @campo.", code: 38, priority: 1 },
    //     { ordem: 39, message: "Formato do @campo inválido.", code: 39, priority: 1 },
    //     { ordem: 40, message: "Operação realizada.", code: 40, priority: 1 },
    //     { ordem: 41, message: "Senha atual não confere.", code: 41, priority: 1 },
    //     { ordem: 42, message: "Senha bloqueada.", code: 42, priority: 1 },
    //     { ordem: 43, message: "Falha ao salvar.", code: 43, priority: 1 },
    //     { ordem: 44, message: "Senha validada. A senha do usuário deve ser alterada.", code: 44, priority: 1 },
    //     { ordem: 45, message: "Usuário inativo.", code: 45, priority: 1 },
    //     { ordem: 46, message: "Senha validada.", code: 46, priority: 1 },
    //     { ordem: 47, message: "Dados não conferem.", code: 47, priority: 1 },
    //     { ordem: 48, message: "Verificação de pergunta secreta bloqueada.", code: 48, priority: 1 }, 49
    // ]
});
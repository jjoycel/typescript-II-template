/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/

enum ROLE {
    ADMIN = "admin",
    NORMAL = "normal"
}

type TPerson = {
    id:string,
    name: string,
    email: string,
    password: string
}

const user: TPerson = {
    id: "001",
    name: "Joy",
    email: "email",
    password: "asdf123"
}

type TAdminAccount = {
    account: string,
    permission: ROLE.ADMIN
}

type TNormalAccount = {
    account: string,
    permission: ROLE.NORMAL
}

const userAdmin: TAdminAccount = {
    account:"joy",
    permission: ROLE.ADMIN
}

const userNormal:TNormalAccount = {
    account:"Joy",
    permission: ROLE.NORMAL

}

type TUserAdmin = TPerson & TAdminAccount

type TUserNormal = TPerson & TNormalAccount

const adminUser: TUserAdmin = {
    account: "admin",
    email: "user@user",
    id: "001",
    name: "joy",
    password: "asdf0",
    permission: ROLE.ADMIN

}
const normalUser: TUserNormal = {
    account: "normal",
    email: "user@user",
    id: "002",
    name: "joy",
    password: "asdf0",
    permission: ROLE.NORMAL

}

const array: Array<TUserAdmin | TNormalAccount> = [adminUser, normalUser]

console.log (array)

const array2: (TUserAdmin | TUserNormal)[]= [adminUser, normalUser]
console.log(array2)










/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/ 

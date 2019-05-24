

/*class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        return this.admin === true;
    }
}

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha)

        this.admin = true;
    }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");

console.log(User1.isAdmin());
console.log(Adm1.isAdmin()); 

const usuario = [
    {
        nome: 'Diego', 
        idade: 23,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Gabriel',
        idade: 15,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Lucas',
        idade: 30,
        empresa: 'Facebook'
    }
];

const map = usuario.map(function(idade){
    return idade.idade;
})

console.log(map);

const filter = usuario.filter(function(user){
    return user.idade > 18 && user.empresa === "Rocketseat";
});

console.log(filter);

const find = usuario.find(function (item){
    return item.empresa === "Google";
});

console.log(find);


const arr = [1, 2, 3, 4, 5];
arr.map((item) => {
    return item +10;
});

const usuario = {
    nome: 'Danilo',
    idade: 19
};

const mostraIdade = usuario => usuario.idade;


console.log(mostraIdade(usuario));


const nome = 'Danilo';
const idade = 19;

const mostraUsuario = ((nome = 'Danilo', idade = 15) => {
    return {nome, idade};
}); 

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));


const promise = () => new Promise((resolve, reject) => resolve()); 

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nome} = empresa;
const {endereco: {cidade, estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo (empresa){
    return `${empresa.nome} esta na ${empresa.cidade}`;
}

console.log(mostraInfo({nome, endereco: {cidade}})); 

const arr = [1, 2, 3, 4, 5, 6];

const  [x, ...y] = arr;
console.log(x);
console.log(y);

function soma(...params){
    return params.reduce((total, next) => {
        return total + next;
    });
}

console.log(soma(1,2,3,4,5,6));
console.log(soma(1,2));

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil'
    }
};

const usuario2 = {...usuario, nome: 'Danilo'};
console.log(usuario2); 
const usuario3 = { ...usuario.endereco, cidade:'Lontras'};
console.log(usuario3);

const nome = 'Diego';
const idade = 23;

console.log(`O usuario ${nome} possui ${idade} anos`);

const usuario = {
    nome,
    idade,
    cidade: 'Rio do Sul'
};
*/













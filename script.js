function getAdmins(map) { //função que recebe o map
    let admins = []; //array auxiliar
    for ( [key, value] of map) { //itera por cada entrada do map tendo acesso a chave e o valor
        if(value === 'Admin') {// se valor===Admin
            admins.push(key); //Puxa a key, no caso o nome do usuario, para o array admins
        }
    }
    return admins; //retorna os admins
}

const usuarios = new Map();
//adiciona chaves . valor ao map
usuarios.set('Gustavo' , 'Admin');
usuarios.set('Daniely' , 'Admin');
usuarios.set('Daniel' , 'User');
usuarios.set('Arthur' , 'User');
usuarios.set('Geovana' , 'Admin');

//teste
//console.log(getAdmins(usuarios));

//----------------------------------------------------------------------------

const meuArray = [20, 8, 90, 490, 27, 8, 20, 1000];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));



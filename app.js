require('colors')

const { inquireMenu, pausa } = require('./helpers/inquirer');




console.clear()

const main = async()=> {
    console.log('Hola mundo');

    let opt = '';
    
    do {
        opt = await inquireMenu()
        console.log({opt});

        await pausa()
        
    } while (opt !== '0');
    
    // pausa()
}


main()

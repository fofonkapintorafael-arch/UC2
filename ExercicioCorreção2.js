const ask = require('readline-sync');

// function createAccount() {
//     let username = ask.question('Insert username: ')
//     let password = ask.question('Insert userword: ', { hideEchoBack: true, mask: '*' })


//     let newAccount = {
//         username: username,
//         password: password
//     }

//     accounts.push(newAccount)
//     return console.log('Account successfully registered!')
// }

// function login() {
//     let username = ask.question('Insert username: ')
//     let password = ask.question('Insert userword: ', { hideEchoBack: true, mask: '*' })

//     for (let user of accounts) {
//         if (user.username === username && user.password === password) {
//             token = {
//                 username: username, 
//                 password: password
//             }

//             return true
//         }
//     }
//     return false
// }

// //----------------------------------------------------------------------------

// const accounts = []

// let token = null

// while (true) {
//     console.clear()
//     console.log(`

//     1 - Register account
//     2 - Login 
//     3 - Exit

//     `)

//     let option = Number(ask.question('Choose a option: '))
//     switch (option) {
//         case 1:
//             console.clear()
//             createAccount()
//             ask.question('Press ENTER to continue...')
//             break
//         case 2:
//             console.clear()
//             console.log(login())
//             break
//         case 3:
//             process.exit()
//             break
//         default:
//         console.clear()
//         console.log('Invalid option')
//         break
//     }
// }


function createAccount() {
    let username = ask.question('Insert name: ');
    let password = ask.question('Insert password: ', { hideEchoBack: true, mask: "*" })

    let newAccount = {
        username: username,
        password: password
    }
    Account.push(newAccount)
    return console.log('Account created successfully!')
}

function Login() {
    let username = ask.question('Insert name: ');
    let password = ask.question('Insert password: ', { hideEchoBack: true, mask: "*" })

    for (let user of Account) {
        if (user.username === username && user.password === password) {
            token = {
                username: username,
                password: password
            }
            return true
        }
    }
    return false
    
    
}

let Account = []

let token = null

while (true) {
    console.clear()
    console.log(`
    
    1 - Create account
    2 - Login
    0 - Exit
    
    `)

    let option = Number(ask.question('Choose a option: '));

    switch (option) {
        case 1:
            console.clear()
            createAccount()
            ask.question('Press ENTER to continue...')
            break
        case 2:
            console.clear()
            Login()
            console.log('Login successful!')
            ask.question('Press ENTER to continue...')
            break
        case 0:
            process.exit()
            ask.question('Press ENTER to continue...')
            break
        default:
            console.log('Invalid option')
            ask.question('Press ENTER to continue...')
            break
    }
}
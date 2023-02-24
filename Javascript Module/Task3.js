let success = false

function queryUserById(userId) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve(`Success. Here is your user with id ${userId}`)
        } else {
            reject(`Error. No user with id: ${userId}`)
        }
    })
}

function getUserByIdFirstFunction(id) {
    queryUserById(id)
        .then(success => {
            console.log(success)
        })
        .catch(error => {
            console.error(error)
        })
}

async function getUserByIdSecondFunction(id) {
    try {
        let user = await queryUserById(id)
        console.log(user)
    } catch (err) {
        console.log(err)
    }
}

getUserByIdFirstFunction(105)
getUserByIdSecondFunction(105)
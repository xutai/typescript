interface User {
    name: string,
    id: number
}


function getAdminUser(): User {
    return {
        name: 'xutai',
        id: 1
    }
}

function deleteUser(user: User) {
    console.log("user", user)
}

console.info(getAdminUser())
console.info(deleteUser({ name: 'aping', id: 123 }))





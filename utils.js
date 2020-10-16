const USER = 'USER';

export function saveUser(user) {
    const userAsString = JSON.stringify(user);

    localStorage.setItem(USER, userAsString);
}

export function getUser() {
    const userAsString = localStorage.getItem(USER);

    return JSON.parse(userAsString);
}

export function findById(someArray, id) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === id) {
            return item;
        }
    }
}
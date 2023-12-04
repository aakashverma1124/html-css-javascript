class Character {
    constructor (id, name, x, y) {
        this.name = name
        this.id = id
        this.x_cord = x
        this.y_cord = y
    }

    get position () {
        // returning a object...
        return {
            X_Cordinate : this.x_cord,
            Y_Cordinate : this.y_cord,
        }
    }

    get playerDetails() {
        // return a object...
        return {
            Name : this.name,
            Id : this.id,
        }
    }
}

class PlayerCharacter extends Character {
    constructor(id, name, x, y) {
        super(id, name, x, y)
    }
}
class NonPlayerCharacter extends Character {
    constructor(id, name, x, y) {
        super(id, name, x, y)
    }
}

const createPlayer = (id, name) => {
    let x = Math.floor(Math.random() * 10)
    let y = Math.floor(Math.random() * 10)

    return new PlayerCharacter(id, name, x, y)
}

const createNonPlayer = (id, name) => {
    let x = Math.floor(Math.random() * 10)
    let y = Math.floor(Math.random() * 10)

    return new NonPlayerCharacterPlayerCharacter(id, name, x, y)
}

// TestCases

const player1 = createPlayer(1, `Uday`)

console.log(player1.playerDetails);
/*
Output
{ Name: 'Uday', Id: 1 }
*/

console.log(player1.position);
/*
Output
{ X_Cordinate: 5, Y_Cordinate: 8 }
*/

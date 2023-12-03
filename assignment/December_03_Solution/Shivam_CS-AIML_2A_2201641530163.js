class Character {
    // Write your code here
    constructor(id, name, x, y) {
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
    }

    get position() {
        // Write your code here
        return { x: this.x, y: this.y };
    }
}


// Define Player Character and NonPlayerCharacter classes here


class PlayerCharacter extends Character {
    constructor(id, name, x, y) {
        super(id, name, x, y);
    }
}

class NonPlayerCharacter extends Character {
    constructor(id, name, x, y) {
        super(id, name, x, y);
    }
}

function createPlayer(id, name) {
    // Write your code here
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return new PlayerCharacter(id, name, x, y);
}

function createNonPlayer(id, name) {
    // Write your code here
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return new NonPlayerCharacter(id, name, x, y);
}



const player = createPlayer(1, "Player-1");
const nonPlayer = createNonPlayer(2, "Non-Player-1");

console.log(player.position); 
console.log(nonPlayer.position); 

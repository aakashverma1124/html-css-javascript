class Character {
    constructor(id, name, x, y) {
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
    }

    get position() {
        return { x: this.x, y: this.y };
    }
}



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
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return new PlayerCharacter(id, name, x, y);
}

function createNonPlayer(id, name) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return new NonPlayerCharacter(id, name, x, y);
}



// Sample usage:
const player = createPlayer(1, "Player1");
const nonPlayer = createNonPlayer(2, "NPC1");

console.log(player.position); 
console.log(nonPlayer.position); 

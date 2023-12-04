class Character {
    constructor(id, name, x, y) {
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
    }

    get position() {
        return { xpos: this.x, ypos: this.y };
    }
}

class PlayerCharacter extends Character
{
    constructor(id, name, x, y)
    {
        super(id, name, x, y);
    }
}

class NonPlayerCharacter extends Character
{
    constructor(id, name, x, y)
    {
        super(id, name, x, y);
    }
}

function createPlayer(id, name) {
    return new PlayerCharacter(id,name,Math.floor(Math.random()*10),Math.floor(Math.random()*10))
}

function createNonPlayer(id, name) {
    return new PlayerCharacter(id,name,Math.floor(Math.random()*10),Math.floor(Math.random()*10))
}
// console.log("hello")
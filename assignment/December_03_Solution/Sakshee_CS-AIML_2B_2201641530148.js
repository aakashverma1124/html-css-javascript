class Character {
    constructor( id, name, x, y ) {
       // Write your code here
       this.id=id;
       this.name=name;
       this.x=x;
       this.y=y;
    }

    get position() {
        // Write your code here
        return {x: this.x, y:this.y};
    }
}

// Define Player Character and NonPlayerCharacter classes here
class playerChar extends Character{
    constructor(id,name,x,y){
        super(id,name,x,y);
    }
}
class nonPlayerChar extends Character{
    constructor(id,name,x,y){
        super(id,name,x,y);
    }
}
function createPlayer(id, name) {
    // Write your code here
    const x= Math.floor(Math.random() *10);
    const y=Math.floor(Math.random()*10);
    return new playerChar(id,name,x,y);
}

function createNonPlayer(id, name) {
    // Write your code here
    const x=Math.floor(Math.random()*10);
    const y=Math.floor(Math.random()*10);
    return new nonPlayerChar(id,name,x,y);
}
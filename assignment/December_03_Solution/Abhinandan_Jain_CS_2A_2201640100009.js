class Character {
	constructor(id, name, x, y) {
		// Assign data to the character
		this.name = name;
		this.id = id;
		this.x = x;
		this.y = y;
	}

	get position() {
		// Return coordinates
		return { xCoord: this.x, yCoord: this.y };
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
	// Create random coordinates for x and y in 10x10 grid
	let x = Math.floor(Math.random() * 10);
	let y = Math.floor(Math.random() * 10);
	// Create new player with given data
	return new PlayerCharacter(id, name, x, y);
}

function createNonPlayer(id, name) {
	// Create random coordinates for x and y in 10x10 grid
	let x = Math.floor(Math.random() * 10);
	let y = Math.floor(Math.random() * 10);
	// Create new player with given data
	return new NonPlayerCharacter(id, name, x, y);
}
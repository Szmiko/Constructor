function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.bark = function() {
		if (this.weight > 15) {
			alert(this.name + " szczeka hau!");
		} else {
			alert(this.name + " szczeka hiauu!");
		}
	}
};

var fido = new Dog("Burek", "mieszaniec", 20);
var fluffy = new Dog("Dino", "pudel", 16);
var spot = new Dog("Kieł", "chihuahua", 4);
var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
	dogs[i].bark();
};
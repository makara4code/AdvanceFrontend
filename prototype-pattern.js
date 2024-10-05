// const animal = {
//     walk: function() {
//         console.log("Animal is walking");
//     }
// }

// const dog = Object.create(animal);
// console.log(dog.__proto__)
// console.log(dog)
// dog.name = "KIKI"
// console.log(dog)
// __proto__: walk()
// dog.fly()
// dog.type = "Mamal";
// dog.talk = "Bark";

// console.log(dog)

// dog.walk()

// console.log(Object.getPrototypeOf(dog))

class Animal {
    walk() {
        console.log("Animal is walking");
    }
}

class Dog extends Animal {
    name = "KIKI";
}

const dog = new Dog();

dog.walk()
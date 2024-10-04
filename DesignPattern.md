# Introduction to Design Patterns

- `Design patterns`: are reusable solutions to common problems that arise during software design and development. They provide proven practices and structures that can be applied in various contexts to improve code quality, maintainability, and scalability
- `Benefits of using design patterns`:
  - Reusability: Can be applied in multiple projects and domains
  - Abstraction: Provide a general solution to a specific problem
  - Flexibility: Allow for customization to fit different project requirements
  - Well-defined structure: Follow established principles and best practices
- `Main categories of design patterns`:
  - `Creational patterns`: Deal with object creation and initialization
  - `Structural patterns`: Describe how classes and objects can be combined to form larger structures
  - `Behavioral patterns`: Define the interactions between objects and algorithms
- Importance in software development:
  By using design patterns, developers can write more efficient, readable, and maintainable code while adhering to established industry standards and best practices.

## Module Pattern
The `Module Pattern` in JavaScript is a popular design pattern that helps organize code and prevent global namespace pollution

Key points:

- Uses closures to create private variables and functions
- Encapsulates functionality and prevents global namespace pollution
- Allows for lazy initialization

Example implementation:

```js
const module = (function () {
  const privateVar = "I'm private!";

  return {
    publicMethod: function () {
      console.log(privateVar);
    },
  };
})();

module.publicMethod(); // Outputs: "I'm private!"
```

## Prototype Pattern
The `Prototype Pattern` is a creational design pattern in JavaScript that creates objects by cloning an existing object.

Key points:
- Creates new objects by copying an existing object
- Useful for creating multiple instances of similar objects
- Saves memory by sharing common properties/methods

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Create instances
const john = new Person("John");
const jane = new Person("Jane");

john.sayHello(); // Outputs: Hello, my name is John
jane.sayHello(); // Outputs: Hello, my name is Jane
```

## Observer Pattern
The Observer Pattern is a behavioral design pattern that defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

Key points:

- Defines a one-to-many dependency between objects
- Allows objects to notify other objects about changes
- Useful for implementing event-driven architectures

Example implementation:

```js
class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach((observer) => observer.update());
  }
}

class Observer {
  update() {}
}

class ConcreteSubject extends Subject {
  setState(state) {
    this.state = state;
    this.notify();
  }
}

class ConcreteObserver extends Observer {
  update() {
    console.log(`State changed to ${this.subject.state}`);
  }
}

const subject = new ConcreteSubject();
subject.attach(new ConcreteObserver());
subject.setState("New state");
```

# Architectural Patterns

## MVC (Model-View-Controller)

Key points:

- Separates the application logic into three interconnected elements
- Model represents the data and business logic
- View handles the display of data
- Controller manages the interactions between Model and View

Example implementation:

```js
class Model {
  constructor() {
    this.data = "Some initial data";
  }

  getData() {
    return this.data;
  }

  setData(newData) {
    this.data = newData;
  }
}

class View {
  render(data) {
    console.log(`Current data: ${data}`);
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  updateView() {
    const data = this.model.getData();
    this.view.render(data);
  }

  setData(newData) {
    this.model.setData(newData);
    this.updateView();
  }
}

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

controller.setData("Updated data");
```

## MVVM (Model-View-ViewModel)

Key points:

- Combines the advantages of MVC and MVP
- ViewModel acts as an intermediary between View and Model
- View binds to ViewModel properties and commands

Example implementation (using KnockoutJS):

<!-- TODO: Add example -->

```js

```

## Singleton Pattern

Key points:

- Ensures a class has only one instance
- Provides a global point of access to that instance
- Useful for managing resources that should have a single instance

Implementation in JavaScript:

```js
class Singleton {
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  someMethod() {
    console.log("Called singleton method");
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true
singleton1.someMethod(); // Outputs: Called singleton method
```

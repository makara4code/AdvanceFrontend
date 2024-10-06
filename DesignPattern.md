# Introduction to Design Patterns

https://www.youtube.com/watch?v=tv-_1er1mWI

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

https://www.youtube.com/watch?v=pOfwp6VlnlM

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

https://youtu.be/tv-_1er1mWI?si=CNvGRXUVgX8XZ7Pv&t=144

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

https://youtu.be/tv-_1er1mWI?si=Sg3LHw9tNut8tHz0&t=478

The Observer Pattern is a behavioral design pattern that defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

Key points:

- Defines a one-to-many dependency between objects
- Allows objects to notify other objects about changes
- Useful for implementing event-driven architectures

## Architectural Patterns

https://www.youtube.com/watch?v=I5c7fBgvkNY

### MVC (Model-View-Controller)

Key points:

- Separates the application logic into three interconnected elements
- Model represents the data and business logic
- View handles the display of data
- Controller manages the interactions between Model and View

### MVVM (Model-View-ViewModel)

Key points:

- Combines the advantages of MVC and MVP
- ViewModel acts as an intermediary between View and Model
- View binds to ViewModel properties and commands

## Singleton Pattern

https://youtu.be/tv-_1er1mWI?si=rOjAcNR0oW432fjF&t=93

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

## Repository Pattern

https://www.youtube.com/watch?v=Twu21yltjvo

The Repository Pattern is a software design pattern that provides an abstraction layer between the business logic and data storage

### Definition and Purpose

The Repository Pattern acts as an intermediary layer between an application's business logic and data storage 3. Its primary purpose is to:

- Provide a standardized way to access, manage, and manipulate data
- Abstract the underlying details of data storage technologies
- Separate concerns between data access and core application logic

### Key Characteristics

- Centralizes data access logic
- Provides a consistent interface for interacting with data
- Allows for easy switching between different data sources
- Improves testability by separating data access from business logic

# What is Clean Architecture

Clean Architecture is a software design philosophy introduced by Robert C. Martin (Uncle Bob) that aims to create maintainable, testable, and scalable software systems.

### Definition and Purpose

Clean Architecture is a software design approach that focuses on creating systems that are:

1. Maintainable
2. Testable
3. Independent of frameworks
4. Independent of UI
5. Independent of databases
6. Independent of any external agency

The primary goal is to separate the core business logic from external concerns such as user interfaces, databases, and external systems

## Core Principles

Clean Architecture adheres to several key principles:

1. Separation of Concerns: Different concerns (e.g., UI, business logic, data access) are isolated into distinct layers.
2. Dependency Rule: Dependencies flow inward toward the core business logic.
3. Testability: The separation of concerns allows each layer to be tested independently.
4. Independence of Frameworks: The core logic of the application does not depend on external frameworks.
5. Flexibility and Maintainability: The layered structure allows the system to adapt to changes more easily.

### Key Components

1. Entities: Encapsulate business logic and remain isolated from external dependencies.
   Use Cases: Represent the core functionality of the application.
2. Interfaces: Define abstractions for external dependencies.
3. Adapters: Translate between interfaces and concrete implementations.

### Benefits

- Improved maintainability and scalability
- Easier testing and unit testing
- Better separation of concerns
- Flexibility to change technologies or frameworks without affecting core logic

### Implementation Challenges

1. Over-engineering: The structure can become too complex if not managed properly.
2. Increased Initial Development Time: More time is required initially to set up the architecture.
3. Adoption by the Team: Some team members may struggle with understanding the new approach.

### Best Practices

- Gradually introduce Clean Architecture into existing projects.
- Focus on core principles and add layers only when beneficial.
- Provide support and training to the team on Clean Architecture principles.
- Use pair programming, code reviews, and architectural discussions to enhance knowledge sharing.

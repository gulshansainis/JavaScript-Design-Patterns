class Person {
    constructor(name) {
        this.name = name;
    }
}

class Instructor extends Person {
    constructor(name, position, earnings) {
        super(name);
        this.position = position
        this.earnings = earnings;
    }

    toString() {
        return JSON.stringify(this);
    }
}

class Student extends Person {
    constructor(name, level) {
        super(name);
        this.level = level;
    }

    toString() {
        return JSON.stringify(this);
    }
}


const userFactory = (type, name, position, earnings = 0, level = 'Beginner') => {
    if (type === 'instructor') {
        return new Instructor(name, position, earnings);
    } else if (type === 'student') {
        return new Student(name, level);
    }
}

const gulshan = userFactory("instructor", "Gulshan Saini", "Software Developer", "1000000")
const aditi = userFactory("student", "Aditi Saini", "Begineer");

console.log(gulshan.toString());
console.log(aditi.toString());

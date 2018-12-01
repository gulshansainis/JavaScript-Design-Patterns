class Course {

    constructor(builder) {
        this.name = builder.name;
        this.sales = builder.sales || 0;
        this.isFree = builder.isFree;
        this.price = builder.price || 0;
        this.campaign = builder.campaign;
    }

    toString() {
        return JSON.stringify(this);
    }
}

class CourseBuilder {

    constructor(name, sales = 0, price = 0) {
        this.name = name;
        this.sales = sales;
        this.price = price
    }

    makePaid(price) {
        this.isFree = false;
        this.price = price
        return this;
    }

    makeCampaign() {
        this.isCampaign = true;
        return this;
    }

    build(){
        return new Course(this);
    }
}

const course1 = new CourseBuilder('Design Patterns 1').makePaid(100).makeCampaign().build();
const course2 = new CourseBuilder('Design Patterns 2').build();

console.log(course1.toString());
console.log(course2.toString());
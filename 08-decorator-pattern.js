// scroll down for decorator pattern implementation
//              | |
//           ___| |__
//           \      /
//            \    /
//             \  /
//              \/
class Course {

    constructor(builder) {
        this.name = builder.name;
        this.sales = builder.sales || 0;
        this.isFree = builder.isFree;
        this.price = builder.price || 0;
        this.campaign = builder.campaign;
    }

    toString(course) {
        return console.log(JSON.stringify(course));
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

// Code for decorator goes below
// create new class to decorate existing object

class DecorateCourseAsHot {
    constructor(course){
        this.name = course.name + ' is hot now!!!';
    }
}

const HotCourse = new DecorateCourseAsHot(course1);

console.log(course1.toString(course1));
console.log(course1.toString(HotCourse));



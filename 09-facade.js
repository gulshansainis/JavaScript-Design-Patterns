class Course {
    constructor(data) {
        this.name = data.name;
        this.project = data.project;
        this.completed = data.completed || false;
    }
}

// module.exports = Course;

const CourseServices = (
    () => {
        return {
            completed: (Course) => {
                Course.completed = true;
                console.log('Completing course ', Course.name);
            },
            save: (Course) => {
                console.log('Saving course ', Course.name);
            }
        }
    }
)();


const myCourse = new Course({ name: "Design Patterns", project: "Open Source Tutorials" });

console.log(myCourse);

CourseServices.completed(myCourse);

if (myCourse.completed) {
    CourseServices.save(Course);
};

console.log(myCourse);
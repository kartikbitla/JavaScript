const course = {
    courseName:"JS in Hindi",
    fees:"999",
    instructorName:"Kartik"
}


//below is the option to access an element from the object
const {instructorName: teacherName} = course;
console.log(teacherName);


//this is how JSON look like
{
    "name":"Kartik",
    "courseName":"JS in Hindi",
    "price":"free"
}
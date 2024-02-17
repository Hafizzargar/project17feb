let student = [{ id: 1, name: "john", age: "18", marks: 80 },
{ id: 2, name: "jack", age: "20", marks: 85 },
{ id: 3, name: "karen", age: "19", marks: 35 }];

function PrintStudentswithMap() {
    let stu=student.filter((e) => {
        return e.marks >= 50;
      }) 
       stu.map((data) => {
        console.log(data);
      })

}
function PrintStudentsbyForEach() {

    const f = student.filter((st1) => {
        return st1.marks>=50;
      })
      f.forEach((data) => {
        console.log(data)
      })
}

let newstudent={id:4,name:"susan",age:"20",marks:45};
function addData(){
    student.push(newstudent);
    console.log(newstudent);
}
function removeFailedStudent(){
    let stu=student.filter((e) => {
        return e.marks < 50;
      }) 
      stu.map((data) => {
        console.log(data);
      })


}
let student2=[
    {id: 5, name: "urd", age: "28", marks: 90 },
    { id: 2, name: "jackiew", age: "30", marks: 15 },
     
]
function concatenateArray() {
    student=student.concat(student2);
    console.log(student);
    
  }




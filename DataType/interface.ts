interface Info{
    name: string,
    age: number,
    college:string
}


var studentaObj: Info={
    name: 'Aakash Saini',
    age: 22,
    college:'Quantum University'
}
console.log(studentaObj)

interface teacherInfo extends Info{
    subject:string
}

// var teacherObj: Info = {
//     name:'Aadi',
//     age: 45,
//     college: 'Quantum University',
//     subject:'CN'
// }
var teacherObj: teacherInfo = {
    name:'Aadi',
    age: 45,
    college: 'Quantum University',
    subject:'CN'
}
console.log(teacherObj)
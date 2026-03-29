interface CollegeType{
    name: string;
    location: string;
    students: number;
    branch: string[];
}
// let collegeDetails: CollegeType = {
//     name: 'Quantum University',
//     location: 'Roorkee',
//     students: 600,
//     branch:['CA','CSE','Civil','Ele','ART']

// }
// if we want to set only 3 key value out of 4 then we got an error now we use PARTIAL UTILITY 

// let collegeDetails: Partial<CollegeType> = {
//     name: 'Quantum University',
//     location: 'Roorkee',
//     // students: 600,
//     branch:['CA','CSE','Civil','Ele','ART']

// }
// console.log(collegeDetails)


// function getInfo1(data:Partial<CollegeType>){
//     console.log(data)
// }
// getInfo1({ name: 'Quantum University', location: 'Roorkee' })

// function getInfo2(data:Required<CollegeType>){
//     console.log(data)
// }
// getInfo2({ name: 'Quantum University', location: 'Roorkee', students: 600, branch: ['CSE', 'CA'] })

// var collegeDetails1:Readonly<CollegeType> = {
//      name: 'QU',
//     location: 'Chutmalpur',
//     students: 400,
//     branch:['Civil','Ele','ART']
// } 
// collegeDetails1.name = 'Quantum school of Tech'


// var collegeDetails2:Pick<CollegeType,'name'|'students'> = {
//     name: 'QU',
    // location: 'Chutmalpur',
//     students: 400,
    // branch:['Civil','Ele','ART']
// } 
// console.log(collegeDetails2)

// var collegeDetails3:Omit<CollegeType,'students'> = {
//     name: 'QU',
//     location: 'Chutmalpur',
//     branch:['Civil','Ele','ART']
// } 
// console.log(collegeDetails3)


// type APIStatus = 'Loading' | 'Pending' | 'Sucess' | 'Error';
// var APICall: Exclude<APIStatus, 'Error'> = 'Loading'
// // var APICall: Exclude<APIStatus, 'Error'> = 'Error'
// console.log(APICall)
// type APIStatus = 'Loading' | 'Pending' | 'Sucess' | 'Error';
// var APICall: Extract<APIStatus, 'Error'|'Sucess'> = 'Error'
// // var APICall: Extract<APIStatus, 'Error'|'Sucess'> = 'Loading'
// console.log(APICall)

// type randomType = string | number | undefined | null | string[];
// let nonNullAbleVaule: NonNullable<randomType> = 'number';
// console.log(nonNullAbleVaule)

type SiteRole = 'Admin' | 'Guest' | 'User';
// var SiteRoleOption: SiteRole = 'eng'
var SiteRoleOption: SiteRole = 'Admin'
var SiteRoleDetails:Record<SiteRole, string> = {
    Admin: 'Aakash',
    Guest: 'Aadi',
    User:'Sidd',
}
console.log(SiteRoleDetails)
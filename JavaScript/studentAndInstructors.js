
var students=[
    {first_name:'Michale', last_name:'Jordan'},
    {first_name:'John', last_name:'Rosales'},
    {first_name:'Mark', last_name:'Guillen'},
    {first_name:'KB', last_name:'Tonel'}
]
// for(var name in students) {
//     console.log(students[name].first_name + " " + students[name].last_name);

//     console.log("1----------------------------")
//
//     function showName(obj) {
//         for(var name in students){
//             console.log(students[name].first_name+" "+students[name].last_name);
//     }
// }
// showName(students);

console.log("----------------------------");

var users={
    'Students':[
        {first_name:'Michale', last_name:'Jordan'},
        {first_name:'John', last_name:'Rosales'},
        {first_name:'Mark', last_name:'Guillen'},
        {first_name:'KB', last_name:'Tonel'}
    ],
    'Instructors':[
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
    ]
}

for(var s in students){

    console.log(s);
    console.log(students[s]+"-"+students[s].first_name+" "+students[s].last_name);
}
console.log("----------------------------");

for(var i=0; i<users.Students.length;i++){
    console.log((i+1)+" - "+users.Students[i].first_name+" "+users.Students[i].last_name+
        " - "+(users.Students[i].first_name+users.Students[i].last_name).length);
}



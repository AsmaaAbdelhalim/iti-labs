

6
const stuGrades = [60, 100, 10, 15, 85];
const sortedGrades = stuGrades.sort(function(a, b) {
    return b - a;
});
console.log(Math.max.apply(null, sortedGrades));

const stuFiltered = stuGrades.filter(cheackNum);

function cheackNum(grade) {
    return grade < 60;
}
console.log(stuFiltered);

/////////////          777777777            //////////////////

const stuGradesWnames = [
    { names: "asmaa", degree: 70 },
    { names: "cest", degree: 25 },
    { names: "higher", degree: 92 },
    { names: "best3", degree: 50 },
    { names: "highest", degree: 99 },
];

/////////   e  /////////
const newData = stuGradesWnames.sort(function(a, b) {
    if (a.names < b.names) {
        return -1;
    }
    if (a.names > b.names) {
        return 1;
    }
    return 0;
});
console.log(newData);

stuGradesWnames.sort("names");
console.log(stuGradesWnames);

////////  dddd /////////
stuGradesWnames.pop();
for (const key of stuGradesWnames) {
    console.log(key);
}

//////// cccc ///////////
stuGradesWnames.push({ names: "pushed", degree: 10 });
for (const key in stuGradesWnames) {
    console.log(stuGradesWnames[key]);
}
console.log(stuGradesWnames);

///////    bbbbbb    /////////
let lessThan = stuGradesWnames.filter(function(e) {
    return e.degree < 60;
});
let firstName = lessThan[0].names;
let secondName = lessThan[1].names;

console.log(firstName, secondName);

function lessThan(less) {
    return less.degree < 60;
}
const result = stuGradesWnames.filter(lessThan).names;
console.log(result);

////////   aaaaaaaaaa   //////////

function higherThan(higher) {
    return higher.degree > 90 && higher.degree < 100;
}
console.log(stuGradesWnames.find(higherThan).name);

console.log(stuGradesWnames[0].degree);
for (let i = 0; i < stuGradesWnames.length; i++) {
    if (stuGradesWnames[i].degree > 90 && stuGradesWnames[i].degree < 100) {
        console.log(stuGradesWnames[i].names);
    }
}

function cheackBetween(array) {
    // console.log(array.degree);
    console.log(array);

    // for (let i = 0; i < array.length; i++) {
    //     if (array[i].degree > 90 && array[i].degree < 100) {
    //         console.log(array[i]);
    //     }
    // }
}
console.log(stuGradesWnames.find(cheackBetween));
console.log(stuGradesWnames[0]);

/////////////          888888            //////////////////

const userBirthDay = prompt(
    "enter the date in the following format (DD – MM – YYYY) ex. 22–01–1999"
);
if (
    userBirthDay.length == 10 &&
    userBirthDay.charAt(2) == "-" &&
    userBirthDay.charAt(5) == "-"
) {
    cheackUserBirthday(userBirthDay);

    function cheackUserBirthday(userBirthDay) {
        let dd = Number(userBirthDay.slice(0, 2));
        let mm = Number(userBirthDay.slice(3, 5));
        let yy = Number(userBirthDay.slice(6));
        console.log(dd, mm, yy);

        const d = new Date(yy, mm, dd);
        let newdate = yy + "/" + mm + "/" + dd;

        alert(newdate, d);
    }
} else {
    alert('Wong Date Format". ');
}
// Опис завдання
// Розробіть програму на чистому JavaScript, яка виконує наступні операції:

// Створення даних
// Створіть масив об'єктів, де кожен об'єкт описує студента з наступними властивостями:

// firstName – ім'я студента.
// lastName – прізвище студента.
// birthDate – дата народження у форматі рядка "YYYY-MM-DD".
// marks – масив оцінок (числові значення).
// Обчислення середньої оцінки та віку
// Напишіть функцію getStudentInfo(student), яка приймає об'єкт студента та повертає новий об'єкт з полями:

// fullName – повне ім'я (об’єднання firstName та lastName).
// age – вік студента (розрахунок від дати народження до поточної дати).
// averageMark – середня оцінка (значення обчислене з масиву marks, округлено до одного знака після коми).
// Фільтрація за місяцем народження
// Напишіть функцію getBirthdayStudents(students), яка приймає масив студентів та повертає новий масив тих студентів, у яких місяць народження співпадає з поточним місяцем.

// Сортування студентів
// Напишіть функцію sortStudentsByAverageAndAge(students), яка повертає новий масив студентів, відсортований за такими критеріями:

// Спочатку за середньою оцінкою (за спаданням).
// Якщо середні оцінки рівні – за віком (за зростанням).
// Вивід інформації
// Напишіть функцію printStudents(students), яка для кожного студента в масиві виводить у консоль рядок у такому форматі:
// Студент: [Повне ім'я], вік: [Вік], середня оцінка: [Середня оцінка].

// Вимоги до реалізації
// Використовуйте чистий JavaScript (без додаткових бібліотек).
// Не змінюйте оригінальний масив студентів – всі функції, що трансформують дані, повинні повертати новий масив або об'єкт.
// Використовуйте зрозумілі назви змінних та функцій.
// Коментуйте код там, де це доцільно, для кращого розуміння логіки.
// Протестуйте кожну функцію (наприклад, виведіть результати роботи у консоль).


function Student(firstName, lastName, birthDate, marks) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(birthDate);
    this.marks = marks;
    // Обчислення середньої оцінки
    this.getAverageScore = () => 
         (this.marks.reduce((acc, num) => acc + num, 0) / this.marks.length).toFixed(1);
    
    // Обчислення середнього віку
    this.getAge = () => {
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        isBirthdayPassed  = today.getMonth() > this.birthDate.getMonth() || (today.getMonth() === this.birthDate.getMonth() && today.getDate() >= this.birthDate.getDate());
        return isBirthdayPassed ? age : age - 1;
    }
}


const arrayStudents = [];
let newStudent1 = new Student('Alex', 'Abdram', '2003-07-01', [5, 4, 3, 5, 4, 3, 5, 4, 3, 4, 3, 5, 5, 5])
arrayStudents.push(newStudent1)
let newStudent2 = new Student('Den', 'Oven', '2008-04-02', [3, 4, 3, 4, 3, 5, 5, 4, 3, 5, 5, 4, 3, 5])
arrayStudents.push(newStudent2)
let newStudent3 = new Student('Valery', 'Konail', '2011-03-18', [3, 4, 3, 5, 4, 3, 5, 5, 4, 3, 5, 4, 3, 5])
arrayStudents.push(newStudent3)
let newStudent4 = new Student('Nick', 'Patys', '2001-11-30', [3, 4, 3, 5, 5, 4, 3, 4, 3, 5, 4, 3, 5, 5])
arrayStudents.push(newStudent4)
let newStudent5 = new Student('Micle', 'Morrys', '2002-12-25', [, 4, 3, 4, 3, 5, 5, 4, 3, 5, 4, 3, 5, 4, 3, 5, 5])
arrayStudents.push(newStudent5)
let newStudent6 = new Student('Borys', 'Darck', '2003-04-18', [3, 4, 4, 3, 5, 4, 3, 4, 3, 5, 5, 3, 5, 5])
arrayStudents.push(newStudent6)
let newStudent7 = new Student('Jon', 'Branch', '2003-11-09', [5, 4, 3, 5, 4, 3, 4, 4, 3, 5, 3, 5, 5, 5])
arrayStudents.push(newStudent7)

const studentInfo = getStudentInfo(newStudent1);
displayStudent(studentInfo);

const filterArrayAgeStudent = getBirthdayStudents(3);
console.log('Список студентів, які народилися в 4 місяці (тобто у квітні):');
filterArrayAgeStudent.forEach((student, index) => console.log((index + 1) + " " + student.firstName + " " + student.lastName));

console.log('Сортування студентів, за середнім балом, та віком (якщо середній бал однаковий')
const sortArrayStudents = getSortArray(); // відсортований список студентів
sortArrayStudents.forEach(student => displayStudent(getStudentInfo(student)))

// Виведемо на сторінці
let text = '<ol>';
sortArrayStudents.forEach(student => text += `
    <li> Студент: ${student.firstName} ${student.lastName}<br>
    Вік: ${student.getAge()} років<br>
    Середній балл: ${student.getAverageScore()}</li>
    <br>
    `)
text += '</ol>';
if (confirm("Вивести відсортований список на сторінці?")) {
    document.getElementById("list").innerHTML = text;
}


function getStudentInfo(student) {
    return {
        fullName: student.firstName + " " + student.lastName,
        age: student.getAge(),
        averageMark: student.getAverageScore()
    };
}

// for (let [key, value] of Object.entries(studentInfo)) {
    // console.log(key + ": " + value);
// }
function displayStudent(studentInfo) {
    for (let i in studentInfo) {
        console.log(i + ": " + studentInfo[i]);
    }
}

function getBirthdayStudents(month) {
    return arrayStudents.filter(student => student.birthDate.getMonth() === month);
}

function getSortArray() {
    const sortArray = arrayStudents.sort((a, b) => {
        const avgScoreA = a.getAverageScore();
        const avgScoreB = b.getAverageScore();
        if (avgScoreB !== avgScoreA) {return avgScoreB - avgScoreA;}
        const ageA = a.getAge();
        const ageB = b.getAge();
        return ageA - ageB;
    });

    return sortArray;
}

// функція setTimeout
if (confirm("Вивести список із затримкою (setTimeout)?")) {
    let listStudents = '<ol>';
    let interval = 1000;
    let timerId;
    for (let i in sortArrayStudents) {
        interval += 1000;
        listStudents += `<li> Студент: ${sortArrayStudents[i].firstName} ${sortArrayStudents[i].lastName}<br>
        Вік: ${sortArrayStudents[i].getAge()} років<br>
        Середній балл: ${sortArrayStudents[i].getAverageScore()}
        <p></p></li>`;
        // console.log(listStudents);
        timerId = setTimeout(displayListTimeout, interval, listStudents);
    }
}


function displayListTimeout(listStudents) {
    document.getElementById("list_Timeout").innerHTML = listStudents;
}


// функція setInterval

let timerId;
let listStudents = '<ol>';

if (confirm("Вивести список із затримкою (setInterval)?")) {
    let interval = 1000; // інтервал часу 1 сек
    
    timerId = setInterval(displayListInterval, interval);
    listStudents += '</ol>'
    document.getElementById("list_Interval").innerHTML = listStudents;

}

displayListInterval.counter = 0;

function displayListInterval() {
    const i = displayListInterval.counter;
    if (displayListInterval.counter < sortArrayStudents.length) {
        listStudents += `<li> Студент: ${sortArrayStudents[i].firstName} ${sortArrayStudents[i].lastName}<br>
        Вік: ${sortArrayStudents[i].getAge()} років<br>
        Середній балл: ${sortArrayStudents[i].getAverageScore()}
        <p></p></li>`;
        document.getElementById("list_Interval").innerHTML = listStudents;
        displayListInterval.counter++;
        
    } else clearInterval(timerId);
    

}


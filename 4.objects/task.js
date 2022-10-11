function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
let stud1 = new Student("Alex", "male", 27);
let stud2 = new Student("Mary", "female", 29);
let stud3 = new Student("Ann", "female", 28);

Student.prototype.setSubject = function (subjectName) {
  this.subjectName = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else  {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...mark) {
  if (this.marks === undefined) {
    this.marks = [...mark];
  } else {
    this.marks = this.marks.push(...mark);
  }
}
Student.prototype.getAverage = function() {
  if (this.marks === undefined) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    return sum / this.marks.length;
  }
}

Student.prototype.exclude = function(reason) {
  delete this.subjectName;
  delete this.marks;
  this.excluded = reason;
}
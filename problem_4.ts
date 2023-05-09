class Person {
	constructor(private name: string, private age: number) {}

	getDetails(): string {
		return `Name: ${this.name}, Age: ${this.age}`;
	}
}

class Student extends Person {
	constructor(name: string, age: number, private grade: string) {
		super(name, age);
	}

	getGrade(): string {
		return `${this.grade}`;
	}
}


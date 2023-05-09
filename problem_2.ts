type PersonType = {
	name: string;
	age: number;
};

const FilterPersonByAge = (all_person: PersonType[]): PersonType[] => {
	return all_person.filter((item) => item.age >= 18);
};

FilterPersonByAge([{ name: "Ab", age: 19 }]);


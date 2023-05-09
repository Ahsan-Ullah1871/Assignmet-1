const GenericReverseArray = <T>(...params: T[]): T[] => {
	return params.reverse();
};

//example
let resp = GenericReverseArray("Hello", "World");
console.log(resp);

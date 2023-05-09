const GenericReverseArray = <T>(...params: T[]): T[] => {
	return params.reverse();
};

GenericReverseArray("Hello", "World");

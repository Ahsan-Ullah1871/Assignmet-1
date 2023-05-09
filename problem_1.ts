const LogFunction = (param1: string, param2: number = 3): void => {
	for (let index: number = 0; index < param2; index++) {
		console.log(param1);
	}
};

LogFunction("I love my country", 10);

const TypeChecker = (param: unknown): void => {
	if (typeof param === "string") {
		console.log(param);
	} else {
		console.log("Error: this is not string type data");
	}
};


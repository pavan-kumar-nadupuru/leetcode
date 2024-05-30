function fizzBuzz(n: number): string[] {
	const answer: string[] = [];
	for (let i = 1; i <= n; i++) {
		let toRet = "";
		if (i % 3 === 0) {
			toRet += "Fizz";
		}
		if (i % 5 === 0) {
			toRet += "Buzz";
		}
		if (i % 3 !== 0 && i % 5 !== 0) {
			toRet += i.toString();
		}
		answer.push(toRet);
	}
	return answer;
}

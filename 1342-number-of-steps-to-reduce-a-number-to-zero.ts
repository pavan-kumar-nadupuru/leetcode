function numberOfSteps(num: number): number {
	let ans = 0;
	let stairs = num;
	while (stairs > 0) {
		ans += 1;
		stairs = stairs % 2 === 0 ? stairs / 2 : stairs - 1;
	}
	return ans;
}

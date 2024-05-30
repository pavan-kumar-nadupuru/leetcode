function runningSum(nums: number[]): number[] {
	const ans: number[] = [];
	let cur = 0;
	for (const n of nums) {
		cur += n;
		ans.push(cur);
	}
	return ans;
}

function maximumWealth(accounts: number[][]): number {
	const amount = accounts.map((a) => {
		return a.reduce((p, c) => {
			return p + c;
		}, 0);
	});
	return Math.max(...amount);
}

function canConstruct(ransomNote: string, magazine: string): boolean {
	const m = {};
	for (const s of magazine) {
		if (s in m) {
			m[s] += 1;
		} else {
			m[s] = 1;
		}
	}
	for (const s of ransomNote) {
		if (s in m && m[s] > 0) {
			m[s] -= 1;
		} else {
			return false;
		}
	}
	return true;
}

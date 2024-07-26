/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const isDivisible = (l) => {
        if(str1.length%l != 0 || str2.length%l != 0)
            return false
        const smaller = str1.length < str2.length ? str1 : str2;
        const check = smaller.slice(0, l);
        let t1 = check;
        let t2 = check;
        while(true){
            if(t1.length < str1.length){
                t1 += check
            }
            if(t2.length < str2.length){
                t2 += check
            }
            if(t1.length >= str1.length && t2.length >= str2.length){
                break;
            }
        }
        if(t1 == str1 && t2 == str2)
            return check;
        return false;
    }
    let s1l = str1.length;
    let s2l = str2.length;
    let small = Math.min(s1l, s2l);
    for(let i = small; i > 0; i--){
        let isPos = isDivisible(i);
        if(isPos)
            return isPos;
    }
    return "";
};

console.log(gcdOfStrings("asdf", "asdfasdf"))

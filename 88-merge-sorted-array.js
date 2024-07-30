/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let l = 0;
    let r = 0;
    const nArr = [];
    while(l<m && r<n){
        if(nums1[l]<nums2[r]){
            l++;
        } else {
            nums1.splice(l, 0, nums2[r]);
            m++;
            r++;
            nums1.pop();
        }
    }
    while(false && l<m){
        nArr.push(nums1[l]);
        l++;
    }
    while(r<m){
        nums1.splice(l,0,nums2[r]);
        r++;
        m++;
        nums1.pop();
    }


    console.log(nums1);
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))

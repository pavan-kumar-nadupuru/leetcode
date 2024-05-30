//  Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function middleNode(head: ListNode | null): ListNode | null {
    let t:ListNode | null = head;
    let h:ListNode | null = head;
    while(t?.next && h?.next?.next){
        t = t?.next;
        h = h?.next?.next
    }
    if(h?.next && t?.next) return t?.next
    return t
}

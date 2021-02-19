/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var l3Head = new ListNode(0);
    var l3 = l3Head;

    while( l1 || l2 ){
        var val1 = l1 ? l1.val : 0;
        var val2 = l2 ? l2.val : 0;

        var total = val1 + val2 + carry;  
        var lastDigit = total % 10; 
        carry = Math.floor(total / 10);

        l3.next = new ListNode(lastDigit);
        l3 = l3.next;

        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }

    if(carry){
        l3.next = new ListNode(carry);
    }

    return l3Head.next;
    
};



function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


function traverseLikedList(head){
    while(head){
        console.log(head.val);
        head = head.next;
    }
}


var l1 =  new ListNode( 2, new ListNode( 4, new ListNode(3) ) );
var l2 =  new ListNode( 5, new ListNode( 6, new ListNode(4) ) );

var l3 = addTwoNumbers(l1, l2);
traverseLikedList(l3);
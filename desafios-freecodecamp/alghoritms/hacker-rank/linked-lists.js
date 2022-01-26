function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){

    this.removeDuplicates=function(head){        
        const numbers = [];                
        const display = node => {            
            const notPrinted = numbers.indexOf(node.data) === -1;
            if(notPrinted) {                
                numbers.push(node.data)
            }else{
                const changedNode = node.next !== null ? node.next.data : null;
                node.data = changedNode;
            }  
            if (node.next !== null){
                display(node.next);
            }
        }
        display(head);
        console.log(numbers.join(" "), head);

    }

	this.insert=function(head,data){
        var p=new Node(data);
        if(head==null){
            head=p;
        }
        else if(head.next==null){
            head.next=p;
        }
        else{
            var start=head;
            while(start.next!=null){
                start=start.next;
            }
            start.next=p;
        }
        return head;
        
    };

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}
function main(){
    //var T=[2,2,2,3];
    //var T=[1,2,2,3,3,4];
    var T=[2,3,3,4,6];
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T.length;i++){
        var data=T[i];
        head=mylist.insert(head,data);
    }
    head=mylist.removeDuplicates(head);
    mylist.display(head);
}		

main();
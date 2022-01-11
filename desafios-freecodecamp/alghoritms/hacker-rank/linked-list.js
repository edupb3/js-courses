


function Node(data){
    this.data=data;
    this.next=null;
}

function Solution(){

	this.insert=function(head,data){
        if(head === null){
            return new Node(data);
        }
        else if(head.next === null){
            head.next = new Node(data);
        }
        else{
            this.insert(head.next,data);
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
    //var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    // for(i=0;i<T;i++){
    //     var data=parseInt(readLine());
    //     head=mylist.insert(head,data);
    // }
    var data=[1,5,3,8];
    for(i=0;i<data.length;i++){
        head=mylist.insert(head,data[i]);
    }
    mylist.display(head);
}		
main();
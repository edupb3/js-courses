function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Altere apenas o código abaixo desta linha
    this.enqueue = function(item){  
      if (this.collection.length === 0){
        this.collection.unshift(item);
      }else{
        const result = this.collection;      
        const t = (el) => {
          if (item[1] < el[1]){
            result.unshift(item)
          } 
          return el
        }
        const exists = this.collection.some(el => el === item)
        if (!exists) result.push(item)/
        this.collection.map(t)
        return result;
          
        // const result = this.collection.reduce((acc, el) => {        
        //   console.log(acc, el)
        //   acc.unshift(item[1] < el[1] ? item : el)
        //   return acc
        // })
        
        //return result;
      }    
    };
    this.dequeue = function(){
      return this.collection.shift()[0]    
    };
    this.size = function(){
      return this.collection.length;
    };
    this.front = function(){
      return this.collection[0][0];
    };
    this.isEmpty = function(){
      return this.collection.length === 0;
    };
    // Altere apenas o código acima desta linha
  }
  let q = new PriorityQueue();
  q.enqueue(['human', 1]);
  q.enqueue(['cat', 2]);
  q.enqueue(['bug', 3]);
  q.enqueue(['ant', 2]); 
  //q.dequeue();
  //console.log(q.front())
  q.printCollection()
  
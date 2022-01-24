/**The height of a binary search tree is the number of edges between the tree's root and its furthest leaf. You are given a pointer, , pointing to the root of a binary search tree. Complete the getHeight function provided in your editor so that it returns the height of the binary search tree */

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; 

// Start of function BinarySearchTree
(function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);            
            return this.root;
        }        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };

    
    this.levelOrder = function(root) {                
        
        const printData = data => console.log(data);
        
        const printNode = arr => {
            const nodes = [];
            for(el of arr){
                if (el !== null){
                    printData(el.data)
                    nodes.push(el.left);
                    nodes.push(el.right);
                }
            }            
            nodes.length !== 0 ? printNode(nodes) : null;
        }

        const level = [];
        level.push(root);
        printNode(level);

	}; 
    
    // Start of function getHeight
    this.getHeight = function(root) {

        if(!root) {
            return -1;
        }
        let leftDepth = this.getHeight(root.left);
        let rightDepth = this.getHeight(root.right);
            
        return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;       

    }

    //const elements = [3, 5, 2, 1, 4, 6, 7];
    //const elements = [3, 5, 4, 7, 2, 1];
    const elements = [20,50,35,44,9,15,62,11,13] // => 20 9 50 15 35 62 11 44 13
    let root = elements.reduce((acc,el) => this.insert(acc, el ), null)
    //console.log(this.getHeight(root));
    this.levelOrder(root);
}) ()



    

/*
				20	
		9				50
			15		35		62
		11		
			44
		13
*/
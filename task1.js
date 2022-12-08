

function Box(width,height,numOfBooks) {
    this.width = width;
    this.height = height;
    this.numOfBooks= numOfBooks;
}

function Book(Id,Name,writerName,numOfPages){
   this.Id=Id;
   this.Name=Name;
   this.writerName=writerName;
   this.numOfPages=numOfPages;
}



Box.prototype.valueOf = function(){
    var sum = 0 ;
    for(var i=0 ; i<this.numOfBooks.length;i++)
    {
        sum = sum + this.numOfBooks[i].numOfPages;
    }
    return sum;
}

Box.prototype.area = function(){
    var boxArea = this.width * this.height ;
    return boxArea ; 
}

var book1 = new Book(1,"Crime and Punishment","destovisky",300);
var book2 = new Book(2,"The man in the brown suit","Agath Christe",300);
var arrOfBooks = [book1,book2];

var box1 = new Box(10,10,arrOfBooks);

console.log(box1.area());
console.log(box1.valueOf());
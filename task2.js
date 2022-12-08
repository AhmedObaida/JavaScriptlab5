

function Point3D(x=0,y=0,z=0){
    this.x=x;
    this.y=y;
    this.z=z;
}

Point3D.prototype.print3DPoint= function(){
    console.log("3DPoint: "  +this.x+"," +this.y+","+this.z);
}


Point3D.prototype.calculateDistance= function(p2){
    distance=Math.sqrt((p2-this.x)^2+(p2-this.y)^2+(p2-this.z)^2);
    return distance;
}
var myPoints1 =new Point3D(3,4,5);

myPoints1.print3DPoint();

console.log(myPoints1.calculateDistance);





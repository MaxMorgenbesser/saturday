var mySqrt = function(x) {
    i=0
    for (let y=0; y<=x; y++){
        if (y*y===x){
            return y
        }
    }
    while (Math.round(i*i) !=x){
        i+=.1
    }
    return Math.floor(i)
};
console.log(mySqrt(10231023910293))

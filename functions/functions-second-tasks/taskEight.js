function convToArray(str){
    var output=[];
    for(var i=0; i< str.length; i++){
        output+= str[i]+ "," + " ";

    }
    return output;
}
console.log(convToArray("random"));
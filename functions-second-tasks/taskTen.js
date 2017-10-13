function space(word, separator) {
    var array= [];
    for (var i = 0; i < word.length; i++) {
        if (typeof word === "string") {

            var c = word[i];
            array [i] = c;
        
        }
            if (array[i] === " ") {

                array[i] = separator;
 
            }


        }

        return array;

    
}
console.log(space("My name is", "+"));
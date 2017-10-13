function convert(array) {
    
    var num = [];

    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "string") {

            var c = parseInt(array[i]);
             
            num[i] = c;

        } else {

            num[i] = NaN;
        }

    }

    return num;
}

console.log(convert(["3", "56", "8", "blabla"]));
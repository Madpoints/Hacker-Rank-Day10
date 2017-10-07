process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var binary = [];
    var remainder;
    var count = 0;
    var result = 0;
    
    while(n > 0) {
        remainder = Math.ceil(n) % 2; 
        n--
        n = n/2;
        binary.unshift(remainder);
    }
    
    for(var i = 0; i < binary.length; i++) {
        if(binary[i] === 1){
            count++;
            if(count > result) {
                result = count
            }
        } else {
            count = 0;    
        }
    }
    console.log(result);
}
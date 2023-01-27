let fs = require('fs');

const patch = (file1, output) =>{

    let f1Lines = fs.readFileSync(file1, "utf-8").split('\n')
    let outputLines = fs.readFileSync(output, "utf-8").split('\n')

    let file2 = "";

    let line = 0;

    for(let i=0; i < outputLines.length; i++){
        if(outputLines[i][0] === '+'){
            file2 += outputLines[i].slice(2) + "\n";
        }else if(outputLines[i][0] === '-'){
            line++
        }else{
            file2 += `${f1Lines[line]} \n`
            line++
        }
    }

    fs.writeFile('file2.txt', file2, err => {
        if (err) throw err;
        console.log('ouput saved in file2.txt')
    })

}

//command Line
if(process.argv.length ===4 ){
    patch(process.argv[2], process.argv[3])
    console.log("Output is Saved in file2.txt")
}else{
    console.log("Wrong Syntax \n. Usage: node patch.js file1.txt output.txt");
    process.exit();
}
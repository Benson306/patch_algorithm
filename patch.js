let fs = require('fs'); //file system is required to read the two files

const patch = (file1, output) =>{

    //read contents of the files line by line
    let f1Lines = fs.readFileSync(file1, "utf-8").split('\n')
    let outputLines = fs.readFileSync(output, "utf-8").split('\n')

    let file2 = ""; //output file

    let line = 0;

    //Loop through the diff File lines to check where a line was removed or added.

    for(let i=0; i < outputLines.length; i++){
        if(outputLines[i].length === 0){ //check if its an empty line.

        }else{
            if(outputLines[i][0] === '+'){
                file2 += outputLines[i].slice(2) + "\n";
            }else if(outputLines[i][0] === '-'){
                line++
            }else{
                file2 += `${f1Lines[line]} \n`
                line++
            }
        }
        
    }

    //save result in file2.txt
    fs.writeFile('file2.txt', file2, err => {
        if (err) throw err;
        console.log('Output saved in file2.txt')
    })

}

//command Line
if(process.argv.length === 4 ){
    patch(process.argv[2], process.argv[3])
    console.log("Output is Saved in file2.txt")
}else{
    console.log("Wrong Syntax \n. Usage: node patch.js file1.txt output.txt");
    process.exit();
}
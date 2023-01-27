# Patch (UNIX Command) Algorithm with Javascript

This algorithm takes the difference of two files which has been generated using the [diff](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/diff.html) command in UNIX and one of the files to generate the other file that was used in the diff command. It emulates the [patch](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/patch.html) command/utility in UNIX.

For example, diff command can used to find the differences between file1.txt and file2.txt and the result is saved in output.txt. This algorithm can then be used with file1.txt and output.txt to generate file2.txt.

## Installation

The package manager [npm](https://www.npmjs.com) will be used install.

## Prerequisites
Ensure you have [node.js](https://nodejs.org/en/download) installed on your PC.

Ensure [npm](https://www.npmjs.com/package/npm) is installed. If not installed, run:
```python
npm i npm
```

## How to install
```bash
#clone the project
git clone https://github.com/Benson306/patch_algorithm

#Get into project directory
cd patch_algorithm

#install the requirements
npm install
```

## Usage

```python
#run the program
node patch.js file1.txt output.txt 

# file1.txt is one of the files used in the diff command 
# output.txt is the result of the diff command

# The algorithm takes file1.txt and output.txt to generate file2.txt.
# A file is created called file2.txt which is the result of the algorithm
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
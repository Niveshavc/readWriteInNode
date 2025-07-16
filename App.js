const fs=require('fs')
fs.writeFileSync('textSync.txt','iam writing a new file')
console.log('File written sucessfully')


const data=fs.readFileSync('textSync.txt',{encoding:'utf-8'})
console.log('SuccesFully read the file',data)
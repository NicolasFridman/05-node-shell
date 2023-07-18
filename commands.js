const fs = require('fs');

module.exports = {
  pwd: ()=>{process.stdout.write(process.argv[1])},
  date: ()=>{
    let fecha = new Date()
    process.stdout.write(fecha.toString())
  },
  ls: ()=>{
    fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write('\nprompt > ');
  });},
  echo: (str)=> process.stdout.write(str + "\n"),
  cat: (str)=>{
    let arr = str.split(" ");
    arr.forEach((file)=>{
      fs.readFile(file, (err, data)=>{
      if (err) throw err;
      process.stdout.write(data.toString() + "\n");
    })})
    setTimeout(()=> process.stdout.write('\nprompt > '), 10);
  },
  head: (str)=>{
    let arrPath = str.split(" ");
    let num;
    let path;
    if(arrPath.length >= 2){
      num = arrPath[0];
      path = arrPath[1];
    }else{
      num = 10;
      path = arrPath[0];
    }
    fs.readFile(path, (err, data)=>{
      if (err) throw err;
      let dataString = data.toString();
      let lines = dataString.split('\n').slice(0, num);
      let result = lines.join('\n');
      process.stdout.write(result + "\n");
    })
    setTimeout(()=> process.stdout.write('\nprompt > '), 10);
  },
  tail: (str)=>{
      let arrPath = str.split(" ");
      let num;
      let path;
      if(arrPath.length >= 2){
        num = arrPath[0];
        path = arrPath[1];
      }else{
        num = 10;
        path = arrPath[0];
      }
      fs.readFile(path, (err, data)=>{
        if (err) throw err;
        let dataString = data.toString();
        let arrData = dataString.split('\n');
        let lines = arrData.slice(-num);
        let result = lines.join('\n');
        process.stdout.write(result + "\n");
      })
      setTimeout(()=> process.stdout.write('\nprompt > '), 10);
  },
  sort: (fileName)=>{  //Orden lexicografico, como se comportan las mayusuculas
    fs.readFile(fileName, (err, data)=>{
      if (err) throw err;
      let dataStr=data.toString()
      let dataSplit=dataStr.split("\n")
      let dataSorted=dataSplit.sort()
      let dataJoin=dataSorted.join("\n")

      process.stdout.write(dataJoin + "\n");
    })
    setTimeout(()=> process.stdout.write('\nprompt > '), 10);
  },

  wc: (fileName)=>{
    fs.readFile(fileName, (err, data)=>{
      if (err) throw err;
      let dataStr=data.toString()
      let dataSplit=dataStr.split("\n")

      process.stdout.write(dataSplit.length.toString());
    })
    setTimeout(()=> process.stdout.write('\nprompt > '), 10);
  },

  uniq: (fileName)=>{
    fs.readFile(fileName, (err, data)=>{
      if (err) throw err;
      let dataStr=data.toString()
      let dataSplit=dataStr.split("\n")
      let dataSorted=dataSplit.sort()
      let filteredFile=dataSorted.filter((line,i,arr)=>line!=arr[i+1])
      let dataJoin=filteredFile.join("\n")


      process.stdout.write(dataJoin + "\n");
    })
    setTimeout(()=> process.stdout.write('\nprompt > '), 10);
  },

  curl: (dir)=>{
    const request = require('request');

    request(dir, function (err, response, body) {
      if (err) throw err;
    console.log('statusCode:', response && response.statusCode); 
    process.stdout.write(body + "\n");
    })
    setTimeout(()=> process.stdout.write('\nprompt > '), 1000);
  },
}

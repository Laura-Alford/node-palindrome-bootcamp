const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')



function checkWord (word) {
  return word.split('').reverse().join('')
}

function wordCheck (word) {
  return word === checkWord
}
const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });

} else if (page === '/api') {



  checkWord(params['word']) 

  const resultToJson = {

      result: checkWord(params['word']),

      reversedWord: wordCheck(params['word'])
  }



  res.writeHead(200, {'Content-Type' : 'application/json'});

  //{result: false}

  res.write(JSON.stringify(resultToJson)); 

  //{"result": "false"}



  res.end()

} else if (page === '/css/style.css') {

  fs.readFile('css/style.css', function(err, data) {

      res.write(data);
      res.end();
  });

} else if (page === '/css/normalize.css') {

  fs.readFile('css/normalize.css', function(err, data) {

      res.write(data);
      res.end();
  });

} else if (page === '/img/letters.jpeg') {

  fs.readFile('pic/bg.png', function(err, data) {

      res.write(data);
      res.end();

  });

} else if (page === '/js/main.js') {

  fs.readFile('js/main.js', function(err, data) {

      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();

  });

} else {

  figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
}

//   else if (page == '/api') {
//     if('student' in params){
//       if(params['student']== 'leon'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         let pallidrome =''
//         let pallidromeBack = word.split('').reverse().join('')
//           if (pallidrome=== pallidromeBack) {
//             answer = 'Congrats, the word you have provided is a pallidrome'
//           } else {
//             answer = 'Sorry, this word in not a palindrome.'
//           } const objToJson = {
//             finalanswer: answer
//           }
//         }
//         res.end(JSON.stringify(objToJson));
//       };
//     }
//   else if (page == '/css/style.css'){
//     fs.readFile('css/style.css', function(err, data) {
//       res.write(data);
//       res.end();
//     });
//   }else if (page == '/js/main.js'){
//     fs.readFile('js/main.js', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/javascript'});
//       res.write(data);
//       res.end();
//     });
//   }else{
//     figlet('404!!', function(err, data) {
//       if (err) {
//           console.log('Something went wrong...');
//           console.dir(err);
//           return;
//       }
//       res.write(data);
//       res.end();
//     });
//   }
});

server.listen(8000);

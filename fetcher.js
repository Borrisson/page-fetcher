const fs = require('fs');
const request = require('request');
const [fileFetch, fileStore] = process.argv.slice(2, 4);
const promptQuestion = require('./promptQuestion');
const done = require('./done');


const writeFileAsync = function(fileFetch, fileStore, callback) {
  request(fileFetch, (error, response, body) => {
    if (!error && !fs.existsSync(fileStore)) {
      fs.writeFile(fileStore, body, (error) => {
        error ? callback() : callback(fs.statSync(fileStore).size, fileStore);
      });
    } else if (fs.existsSync(fileStore)) {
      promptQuestion(() => {
        fs.writeFile(fileStore, body, (error) => {
          error ? callback() : callback(fs.statSync(fileStore).size, fileStore);
        });
      });
    } else {
      console.log(`${error.code} for ${error.hostname}`);
    }
  });
};

writeFileAsync(fileFetch, fileStore, done);


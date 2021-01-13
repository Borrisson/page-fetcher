const readline = require('readline');
const promptQuestion = function(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('The file already exists. Overwrite?(y/n)', (answer) => {
    if (answer.toLowerCase() === 'y') {
      callback();
      rl.close();
    } else if (answer.toLowerCase() === 'n') {
      console.log("Your original file has not been overwritten");
      rl.close();
    } else {
      answer = "\r";
      promptQuestion();
    }
  });
};

module.exports = promptQuestion;
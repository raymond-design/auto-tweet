const inquirer = require('inquirer');

module.exports = {
  askTweet: () => {
    return inquirer.prompt(
      [
        {
        type: 'input',
        name: 'Tweet',
        message: 'Enter Tweet Text:',
        validate: function(value) {
            if (value.length) {
                return true;
            } else {
                return 'Tweet cannot be empty';
            }
          }
        }
      ]
    )
  }
}
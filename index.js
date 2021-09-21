const commander = require('commander');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer');

const tweet = require('./lib/tweet');
const client = require('./lib/create_client').getClient();

//init
commander
	.command('init')
	.description('Initialize Twitter Client')
	.action(() => {
		clear();
		console.log(
			chalk.white(
				figlet.textSync('Twitter CLI', { horizontalLayout: 'full' })
			)
		);
});

commander
	.command('enter_text')
	.description('Enter Tweet Text')
	.action(async () => {
    try {
      text=await inquirer.askTweet();
    
      tweet.updateTweet(text);
      console.log(chalk.green('Good To Go!'));
    } catch (error) {
      console.log(error);
    }
	});

commander
	.command('post_tweet')
	.description('Post Newly Created Tweet')
	.action(async() => {
try {
  client.tweets.statusesUpdate({
    status: tweet.getTweet
  }).then (res => {
    console.log("complete", res)
  }).catch(err => {
    console.error(err, client)
  });
} catch (error) {
  console.log(error)
}
    
	});
	
commander.parse(process.argv);

if (!commander.args.length) {
	commander.help();
}
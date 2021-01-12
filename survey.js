const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  name : '',
  activity : '',
  music : '',
  meal : '',
  food : '',
  sport : '',
  superPower : ''
}
rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  questions.name = answer;
  rl.question('What\'s an activity you like doing?', (answer) => {
    questions.activity = answer;
    rl.question('What do you listen to while doing that?', (answer) => {
      questions.music = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        questions.meal = answer;
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          questions.food = answer;
          rl.question('Which sport is your absolute favourite?', (answer) => {
            questions.sport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              questions.superPower = answer;
              rl.close();
              console.log(`${questions.name} loves listening to ${questions.music} while ${questions.activity}, devouring ${questions.food} for ${questions.meal}, prefers ${questions.sport} over any other sport, and is amazing at ${questions.superPower}.`)
            })
          })
        })
      })
    })
  })
});




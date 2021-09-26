const today = new Date();
const user = 'Travis'; //change this to your name :)

//random number generator function
const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num.length);
};

//three sources of held within an object
const infiniteWisdom = {
    dailyQuestion: ['When was the last time you tried something new?', 'What gets you excited about life?',
    'Do you ask enough questions or do you settle for what you know?', 'Who do you love and what are you doing about it?',
    'What can you do today that you were not capable of a year ago?', 'What can you do today that you were not capable of a year ago?',
    'What is the difference between living and existing?', 'What does your joy look like today?', 'If not now, then when?',
    'Are you holding onto something that you need to let go of?', 'When you are 80-years-old, what will matter to you the most?',
    'When is it time to stop calculating risk and rewards and just do what you know is right?', 'How old would you be if you didn’t know how old you are?',
    'What makes you smile?', 'When it’s all said and done, will you have said more than you’ve done?', 'Which is worse, failing or never trying?',
    'What’s something you know you do differently than most people?', 'What are you most grateful for?', 'What do you want most?',
    'If we learn from our mistakes, why are we always so afraid to make a mistake?'],

    dailyGoalIdea: ['Take a ‘me’ day.', 'Take a walk after lunch or dinner.', 'Drink tea instead of coffee/sode today.', 'Limit your screen time after work.', 
    'Immerse yourself in family.', 'Start a journal. If you already have one, put an entry in it today.', 'Take time to meditate today',
    'Maybe today would be a good day to stay offline.', 'Get your exercise in today!', 'Eat your veggies today.', 'Do some yoga!', 'Focus on drinking water today.',
    'Try an early bed time tonight.', 'Explore two new places today.', 'Learn something new.', 'Today is a good day to challenge yourself!',
    'Do a little personal maintenance, such as a nice shave or cleaning out your closet', 'Give to a good cause.', 'Make a donation.', 
    'Get started on one thing you\'ve been putting off', 'Declutter your life today.', 'Reach out to someone you haven\'t talked to in a long time.',
    'Volunteer for something you believe in!', 'Make your wife and kids number 1 today!'],
    
    dailyPowerStatement: ['Knowing is not enough; we must apply. Willing is not enough; we must do.', 'Do you want to know who you are? Don’t ask. Act! Action will delineate and define you.',
    'The path to success is to take massive, determined actions.', 'He who is not courageous enough to take risks will accomplish nothing in life.',
    'You can have anything you want if you want it badly enough. You can be anything you want to be, do anything you set out to accomplish if you hold to that desire with singleness of purpose.',
    'Here I am . . . wanting to accomplish something and completely forgetting it must all end—that there is such a thing as death.',
    'Ambition is the path to success. Persistence is the vehicle you arrive in.', 'Ambition is enthusiasm with a purpose.', 'A man and woman\'s worth is no greater than their ambitions.', 
    'Believe it can be done. When you believe something can be done, really believe, your mind will find the ways to do it. Believing a solution paves the way to solution.',
    'Be brave to stand for what you believe in even if you stand alone.',
    'Believing in yourself is not for you; it\'s for every person who has touched your life in a significant way and for every person your life will touch the same way five minutes from now, or five centuries from now.',
    'Clarity precedes success.', 'A lack of clarity could put the brakes on any journey to success.', 'Clarity affords focus',
    'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.',
    'The key to life is accepting challenges. Once someone stops doing this, he’s dead.', 'I don’t run away from a challenge because I am afraid. Instead, I run towards it because the only way to escape fear is to trample it beneath your foot.',
    'Perseverance is the hard work you do after you get tired of doing the hard work you already did.', 'Perseverance is failing 19 times and succeeding the 20th.',
    'No one succeeds without effort . . . Those who succeed owe their success to perseverance.', 'Practice does not make perfect. Only perfect practice makes perfect.',
    'Everything is practice.', 'An ounce of practice is worth more than tons of preaching.']
}

const dailyMessage = []; //store the daily messages

for(let message in infiniteWisdom) {
    dailyMessage.push(infiniteWisdom[message][generateRandomNumber(infiniteWisdom[message])])
}

//formatted message for ~./bashrc
const formattedMessage = `YOUR DAILY MOTIVATION\n=====================\nThink about this: ${dailyMessage[0]}\nPossible goal: ${dailyMessage[1]}\nPOWER STATEMENT: ${dailyMessage[2]}\n`;

//statements to greet you dependent upon the time of day.
if(today.getHours() < 12) {
    console.log(`Good Morning ${user}!\n\n${formattedMessage}`);
}
else if(today.getHours() >= 12 && today.getHours() <= 16) {
    console.log(`Good Afternoon ${user}!\n\n${formattedMessage}`);
}
else {
    console.log(`Good Evening ${user}!\n\n${formattedMessage}`);
}

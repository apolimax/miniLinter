let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');
console.log(storyWords.length);

let betterWords;
for (let i = 0; i < unnecessaryWords.length; i++) {
  betterWords = storyWords.filter((word) => {
    return word !== unnecessaryWords[i];
  });
}
console.log(betterWords.length);
let countReally = 0;
let countVery = 0;
let countBasically = 0;
storyWords.forEach((word) => {
  if (word === 'really') {
    countReally++;
  }
  if (word === 'very') {
    countVery++;
  }
  if (word === 'basically') {
    countBasically++;
  }
});
console.log(countReally, countVery, countBasically);
let countSentence = 0;
betterWords.forEach((word) => {
  if ((word.includes('.')) || (word.includes('!'))) {
    countSentence++;
  }
});
console.log(countSentence);

const logItems = () => {
  console.log('The word count ' + storyWords.length);
  console.log('The sentence count ' + countSentence);
  console.log('The number of times \'really\' appeared ' + countReally);
  console.log('The number of times \'very\' appeared ' + countVery);
  console.log('The number of times \'basically\' appeared ' + countBasically);
}

logItems();
console.log(betterWords.join(' '));
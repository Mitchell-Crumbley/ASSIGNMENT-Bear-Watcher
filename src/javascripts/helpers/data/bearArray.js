import river from '../../components/river';

const bears = [
  {
    name: 'Dusty',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/71/2010-kodiak-bear-1.jpg',
    fishCaught: [''],
    missedFish: [''],
  },

  {
    name: 'Chicago',
    imageUrl: 'https://www.mystateline.com/wp-content/uploads/sites/17/2015/04/Story_1962211_ver1.0-2.jpg?w=690',
    fishCaught: [''],
    missedFish: [''],
  },

  {
    name: 'Baloo',
    imageUrl: 'https://disneynews.us/wp-content/uploads/2019/11/baloo-bear-the-jungle-book-disney.jpg',
    fishCaught: [''],
    missedFish: [''],
  },

  {
    name: 'Bear',
    imageUrl: 'http://images4.wikia.nocookie.net/__cb20081101233914/muppet/images/b/bc/Bearsmell.jpg',
    fishCaught: [''],
    missedFish: [''],
  }
];

const fishButtons = (e) => {
  const button = e.target.className;
  const index = e.target.id;
  const time = new Date();

  // Casey walked a few of us through this. You can target the specific button on the card using if else statements.

  if (e.target.type === 'button' && button.includes('missed')) {
    bears[index].missedFish.unshift(time);
    river(bears);
  } else if (e.target.type === 'button' && button.includes('caught')) {
    bears[index].fishCaught.unshift(time);
    river(bears);
  }
};

export { bears, fishButtons };

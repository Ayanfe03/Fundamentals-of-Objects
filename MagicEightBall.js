console.log('Will rain fall today?');

const answer = Math.floor(Math.random() * 8)

switch (answer) {
  case 0:
    console.log('It is likely to');
    break;
    
  case 1:
    console.log('It will fall today');
    break;
  
  case 2:
    console.log('I\'m not sure');
    break;

  case 3:
    console.log('There\'s a one percent chance');
    break;

  case 4:
    console.log('It will not fall today');
    break;

  case 5:
    console.log('Prediction hazy, come back later');
    break;

  case 6:
    console.log('Come back for answer');
    break;

  case 7:
    console.log('If the cat lady comes to town');
    break;

  default:
    console.log('What do you think?');
}

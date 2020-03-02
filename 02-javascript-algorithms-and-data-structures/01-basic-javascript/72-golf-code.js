var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  var play;
  if (strokes === 1){
    play = "Hole-in-one!";
  } else if (par - 2 >= strokes){
    play = "Eagle";
  } else if (par - 1 === strokes ){
    play = "Birdie";
  } else if (par === strokes){
    play = "Par";
  } else if (par + 1 === strokes){
    play = "Bogey";
  } else if (par + 2 === strokes){
    play = "Double Bogey"
  } else {
    play = "Go Home!";
  }

  return play;
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

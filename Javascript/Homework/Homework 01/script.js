//Zodiac Signs Switch

function zodiacSignsSwitch(year) 
{
    let b = (year - 4) % 12;

    switch (b){
            case 0:
              return "Rat";
              break;
            case 1:
              return "Ox";
              break;
            case 2:
               return "Tiger";
              break;
            case 3:
              return "Rabbit";
              break;
            case 4:
              return "Dragon";
              break;
            case 5:
              return "Snake";
              break;
            case 6:
              return "Goat";
              break;
            case 7:
              return "Monkey";
              break;
            case 8:
              return "Horse";
              break;
            case 9:
              return "Rooster";
              break;
            case 10:
              return "Dog";
              break;
            case 11:
                return "Pig";
                break;
            default:
                return 'Invalid';  
        }
}

console.log("Your Zodiac Sign is an " + zodiacSignsSwitch(1997));

//Largest number from three

//input some numbers right here
let num = [80, 70, 50];

function highestNumberOfThree(x,y,z) {
    if(x >= y && x >= z){
      return x;
    } else if ( y >= x && y >= z){
        return y;
    }
    else if ( z >= x && z >= y){
      return z;
    } else {
        return 'Invalid Inputs'
    }
}
let largestNum = highestNumberOfThree(num[0],num[1],num[2]);
console.log(`Out of all three numbers ${num[0]}, ${num[1]} and ${num[2]} the largest is ${largestNum}!`);

//Smallest number from three
function smallestNumberOfThree(x,y,z) {
  if(x <= y && x <= z){
    return x;
  } else if ( y <= x && y <= z){
      return y;
  }
  else if ( z <= x && z <= y){
    return z;
  } else {
      return 'Invalid Inputs'
  }
}

let smallestNum = smallestNumberOfThree(num[0], num[1], num[2]);
console.log(`Out of all three numbers ${num[0]}, ${num[1]} and ${num[2]} the smallest is ${smallestNum}!`);
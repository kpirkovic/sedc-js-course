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

console.log(zodiacSignsSwitch(1997));
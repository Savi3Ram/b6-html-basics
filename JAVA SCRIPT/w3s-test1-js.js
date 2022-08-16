
/*HOME WORK*/
/* 1. Write a function that counts the number of characters in a string. The method should return the number
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var len = txt.length;
console.log("The txt lenghth is " +len);
*/
function retStringCounts(str1)
{
    return str1.length;
}
console.log ("Homework-1. Returning the length of the string:")
console.log (retStringCounts("savithri12121"));

/* 2. Write a function that accepts any two numbers and returns the largest number of the two */

function retMaxNumber(num1,num2)
    {
    return Math.max(Number(num1),Number(num2))
    }
console.log ("Homework-2. Retun the largest number of the two:")
console.log (retMaxNumber(-1,-2));

/*if(Number(num1)>Number(num2))
    {
        console.log("Iam inside the main if condition")
        console.log(num1)
    }
else
{
    console.log("Iam inside the else condition")
    console.log(num2);
}*/

//console.log(Math.round(Number(num1)));

/* 3. Write a function that returns Boolean flag if a number is between 5000 and 9999*/

function retBoolean(z)
    {
        var x = 5000;
        var y = 9999;
        
        if(z >= Number(x) && z <= Number(y))
            {
                console.log("Iam inside the main if condition")
                return true;
            }
        else
        {
            console.log("Iam inside the else condition")
            return false;
        }
    }
    console.log ("Homework-3:returning the boolean flag:")
    console.log(retBoolean(10000))

/*4. write a function that accepts a number and returns the cuberoot of the number */

function fcuberoot(a)
{
    console.log("Homework-4 Find cuberoot of a number:")
    console.log(a * a * a)
}
fcuberoot(8)

/*5- Write a function that converts inches to feet. It should give inches as inout parameters and return value in Feet */

console.log ("Homework-5 Convert Inches to Feet:")
var inches =52;
var feet = inches / 12;
console.log("feet: "+feet);
//console.log (Math.feet(Number(48)));

/*Write a function that converts Degrees to Farenheit */

function cTof(cel) 
{
  var cTemp = cel;
  var celToF = (F = (cel * 9/5) + 32)
  var message = cTemp+'\xB0c is ' + celToF + '\xB0F.';
  console.log("Homework-6 Convert Celcius to Farenheit:");
  console.log(message);
} 
cTof(80);
/*
function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
//cToF(60);
fToC(32);
*/

/*7- Write a program that converts KG to LB and vicevers. 
If the input is 72lb, it should return 32.6587kg. If the input is 52kg, it should return 114.6404lb */

function KGtoLB(nWeight) 
{
  var nKGtoLB = (nWeight * 2.2)
  var message = nKGtoLB;
  console.log("Homework-7 Convert Kilograms to Pounds:");
  console.log(message);
} 
KGtoLB(Math.round(32.6587));

function LBtoKG(nWt) 
{
  var nLBtoKG = (nWt * 0.4535)
  var message = nLBtoKG;
  console.log("Homework-7 Convert Pounds to Kilograms:");
  console.log(message);
} 
LBtoKG(Math.round(52.6587));
console.log('------------------------------------------------------------------');

/*Create a JSON file that has list of at least 10 states in the USA with at least 8 properties */

console.log("HOMEWORK-8 :  10 STATES OF THE USA WITH AT LEAST 8 PROPERTIES")
console.log(        '1 - Properties about Pennsylvania');
let state = 
{
    Nameofthestate: "PENNSYLVANIA",
    Capital : "Harrisburg",
    famoustouristattraction : "Hershey Chocolate Factory",
    areaofthestate:"46,055 sq miles",
    flowerofthestate:"Mountain Laurel",
    animalofthestate:"Ruffed Grouse",
    governorofthestate:"Tom Wolf",
    countynames1 :
    {
     county1:"Bucks",
     county2:"Delaware",
     county3:"Montgomery",
     county4:"Chester",
    },
}
console.log('1. The name of the state:'+state['Nameofthestate']);
console.log('2. The Capital of the state:'+state['Capital']);
console.log('3. Famous tourist attraction:'+state['famoustouristattraction']);
console.log('4. The area of the state :'+state['areaofthestate']);
console.log('5. Flower the state :'+state['flowerofthestate']);
console.log('6. Animal of the state :'+state['animalofthestate']);
console.log('7. The Governor of the state :'+state['governorofthestate']);
console.log('8. The counties of the state of PENNSYLVANIA: '+JSON.stringify(state.countynames1))
console.log('------------------------------------------------------------------');


console.log(        '2 - Properties of the state Indiana')

let state2 = 
{
    state2 : 'INDIANA',
    capital2: 'Indianapolis',
    famoustouristattraction2: 'west beach',
    area2:'36,418 square miles',
    flower2:'Peony',
    animal2: 'no state animal for Indiana',
    governor2 :'Eric Holcomb',

    countynames2:
    {
        county1:"Adams",
        county2:"Allen",
        county3:"Brown",
        county4:"Boone",
    },
}

console.log('1. The name of the state:'+state2['state2']);
console.log('2. The Capital of the state:'+state2['Capital2']);
console.log('3. Famous tourist attraction:'+state2['famoustouristattraction2']);
console.log('4. The area of the state :'+state2['area2']);
console.log('5. Flower the state :'+state2['flower2']);
console.log('6. Animal of the state :'+state2['animal2']);
console.log('7. The Governor of the state :'+state2['governor2']);
console.log('8. The counties of the state of INDIANA: '+JSON.stringify(state2.countynames2));



console.log('------------------------------------------------------------------');

console.log(        '3 - Properties of the state Colorado')

let state3 = 
{
    state3 : 'COLORADO',
    capital3: 'Indianapolis',
    famoustouristattraction3: 'Pikes Peak',
    area3:'104,185 sq miles',
    flower3:'Rocky Mountain Columbine',
    animal3: 'Big Horn',
    governor3 :'Ralph Tingle and Zachary Varon',

    countynames3:
    {
        county1:"Alamosa",
        county2:"Arapahoe",
        county3:"Costilla",
        county4:"Delta",
    },
}

console.log('1. The name of the state:'+state3['state3']);
console.log('2. The Capital of the state:'+state3['Capital3']);
console.log('3. Famous tourist attraction:'+state3['famoustouristattraction3']);
console.log('4. The area of the state :'+state3['area3']);
console.log('5. Flower the state :'+state3['flower3']);
console.log('6. Animal of the state :'+state3['animal3']);
console.log('7. The Governor of the state :'+state3['governor3']);
console.log('8. The counties of the state of COLORADO : '+JSON.stringify(state3.countynames3));
console.log('------------------------------------------------------------------');


console.log(        '4 - Properties of the state Utah')

let state4 = 
{
    state4 : 'UTAH',
    capital4: 'Salt Lake City',
    famoustouristattraction4: 'Zion National Park',
    area4:'84,899 sq miles',
    flower4:'Sego Lily',
    animal4: 'Rocky Mountain Elk',
    governor4 :'Gary Herbert and Spencer Cox',
    county4:
    {
        county1:"Iron",
        county2:"Juab",
        county3:"Kane",
        county4:"Salt Lake",
    },
}

console.log('1. The name of the state:'+state4['state4']);
console.log('2. The Capital of the state:'+state4['Capital4']);
console.log('3. Famous tourist attraction:'+state4['famoustouristattraction4']);
console.log('4. The area of the state :'+state4['area4']);
console.log('5. Flower the state :'+state4['flower4']);
console.log('6. Animal of the state :'+state4['animal4']);
console.log('7. The Governor of the state :'+state4['governor4']);
console.log('8. The counties of the state of COLORADO : '+JSON.stringify(state4.county4));

console.log('------------------------------------------------------------------');


console.log(        '5 - Properties of the state Arizona')

let state5 = 
{
    state5 : 'ARIZONA',
    capitol5: 'PHOENIX',
    famoustouristattraction5: 'Grand Canyon',
    area5:'114,006 square miles',
    flower5:'Saguaro',
    animal5: 'Ring Tail Cat',
    governor5 :'Doug Ducey',
    county5:
    {
        county1:"Yuma",
        county2:"Santa Cruz",
        county3:"Pima",
        county4:"La Paz",
    },
}

console.log('1. The name of the state:'+state5['state5']);
console.log('2. The Capital of the state:'+state5['Capitol5']);
console.log('3. Famous tourist attraction:'+state5['famoustouristattraction5']);
console.log('4. The area of the state :'+state5['area5']);
console.log('5. Flower the state :'+state5['flower5']);
console.log('6. Animal of the state :'+state5['animal5']);
console.log('7. The Governor of the state :'+state5['governor5']);
console.log('8. The counties of the state of COLORADO : '+JSON.stringify(state5.county5));
console.log('------------------------------------------------------------------');

console.log(        '6- Properties of the state NEW YORK ')

let state6 = 
{
    state6 : 'NEW YORK',
    capitol6: 'ALBANY',
    famoustouristattraction6: 'Niagara Falls',
    area6:'54,556 sq miles',
    flower6:'Rose',
    animal6: 'Beaver',
    governor6 :'Kathy Hochul',
    county6:
    {
        county1:"Albany",
        county2:"Allegany",
        county3:"Bronx",
        county4:"Broome",
    },
}

console.log('1. The name of the state:'+state6['state6']);
console.log('2. The Capital of the state:'+state6['Capitol6']);
console.log('3. Famous tourist attraction:'+state6['famoustouristattraction6']);
console.log('4. The area of the state :'+state6['area6']);
console.log('5. Flower the state :'+state6['flower6']);
console.log('6. Animal of the state :'+state6['animal6']);
console.log('7. The Governor of the state :'+state6['governor6']);
console.log('8. The counties of the state of NEW YORK : '+JSON.stringify(state6.county6));
console.log('------------------------------------------------------------------');

console.log(        '7- Properties of the state MINNESOTA')

let state7 = 
{
    state7 : 'MINNESOTA',
    capitol7: 'SAINT PAUL',
    famoustouristattraction7: 'Minnehaha Falls',
    area7:'79,626 sq miles',
    flower7:'Showy Ladies Slipper',
    animal7: 'Common Loon',
    governor7 :'Timothy James Walz',
    county7:
    {
        county1:"Washington",
        county2:"Todd",
        county3:"Swift",
        county4:"Steele",
    },
}

console.log('1. The name of the state:'+state7['state7']);
console.log('2. The Capital of the state:'+state7['Capitol7']);
console.log('3. Famous tourist attraction:'+state7['famoustouristattraction7']);
console.log('4. The area of the state :'+state7['area7']);
console.log('5. Flower the state :'+state7['flower7']);
console.log('6. Animal of the state :'+state7['animal7']);
console.log('7. The Governor of the state :'+state7['governor7']);
console.log('8. The counties of the state of NEW YORK : '+JSON.stringify(state7.county7));
console.log('------------------------------------------------------------------');


console.log(        '  8- Properties of the state WYOMING')

let state8 = 
{
    state8 : 'WYOMING',
    capitol8: 'Cheyenne',
    famoustouristattraction8: 'Yellow stone national park',
    area8:'97,818 sq miles',
    flower8:'Wyoming Indian Paintbrush',
    animal8: 'Buffalo',
    governor8 :'Mark Gordon',
    county8:
    {
        county1:"Bighorn",
        county2:"Campbell",
        county3:"Carbon",
        county4:"Crook",
    },
}

console.log('1. The name of the state:'+state8['state8']);
console.log('2. The Capital of the state:'+state8['Capitol8']);
console.log('3. Famous tourist attraction:'+state8['famoustouristattraction8']);
console.log('4. The area of the state :'+state8['area8']);
console.log('5. Flower the state :'+state8['flower8']);
console.log('6. Animal of the state :'+state8['animal8']);
console.log('7. The Governor of the state :'+state8['governor8']);
console.log('8. The counties of the state of NEW YORK : '+JSON.stringify(state8.county8));
console.log('------------------------------------------------------------------');

console.log ("Homework-9 : Cricket Teams and its players")
console.log("Name of the Cricket team= WORLD CRICKET TEAM")
console.log("Country = INDIA")

let player1=
{
    pName1:'Virat Kohli',
    countryborn1:'India',
    stateborn1:'New Delhi',
    Age1:'33 years',
    position1:'Batsman'

}
console.log('1. The name of the Player:'+player1['pName1']);
console.log('2. Country Born:'+player1['countryborn1']);
console.log('3. State Born:'+player1['stateborn1']);
console.log('4. Age :'+player1['Age1']);
console.log('5. position :'+player1['position1']);
console.log('------------------------------------------------------------------');


console.log("Name of the Cricket team= TEAM NEW ZEALAND")
console.log("Country = NEW ZEALAND")

let player2=
{
    pName2:'Andre Ryan Adams',
    countryborn2:'New Zealand',
    stateborn2:'Auckland',
    Age2:'47 years',
    position2:'Batsman'

}
console.log('1. The name of the Player:'+player2['pName2']);
console.log('2. Country born:'+player2['countryborn2']);
console.log('3. State born:'+player2['stateborn2']);
console.log('4. Age :'+player2['Age2']);
console.log('5. Position :'+player2['position2']);
console.log('------------------------------------------------------------------');


console.log("Name of the Cricket team= TEAM ZIMBABWAE")
console.log("Country = ZIMBABWAE")

let player3=
{
    pName3:'Henry Olonga',
    countryborn3:'New Zealand',
    stateborn3:'Auckland',
    Age3:'47 years',
    position3:'Batsman'

}
console.log('1. The name of the Player:'+player2['pName2']);
console.log('2. Country born:'+player2['countryborn2']);
console.log('3. State born:'+player2['stateborn2']);
console.log('4. Age :'+player2['Age2']);
console.log('5. Position :'+player2['position2']);
console.log('------------------------------------------------------------------');

/*Homework -- 10 Write a function that returns the longest string if two strings are given as input parameters*/
console.log('Homework 10 -- Find the longest string if two strings are given as input parameters..')
function sCompareTwoStrings(str1, str2)
{
    var strLen1 = str1.length;
    var strLen2 = str2.length;
    if (strLen1 >= strLen2)
    {
        console.log("Length of string-1 is longest")
    }
    else
    {
        console.log("Length of string-2 is longest")
    }
}
sCompareTwoStrings("Florida","New Hampshire")
console.log('------------------------------------------------------------------');

/*Homework -- 11 write a function that returns the string of the shortest length if an Array is passed a parameter*/
console.log('Homework -- 11 The string of the shortest length is :')

var arr = ['The United Kingdom of Great Britain and Northern Ireland', 'Democratic Republic of Sao Tome and Principe', 'Federal Democratic Republic of Ethiopia', 'The Former Yugoslav Republic of Macedonia'];
var min = Math.min.apply(Math, arr.map(function(str) { return str.length; }));
console.log(min);
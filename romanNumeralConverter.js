function convertToRoman(num) {

    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
      
      let romStr = "";

      /* For loop iterates through roman object keys starting at M: 1000
         Then calculates 'times' to save how often that given number is divisible 
         by current Object.keys(roman) (eg 333 gives us 3 for C).
         Then 'num' is decreased by 'times' * 100(value of C),
         after which we use the repeat function on the current object key to 
         add 'times' as many keys to the String 'romStr'. The rest goes on for the rest 
         of num. Which after the first go is now 33.     */
      for(let i of Object.keys(roman)) {
         let times = Math.floor(num/roman[i]);
         num-= times*roman[i];
         romStr+= i.repeat(times);
      }
   
   
    return romStr;
   }
   
   console.log(convertToRoman(731));;
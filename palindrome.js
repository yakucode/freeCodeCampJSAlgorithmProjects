function palindrome(str) {
    //create array forward with str modified by replace(), toLowerCase() and split()
    const forward = str.replace(/[^A-Za-z0-9]/ig, "").toLowerCase().split("");
    //copy forward to backward array without reference using spread operator    
    const backward = [... forward];
    //reverse array element order
    backward.reverse();

    console.log(forward);
    console.log(backward);
    let stringForward = forward.join("");
    let stringBackward = backward.join("");
    console.log(stringForward);
    console.log(stringBackward);
    //loop through both arrays at the same time and index looking for mismatched letters
    for (let i = 0; i < forward.length; i++) {
        if(forward[i]!==backward[i]) {
            return false;
        }
        
    }

    //if all letters have been the same so far return true because its a palindrome
    return true;
  }
  
  
  console.log("-------------------------------------------------------");
  console.log(palindrome("ey es"));
  console.log("-------------------------------------------------------");
  console.log(palindrome("RacE car"));
  console.log("-------------------------------------------------------");
  console.log(palindrome("1 eye for of 1 eye."));
  console.log("-------------------------------------------------------");
  console.log(palindrome("0_0 (: /-\ :) 0-0"));
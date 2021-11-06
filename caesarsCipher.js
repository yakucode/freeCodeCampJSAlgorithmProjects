function rot13(str) {
    function calc(number) {
        
        if(number-13 < 65) {
            console.log("current code #:", ((number-65-13)%26)+65)+26;
            return ((number-65-13)%26)+65+26;
        }else{
            
            return ((number-65-13)%25)+65;
        }
    }
    const strArr = str.split("");
    console.log(strArr);
    for (let i = 0; i < strArr.length; i++) {
        if(strArr[i].match(/^[a-zA-Z]/)) {
            strArr[i] = String.fromCharCode(calc(strArr[i].charCodeAt(0)));
            
            console.log(strArr[i]);
        }else{
            console.log(strArr[i]);
        }
        
    }
    return str = strArr.join("");
  }
  
  
  console.log(rot13("SERR PBQR PNZC"));

  //A=65 - Z=90 
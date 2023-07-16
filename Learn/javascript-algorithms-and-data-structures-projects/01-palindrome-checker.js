
function palindrome(str) {
    //Remove non-alphabets and whitespaces
    str = str.toLowerCase().replace(/\W|_/g,"");
   
    // Good luck!
  
    //Function to reverse any string
    function reverse(x){
    return x.split("").reverse().join("");
    }
  
    var str1 = reverse(str);
    var str2 = reverse(str1);
    if(str1==str2)
      {
       return true;
      }
    else
    {return false;
    }  
  
 }

palindrome("eye");

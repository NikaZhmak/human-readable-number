module.exports = function toReadable (number) {
 let toTwenthy = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen',  'eighteen', 'nineteen',]
 
  let tenth = ['','',
             'twenty',
             'thirty',
             'forty',
             'fifty',
             'sixty',
             'seventy',
             'eighty',
             'ninety',]
 
 function numbers(number){
       if(number==0){
     return "zero"
 
 } 
 else if(number<20){
 
             return toTwenthy[number]
          }
 
 
 else if(number<100){
             if(number%10==0){
                return tenth[number/10]
             }
 
       else if(number%10!==0){
             if(number<100){
                   let integerhPart = tenth[Math.trunc(number/10)]
                   let tenthPart = toTwenthy[Math.ceil(((number/10)-Math.trunc(number/10))*10)]
                   let numb = ""
                   return numb +integerhPart+" "+tenthPart}   
 
      } 
             else if(number===100){
                      return "one hundred"
                   }
       }

 else if(number<1000){
 
                   let numberToString = number.toString() 
 
                   let firstDigit = toTwenthy[+numberToString[0]];
                   let secDigit =tenth[+numberToString[1]] ;
                   let therdDigit =toTwenthy[+numberToString[2]] ;
                   return firstDigit +" " + "hundred" +" "+ secDigit+ " "+ therdDigit 
             }   
                 
 else if(number===1000){
    return "one thousand"
 }
 }
    
}

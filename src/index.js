module.exports = function toReadable (number) {
 let toTwenthy = ['','one','two','three','four','five','six','seven','eight','nine','','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen',  'eighteen', 'nineteen',]
 let readable =""
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
        let readable =+"zero"
//  return readable
 
 } 
 else if(number<20){

   let readable =+toTwenthy[number]
//    return readable
              
          }
 
 
 else if(number<100){
             if(number%10==0){
               let readable =+tenth[number/10]
//                return readable
                 
             }
 
       else if(number%10!==0){
             if(number<100){
                   let integerhPart = tenth[Math.trunc(number/10)]
                   let tenthPart = toTwenthy[Math.ceil(((number/10)-Math.trunc(number/10))*10)]

                   let readable =+ +integerhPart+" "+tenthPart
//                return readable
                  //  let numb = ""
                  //  return numb +integerhPart+" "+tenthPart
               }   
 
      } 
             else if(number===100){
               let readable =+ "one hundred"
//                return readable
                       
                   }
       }

 else if(number<1000){
 
                   let numberToString = number.toString() 
 
                   let firstDigit = toTwenthy[+numberToString[0]];
                   let secDigit =tenth[+numberToString[1]] ;
                   let therdDigit =toTwenthy[+numberToString[2]] ;
                   let readable =+  'firstDigit +" " + "hundred" +" "+ secDigit+ " "+ therdDigit' 
//                return readable

                  //  return firstDigit +" " + "hundred" +" "+ secDigit+ " "+ therdDigit 
             }   
                 
 else if(number>=1000){
   let readable =+ "one thousand" 
//                return readable
   //  return "one thousand"
 }
 return readable
 }
}

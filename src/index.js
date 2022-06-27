module.exports = function toReadable (number) {
 let toTwenthy = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen',  'eighteen', 'nineteen',]
 let readabl 
 let hundred = "one hundred"
  let tenth = ['','',
             'twenty',
             'thirty',
             'forty',
             'fifty',
             'sixty',
             'seventy',
             'eighty',
             'ninety',]
 

       if(number==0){
         readabl = toTwenthy[0]

 
 } 
 else if(number>0 && number<20){

    readabl =toTwenthy[number]

              
          }
 
 
 else if(number>19 && number<101){
             if(number%10==0){
                readabl =tenth[number/10]                 
             }
 
       else if(number%10!==0){
             
                   let integerhPart = tenth[Math.trunc(number/10)]
                   let tenthPart = toTwenthy[Math.ceil(((number/10)-Math.trunc(number/10))*10)]
                   return readabl = integerhPart + ' ' + tenthPart
                
                  
 
      } 
             else if(number==100){
                readabl = hundred
                     
                   }
       }

 else if(number>100 ) {
 
                   let numberToString = number.toString() 
 
                   let firstDigit = toTwenthy[+numberToString[0]];
                   let secDigit =tenth[+numberToString[1]] ;
                   let therdDigit =toTwenthy[+numberToString[2]] ;
                   return readabl =  firstDigit + ' ' + 'hundred' + ' ' + secDigit+ ' ' + therdDigit

             }   
                 
    
    return readabl
}

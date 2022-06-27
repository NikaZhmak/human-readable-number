module.exports = function toReadable (number) {
 let toTwenthy = ['','one','two','three','four','five','six','seven','eight','nine','','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen',  'eighteen', 'nineteen',]
 let readabl 
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
         readabl ="zero"

 
 } 
 else if(number<20){

    readabl =toTwenthy[number]

              
          }
 
 
 else if(number<100){
             if(number%10==0){
                readabl =tenth[number/10]                 
             }
 
       else if(number%10!==0){
             if(number){
                   let integerhPart = tenth[Math.trunc(number/10)]
                   let tenthPart = toTwenthy[Math.ceil(((number/10)-Math.trunc(number/10))*10)]

                    readabl = +integerhPart+" "+tenthPart

                 
               }   
 
      } 
             else if(number==100){
                readabl = "one hundred"
                     
                   }
       }

 else if(number>100 ) {
 
                   let numberToString = number.toString() 
 
                   let firstDigit = toTwenthy[+numberToString[0]];
                   let secDigit =tenth[+numberToString[1]] ;
                   let therdDigit =toTwenthy[+numberToString[2]] ;
                    readabl =  'firstDigit +" " + "hundred" +" "+ secDigit+ " "+ therdDigit' 

             }   
                 
 else if(number==1000){
    readabl = "one thousand"}
    
    return readabl
}

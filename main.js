/* code assisted by Samantha Taylor, Mike Reames, and Joe Langston*/
//kata 1//
const mainElement = document.querySelector('main')

const kata1heading = document.createElement('h1')
mainElement.append(kata1heading)
kata1heading.append('Kata 1:')
  
let counter1 = 0
  while (counter1 < 20) {
    counter1 += 1
    kata1heading.append(counter1 + ' ')
  }

//kata 2//
const kata2heading = document.createElement('h1')
mainElement.append(kata2heading)
kata2heading.append('Kata 2:')

let counter2 = 0
while (counter2 <= 20) {
    counter2 += 2
    kata2heading.append(counter2 + ' ')
}

//kata 3//
const kata3heading = document.createElement ('h1')
mainElement.append(kata3heading)
kata3heading.append('Kata 3: ')

let counter3 = 1
while (counter3 <= 20) {
    counter3 += 2
    kata3heading.append(counter3 + ' ')
}

/*kata4*/
const kata4heading = document.createElement ('h1')
mainElement.append(kata4heading)
kata4heading.append('Kata 4: ')

let counter4 = 5
while (counter4 <= 100){
    counter4 += 5
    kata4heading.append(counter4 + (' '))
}

//kata5//
const kata5heading = document.createElement ('h1')
mainElement.append(kata5heading)
kata5heading.append('Kata 5: ')

let counter5 = 1
while (counter5 <= 100) {
    const isSquare = Number.isInteger(Math.sqrt(counter5));
    if (isSquare)
    kata5heading.append(counter5 + ' ')
    counter5 += 1
}

//kata6//
const kata6heading = document.createElement ('h1')
mainElement.append(kata6heading)
kata6heading.append('Kata 6: ')

let counter6 = 20
while (counter6 >= 1){
    kata6heading.append(counter6 + ' ')
    counter6 -= 1
}

//kata7//
const kata7heading = document.createElement ('h1')
mainElement.append(kata7heading)
kata7heading.append('Kata 7: ')

let counter7 = 20
while (counter7 >= 2){
    kata7heading.append(counter7 + ' ')
    counter7 -= 2
}

//kata8//
const kata8heading = document.createElement ('h1')
mainElement.append(kata8heading)
kata8heading.append('Kata 8: ')

let counter8 = 19
while (counter8 >= 1){
    kata8heading.append(counter8 + ' ')
    counter8 -= 2
}

//kata9//
const kata9heading = document.createElement ('h1')
mainElement.append(kata9heading)
kata9heading.append('Kata 9: ')

let counter9 = 100
while (counter9 >= 5){
    kata9heading.append(counter9 + ' ')
    counter9 -= 5
}

/*kata10*/
const kata10heading = document.createElement ('h1')
mainElement.append(kata10heading)
kata10heading.append('Kata 10: ')

let counter10 = 100
while (counter10 >= 1) {
  let isSquare = Number.isInteger(Math.sqrt(counter10));
  if (isSquare) {
      kata10heading.append(counter10 + ', ')
  }
  counter10 -= 1 
}

/*kata 11*/
const kata11heading = document.createElement ('h1')
mainElement.append(kata11heading)
kata11heading.append('Kata 11: ')

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472
]

kata11heading.append(sampleArray + ' ')

/*kata12*/
const kata12heading = document.createElement('h1')
mainElement.append(kata12heading)
kata12heading.append('Kata 12:')

for (let index = 0; index < sampleArray.length; index +=1) {
    let evenArray = []
    if (sampleArray[index] % 2 == 0) {
      evenArray.push(sampleArray[index])}
    else {
      continue
    }
      kata12heading.append(evenArray + ",")
  }

/*kata 13*/
const kata13heading = document.createElement('h1')
mainElement.append(kata13heading)
kata13heading.append('Kata 13:')

for (let index = 0; index < sampleArray.length; index +=1) {
    let oddArray = []
    if (sampleArray[index] % 2 == 0) {
        continue}
    else {
      oddArray.push(sampleArray[index])}
          kata13heading.append(oddArray + ",")
      }
    
 /*kata14*/
 const kata14heading = document.createElement('h1')
 mainElement.append(kata14heading)
 kata14heading.append('Kata 14:')

 for (let index = 0; index < sampleArray.length; index +=1) {
   let squareArray = []
   squareArray = sampleArray[index] * sampleArray[index]
   kata14heading.append(squareArray + ', ')
 }  

 /*kata15*/
 const kata15heading = document.createElement('h1')
 mainElement.append(kata15heading)
 kata15heading.append('Kata 15:')

 let result = 0;
 for (let index = 1; index <= 20; index++) {  
     result += index;
     }
     
     kata15heading.append(result)
 
/*kata16*/
const kata16heading = document.createElement('h1')
mainElement.append(kata16heading)
kata16heading.append('Kata 16: ')

let result2 = 0
for (let index = 0; index < sampleArray.length; index ++) {  
      result2 += sampleArray[index]
} 
    kata16heading.append(result2)


//kata17//
const kata17heading = document.createElement('h1')
mainElement.append(kata17heading)
kata17heading.append('Kata 17: ')

for(let index = 0; index <sampleArray.length; index += 1 ){
    for(let j = index +1; j<sampleArray.length; j+= 1){
       if(sampleArray[index]>sampleArray[j]){
          temp = sampleArray[index];
          sampleArray[index] = sampleArray[j];
          sampleArray[j] = temp;
  
       }}}
kata17heading.append(sampleArray[0])

//kata18//
const kata18heading = document.createElement('h1')
mainElement.append(kata18heading)
kata18heading.append('Kata 18: ')

for(let index = 0; index <sampleArray.length; index += 1 ){
    for(let j = index +1; j<sampleArray.length; j+= 1){
       if(sampleArray[index]<sampleArray[j]){
          temp = sampleArray[index];
          sampleArray[index] = sampleArray[j];
          sampleArray[j] = temp;
  
       }}}
kata18heading.append(sampleArray[0])



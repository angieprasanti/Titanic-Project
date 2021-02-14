var probability = 4
function setup() {

}


function random() {
  const random = Math.floor(Math.random * probability)

  if (random == 1) {
    console.log('survived')
  } else {
    console.log('died')
  }
}
// The Fisher–Yates shuffle. The algorithm effectively puts all the elements into a hat; 
// it continually determines the next element by randomly drawing an element from the hat until no elements remain.

const shuffleArray = array => {
    // create a copy of array to leave the initial array unchanged 
    const arr = Array.from(array);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
  
  const array = [1, 2, 3, 4, 5, 6];
  const shuffledArray = shuffleArray(array);
  console.log('array', array);
  console.log('shuffledArray', shuffledArray);
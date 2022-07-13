const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
random(1,10)
console.log(random(1,10))
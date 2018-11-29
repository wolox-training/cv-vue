// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const refTime = Date.now();
  return new Promise((resolve, reject) => {
    if(time < 1000 ) 
      setTimeout(() => resolve(Date.now() - refTime)
      , time)
    else 
      reject (Error('This time is too much !'))
  })
}

export function asyncDelay() {
  
}

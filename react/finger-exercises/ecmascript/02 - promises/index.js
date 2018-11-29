// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const refTime = Date.now();
  const longTime = 1000;
  return new Promise((resolve, reject) => {
    if(time < longTime ) 
      setTimeout(() => resolve(Date.now() - refTime)
      , time)
    else 
      reject (Error('This time is too much !'))
  })
}

export function asyncDelay(time) {
  return delay(time);
}

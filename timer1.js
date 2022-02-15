
// process.stdout.write('\x07'); // sound

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

let args = process.argv.slice(2);

console.log(args)
for (let i = 0; i < args.length; i++) {
  //  let num = parseInt(args[i])
  if (args[i] === NaN || !args[i]){
    console.log('Erroooor')
    return
  }

  if (args[i] < 0){
    args[i] = args[i+1] 
  
  setTimeout(() => {
    process.stdout.write(`${'\x07'}`)
    
  }, args[i] * 1000);
  }
}

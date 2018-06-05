export function randInt (...args) {
  let start = 0
  let end = args[0]
  if (args.length > 1) {
    start = args[0]
    end = args[1]
  }
  return start + Math.floor(Math.random() * (end - start + 1))
}

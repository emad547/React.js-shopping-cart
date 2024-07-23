const isObjectEmpty = (obj) => {
  for (var x in obj) { return false }
  return true
}

export { isObjectEmpty }
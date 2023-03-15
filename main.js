const str = `
010-1234-56789
thesecon@gamil.com
https://www.omdbapi.com/?apikey=32536e&s=frozen
The quick brown fox umps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)
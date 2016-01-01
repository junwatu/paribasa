#Paribasa API

Only for developer and those who want to be a developer.

```
let paribasa = require('paribasa')
```

##paribasa.get()

This api will return randomize paribasa object

```
console.log(paribasa.get())
{ paribasa: 'Tulung menthung', jawa: 'Ditulungi malah ngrusuhi.' }

```

##paribasa.indexing()

Indexing data manually. Usually you dont need to do this because for the first time use of paribasa search, it will automatically index the json data.

##paribasa.search(word)

This method will return all paribasa that contain the search keyword.
# Paribasa API

Only for developer and those who want to be a developer.

```
let paribasa = require('paribasa')
```

## paribasa.get()

This api will return randomize paribasa object

```
console.log(paribasa.get())
{ paribasa: 'Tulung menthung', jawa: 'Ditulungi malah ngrusuhi.' }

```

## paribasa.search(word)

This method will return all paribasa that contain the search keyword.

> NOTE: Javanese heavily use accented letter so for the keyword with
> accented letter such as 'duwé' versus 'duwe' will have different search result 
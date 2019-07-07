# Paribasa API v3.0.0

Only for developer and those who want to be a developer.

```
let paribasa = require('paribasa')
```
or ES6 Module

```
import * as paribasa from 'paribasa'
```

## `paribasa.getRandomQuote()`

This api will return randomize paribasan `array`

```
console.log(paribasa.getRandomQuote())
[{ paribasa: 'Tulung menthung', jawa: 'Ditulungi malah ngrusuhi.' }]

```

## `paribasa.searchQuote(word)`

This method will return `array` of all paribasa that contain the search keyword.

> NOTE: Javanese heavily use accented letter so for the keyword with
> accented letter such as 'duwé' versus 'duwe' will have different search result 
# Paribasa

> This readme is written in javanese language, for english please read in [README_EN](README_EN.md). 
> Thanks

Aplikasi iki di gawe mbantu ngilingake paribasa jawa seng jumlae wuakeh.


## Carane

Install aplikasi Paribasa iki disek nang komputermu (dianggep sakdurunge ndek komputermu kudu wes terinstall Node.js versi 8 menduwur)

```
$ npm install -g @junwatu/paribasa

```
terus supoyo salah siji paribasa iso metu ndek tampilan terminal misale lek awakmu nggawe OS Linux,

```
$ paribasa
"Wéruh ing grubyug, ora wéruh ing rémbug" - Melu-melu tumindak nanging ora ngérti kang dikarepaké

``` 

Nggawe alat iki awakmu yo iso nggoleki paribasa tekok kata, contone

![nggoleki-paribasa.jpg](nggoleki-paribasa.jpg)


lek gak seneng werno-wernoan, nggaweo pilihan `-n` 

```
$ paribasa -n search wani
```


## API Pustaka v3.0.0
Lek awakmu developer, aplikasi iki iso digawe pisan ndek aplikasimu istilahe **di import**

```
const paribasa = require('paribasa')
// random output
let quote = paribasa.getRandomQuote()
console(quote)

// nggoleki paribasan sing ono kata 'wani'
let query_quote = paribasa.searchQuote('wani')
console.log(query_quote)
```

## Kompatibilitas
> Paribasan API versi 3.0.0 mendhuwur ora kompatibel karo API versi sakdurunge.

Luwih jelase deloken nang berkas [API](API.md) tapi jek bahasa inggris. 

Suwun

## License 

MIT License

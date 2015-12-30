#Paribasa

Paribasa is, you can call it as Javanese quotes. This module can be use as CLI or import the library to your application.

##CLI

Randomize Paribasa

```
$ paribasa
"Ojo mangro mundak kendo" -  Jangan berfikir mendua agar tidak luntur niat dan semangat.
```

Search Paribasa based on word

```
$ paribasa search wani
1. Yen wedi aja wani-wani, yen wani aja wedi-wedi  -  Jadi orang harus tegas, jangan ragu-ragu
2. Mulat salira, hangrasa wani  -  Sebelum bertindak harus tahu diri, dipikir dengan jernih, tidak sembrono, supaya tidak mengecewakan orang lain. Jika merasa mampu maka bertindak, namun jika tidak mampu harus berani mengatakan tidak.
3. Sing sapa wani ngowahi kahanan kang lagi ana, iku dudu sadhengah wong, nanging minangku utusaning Pangeran  -  Bukan setiap orang mampu mengubah keadaan yang ada, kecuali manusia yang menjadi utusan Tuhan.
4. Wani ngalah, luhur wekasane  -  Terkadang mengalah itu lebih baik, untuk kepentingan bersama / Orang yang mau mengalah akan mulia dikemudian hari.
5. Wani silit, wedi rai  -  Ia hanya berani jika orang yang di anggap musuh sedang tidak ada.
6. Durung menang yen durung wani kalah, durung unggul yen durung wani asor, durung gedhe yen durung wani cilik  -  Belum menang kalau belum berani kalah, belum unggul kalau belum berani rendah, belum besar kalau belum berani kecil.
7. Pangeran iku ana ing ngendi papan, aneng sira uga ana Pangeran, nanging aja sira wani ngaku Pangeran  -  Tuhan itu ada di mana-mana, juga ada pada dirimu, tapi jangan berani engkau mengaku dirimu Tuhan.
```

##Library

```
var paribasa = require('paribasa')
// initialize indexing
paribasa.init()
// random output
console.log(paribasa.get())
```

---

##License 

MIT License

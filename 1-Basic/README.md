``
# Basis - Eerste App

## Inleiding

Bij deze opdracht gaan we een eerste Vue JS app maken.

## Opdracht 1 - Vue.js inladen

Om te beginnen heb je Vue js nodig in je project. Dat doe je door de volgende regel te kopieëren te plaatsen in het `index.html`.

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```


Daarna kun je HTML en Javascript (Vue) samen gaan gebruiken.

## Opdracht 2 - App definieren

In `index.html` zie je een `div` element die je een `id` attribuut geeft genaamd __app__. Dit deel van je html wordt bestuurd door Vue JS.

## Opdracht 3 - Input field maken

Maak een input field met type text: (zet dit in het gedeelte van de __app__)
```html
<input type="text" id="input">
```

### Opdracht 4 - Eerste script

Maak daarna een script eronder met de volgende code:

```html

<script>

    let data = {
        message: "Hallo student"
    };

    new Vue(
        {
            el: "#app",
            data: data
        }
    );

</script>
```


### Opdracht 5 - Toon de data

De data in HTML en in JS werken met Vue JS nauw samen. Data binding wordt dit genoemd. Om data aan een element te binden moeten we de volgende code toepassen `v-model="message"`. Dit doen we in het input field dat we al bij opdracht 3 hebben gemaakt.

```html

  <input type="text" id="input" v-model="message">

```

Als je je browser refreshed dat zie je dat het bericht `Hallo student` in het inputfield verscijnen.

### Opdracht 6 - Dynamische data

Je kunt de data van je app uiteraard ook ergens anders tonen, bijvoorbeeld in een paragraaf `<p>`. Probeer maar eens:

```html
<p>De waarde van het inputfield is: {{message}}</p>
```

### Opdracht 7 - Magie!

Type nu eens een ander bericht in je inputfield. Wat zie je gebeuren? Je ziet de paragraaf direct veranderen.

Gefeliciteerd je hebt je eerste Vue Js app gemaakt.
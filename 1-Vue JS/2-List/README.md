``
# List - Lijstjes App

## Inleiding

Bij deze opdracht gaan we een lijstjes app maken

## Opdracht 1 - Vue.js inladen

In het data attribuut van je app kun je zoals je gezien hebt 1 waarde invoeren:

```html
<script>

    new Vue(
        {
            el: "#app",
            data: {
                message: "Hallo student" // in message staat 1 string
            }
        }
    );

</script>
```

### Opdracht 1 - Array gebruiken

Maar je kunt uiteraard ook andere typen invoeren bijvoorbeeld een array van data:

```html
<script>

    new Vue(
        {
            el: "#app",
            data: {
                names: ["Bart", "Michael", "Ayoub", "Tristan"]  // Een array van data
            }
        }
    );

</script>
```

Zet bovenstaande code in `index.html`

## Opdracht 2 - Loopen door array

Je kunt door deze array loopen met Vue JS syntax. Stel we maken een lijstje van deze namen dan hebben we de volgende code nodig: `v-for`, zie hieronder

```html

    <ul>
        <li v-for="name in names">{{name}}</li>
    </ul>

```

Je ziet nu een lijstje met namen in je browser. Controleer dit

### Opdracht 3 - Button maken

Maak een button en zorg ervoor dat deze een methode (functie) van de Vue Instance aanspreekt. De button maak je zo:

<button v-on:click="showAlert">Show Alert</button>

> `v-on:click="showAlert"` is Vue Js syntax om een methode aan te roepen


### Opdracht 4 - Methode aanroepen

De `showAlert()` is een zelfbedachte functie die iets gaat uitvoeren. Om dit te kunnen doen dien je de code van opdracht 1 te verwijderen en te vervangen voor onderstaande code.

```html

<script>

        new Vue(
        {
            el: "#app",
            data: {
                names: ["Bart", "Michael", "Ayoub", "Tristan"]
            },
            methods: {
                showAlert() {
                    alert("Whats up Doc!..")
                }
            }
        }
    );

</script>
```

Je krijgt een alert box te zien met de text. Handig maar we gaan de boel nog een stukje verbouwen:

### Opdracht 5 - Input field aanpassen

Om namen te kunnen toevoegen hebben we een inputfield nodig. Dit inputfield moet met Vue kunnen communiceren. Dit doen we zo (net als bij 1-Basic):"

```html
    <input type="text" id="input" v-model="newName">
```

### Opdracht 6 - Naam toevoegen

Nu willen we natuurlijk geen alert-box zien maar wel een naam aan de lijst kunnen toevoegen. Dit doen we met een methode `addName` (ook weer zelfverzonnen). En we willen nu geen alert-box zien maar een naam toevoegen aan de array van namen. Dat doen we zo: `this.names.push(this.newName)`. Zie onderstaande wijzigen:

```html
<script>

        new Vue(
        {
            el: "#app",
            data: {
                newName: "", //Deze regel is ook toegevoegd!!
                names: ["Bart", "Michael", "Ayoub", "Tristan"]
            },
            methods: {
                addName() {
                    this.names.push(this.newName)
                    this.newName = '';
                }
            }

        }
    );

</script>
```

### Opdracht 7 - Button aanpassen

De button uit opdracht 3 spreekt nu nog de `showAlert`-methode aan. Maar we moeten natuurlijk de methode `addName` aanspreken. Pas dit aan:


```html
 <button v-on:click="addName">Add Name</button>
```

Probeer maar uit!

Oh en als je het echt wilt weten: je hebt nu met __Vue Event Listeners__ gewerkt.

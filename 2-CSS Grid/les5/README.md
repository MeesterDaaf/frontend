# Frontend Keuzedeel

## CSS GRID - les 5

### Introductie

Je bent nu bekend met Grid Line, Grid Cell, Grid Area. We gaan even inzoomen op de Grid Lines (Grid Lijnen). Je kunt deze lijnen namelijk hele specifieke namen geven.

### CSS GRID Line Naming

Stel je maakt een grid:

```html
<div class="container">
  <div class="items item-1">1</div>
  <div class="items item-2">2</div>
  <div class="items item-3">3</div>
</div>

<style>
  .container{
    display: grid;
    grid-template-columns: [begin-eerste kolom] 1fr [begin-tweede-kolom] 5fr [begin-derde-kolom] 1fr [eind-derde-kolom];
  }
</style>
```

Je hebt de kolom-lijnen nu namen gegeven. Hoe kun je ze gebruiken? Nou probeer maar eens de volgende code uit!

```css
  .item-1 {
    grid-column-start: begin-tweede-kolom;
}

.item-3 {
    grid-column-start: begin-eerste-kolom;
    grid-column-end: begin-tweede-kolom;
    grid-row-start: 1;
}
```

De `<div class="item item-1">` begint pas bij `grid-column-line` 2. Maar nu gebruiken we niet het cijfer 2 maar de naam `begin-tweede-kolom`. Dit kan handig zijn als je met een bepaald design werkt en naamgeving expliciet (heel duidelijk) moet zijn.

Uiteraard kun je deze techniek ook toepassen op de rijen

Dan voeg je bijvoorbeeld onderstaande code toe aan je container.

```css
.container{
  grid-template-rows{
    [begin-rij-1] 50px [tweede-rij] 100px [oke-nog-eentje-dan]auto[laatste-rij]
  }
}
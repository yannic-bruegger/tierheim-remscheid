<script>
	import AnimalCard from "../../components/animal-card.svelte";
  const animals = [
    { name: 'Agust', type: 'Katze', gender: 'male',   description1: 'Hauskatze', description2: '12 Jahre', image: 'https://source.unsplash.com/random/?dog,cat,rabbit,budgerigar&sig=1' },
    { name: 'Agust', type: 'Katze', gender: 'female', description1: 'Windhund', description2: '', image: 'https://source.unsplash.com/random/?dog,cat,rabbit,budgerigar&sig=2' },
    { name: 'Agust', type: 'Katze', gender: '',       description1: 'Hauskatze', description2: '', image: 'https://source.unsplash.com/random/?dog,cat,rabbit,budgerigar&sig=3' },
    { name: 'Agust', type: 'Katze', gender: 'male',   description1: 'Hauskatze', description2: '', image: 'https://source.unsplash.com/random/?dog,cat,rabbit,budgerigar&sig=4' },
    { name: 'Agust', type: 'Katze', gender: 'male',   description1: 'Hauskatze', description2: '', image: 'https://source.unsplash.com/random/?dog,cat,rabbit,budgerigar&sig=5' },
    { name: 'Agust', type: 'Katze', gender: 'male',   description1: 'Huaskatze', description2: '', image: 'https://source.unsplash.com/random/?dog,cat,rabbit,budgerigar&sig=6' },
    { name: 'Agust', type: 'Katze', gender: 'male',   description1: 'Huaskatze', description2: '', image: 'https://source.unsplash.com/random/?dog,cat,rabbit,budgerigar&sig=7' },
    { name: 'Agust', type: 'Katze', gender: 'male',   description1: 'Huaskatze', description2: '', image: 'https://source.unsplash.com/random/?dog,cat,rabbit,budgerigar&sig=8' },
    { name: 'Agust', type: 'Katze', gender: 'male',   description1: 'Huaskatze', description2: '', image: 'https://source.unsplash.com/random/?dog,cat,rabbit,budgerigar&sig=9' },
    { name: 'Agust', type: 'Katze', gender: 'male',   description1: 'Huaskatze', description2: '', image: 'https://source.unsplash.com/random/?dog,cat,rabbit,budgerigar&sig=0' },
  ];
</script>
<div class="page-contents">
  <h1>Unsere Tiere</h1>
  <p>Hier findest du alle unsere Gäste, die ein neues zu Hause suchen. Solltest du schon genauer wissen was du suchst, kannst du mithilfe der Filter deine Suche erleichtern.</p>
  <div class="animal-types">
    <input type="radio" value="Katzen" name="animal" data-content="🐈">
    <input type="radio" value="Alle" name="animal" data-content="">
    <input type="radio" value="Hunde" name="animal" data-content="🐕">
    <input type="radio" value="Vögel" name="animal" data-content="🐦">
    <input type="radio" value="Kaninchen" name="animal" data-content="🐇">
  </div>
  <div class="animal-types">
    <input type="radio" value="Katzen" name="animal" data-content="♂️" title="männlich">
    <input type="radio" value="Alle" name="animal" data-content="♀️" title="weiblich">
  </div>
  <div class="results">
    {#each animals as animal }
    <AnimalCard {...animal}></AnimalCard>
    {/each}
  </div>
</div>

<style>
  .results {
    display: grid;
    display: grid;
    grid-template-rows: repeat(auto-fill);
    grid-row-gap: .5em;
    grid-column-gap: 1em;
  }

  .page-contents {
    container-type: inline-size;
    background-color: var(--bg-colour);
    padding: var(--spacing-m) var(--relative-spacing);
    display: flex;
    flex-direction: column;
    gap: 1em;
    min-height: calc(100vh - var(--footer-height) - var(--header-height));
  }

  fieldset {
    display: flex;
    padding: var(--spacing-s);
  }

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    all: unset;
    width: 3rem;
    height: 3rem;
    background-color: var(--accent-background);
    border-radius: 4px;
    font-size: 2rem;

    &:checked {
      border: 1px solid var(--accent);
    }

    &::after {
      content: attr(data-content);
    }
  }

  @container (min-width: 520px) {
    .results {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @container (min-width: 600px) {
    .results {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @container (min-width: 800px) {
    .results {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @container (min-width: 1000px) {
    .results {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  @container (min-width: 1200px) {
    .results {
      grid-template-columns: repeat(6, 1fr);
    }
  }




</style>
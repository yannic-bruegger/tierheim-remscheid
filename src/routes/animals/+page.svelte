<script lang="ts">
	import { base } from "$app/paths";
  import AnimalCard from "../../components/animal-card.svelte";
  type Animal = {
    name: string,
    type: string,
    gender: 'male'|'female'|'',
    description1: string,
    description2: string,
    image: string
  }

  const animals: Array<Animal> = [
    { name: 'Agust', type: 'Katze', gender: 'male',   description1: 'Hauskatze', description2: '12 Jahre', image: 'https://source.unsplash.com/random/?cat&sig=1' },
    { name: 'Agust', type: 'Katze', gender: 'female', description1: 'Hauskatze', description2: '', image: 'https://source.unsplash.com/random/?cat&sig=2' },
    { name: 'Agust', type: 'Katze', gender: '',       description1: 'Hauskatze', description2: '', image: 'https://source.unsplash.com/random/?cat&sig=3' },
    { name: 'Agust', type: 'Katze', gender: 'male',   description1: 'Hauskatze', description2: '', image: 'https://source.unsplash.com/random/?cat&sig=4' },
    { name: 'Agust', type: 'Katze', gender: 'male',   description1: 'Hauskatze', description2: '', image: 'https://source.unsplash.com/random/?cat&sig=5' },
    { name: 'Agust', type: 'Katze', gender: 'male',   description1: 'Hauskatze', description2: '12 Jahre', image: 'https://source.unsplash.com/random/?cat&sig=6' },
    { name: 'Agust', type: 'Katze', gender: 'female', description1: 'Hauskatze', description2: '', image: 'https://source.unsplash.com/random/?cat&sig=7' },
    { name: 'Agust', type: 'Katze', gender: '',       description1: 'Hauskatze', description2: '', image: 'https://source.unsplash.com/random/?cat&sig=8' },
    { name: 'Agust', type: 'Katze', gender: 'male',   description1: 'Hauskatze', description2: '', image: 'https://source.unsplash.com/random/?cat&sig=9' },
    { name: 'Agust', type: 'Hund', gender: 'male',   description1: 'Husky', description2: '', image: 'https://source.unsplash.com/random/?dog&sig=1' },
    { name: 'Agust', type: 'Hund', gender: 'male',   description1: 'Labrador', description2: '', image: 'https://source.unsplash.com/random/?dog&sig=2' },
    { name: 'Agust', type: 'Hund', gender: 'male',   description1: 'Hund', description2: '', image: 'https://source.unsplash.com/random/?dog&sig=3' },
    { name: 'Agust', type: 'Hund', gender: 'male',   description1: 'Hund', description2: '', image: 'https://source.unsplash.com/random/?dog&sig=4' },
    { name: 'Agust', type: 'Hund', gender: 'male',   description1: 'Hund', description2: '', image: 'https://source.unsplash.com/random/?dog&sig=5' },
    { name: 'Agust', type: 'Schildkröte', gender: 'male',   description1: 'Schildkröte', description2: '', image: 'https://source.unsplash.com/random/?tutle&sig=1' },
    { name: 'Agust', type: 'Meerschweinchen', gender: 'male',   description1: 'Meerschweinchen', description2: '', image: 'https://source.unsplash.com/random/?guineapig&sig=1' },
    { name: 'Agust', type: 'Vogel', gender: 'male',   description1: 'Sittich', description2: '', image: 'https://source.unsplash.com/random/?Sittich&sig=1' },
    { name: 'Agust', type: 'Vogel', gender: 'male',   description1: 'Sittich', description2: '', image: 'https://source.unsplash.com/random/?Sittich&sig=2' },
    { name: 'Agust', type: 'Vogel', gender: 'male',   description1: 'Sittich', description2: '', image: 'https://source.unsplash.com/random/?Sittich&sig=3' },
  ];
  let filterType: string;

  $: filteredResult = () => {
    return animals.filter((animal) => {
      if(filterType === '') return true;
      return animal.type === filterType;
    });
  }
</script>
<div class="page-contents">
  <h1>Unsere <select bind:value="{filterType}">
    <option selected value="">Tiere</option>
    <option value="Katze">Katzen</option>
    <option value="Hund">Hunde</option>
    <option value="Vogel">Vögel</option>
    <option>Kaninchen</option>
  </select></h1>
  <p>Hier findest du alle unsere Gäste, die ein neues zu Hause suchen. Solltest du schon genauer wissen was du suchst, kannst du mithilfe der Filter deine Suche erleichtern.</p>
  <!-- <div class="animal-types">
    <input type="radio" value="Katzen" name="animal" data-content="🐈">
    <input type="radio" value="Alle" name="animal" data-content="">
    <input type="radio" value="Hunde" name="animal" data-content="🐕">
    <input type="radio" value="Vögel" name="animal" data-content="🐦">
    <input type="radio" value="Kaninchen" name="animal" data-content="🐇">
  </div> -->
  <!-- <div class="animal-types">
    <input type="radio" value="Katzen" name="animal" data-content="♂️" title="männlich">
    <input type="radio" value="Alle" name="animal" data-content="♀️" title="weiblich">
  </div> -->
  <div class="results">
    {#each filteredResult() as animal }
    <a href="{base}/animal"><AnimalCard {...animal}></AnimalCard></a>
    {/each}
  </div>
</div>

<style>
  .results {
    display: grid;
    display: grid;
    grid-template-rows: repeat(auto-fill);
    grid-row-gap: 1em;
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

  select {
    all: unset;
    background-color: var(--accent-background);
    border-radius: 5px;
    padding: var(--spacing-xs) var(--spacing-s);
    color: var(--accent);
    width: fit-content;

    &::after {
      font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
      user-select: none;
      content: 'chevron_down';
      position: absolute;
      right: 1em;
    }
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
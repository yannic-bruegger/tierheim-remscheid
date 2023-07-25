<script>

	import AnimalCard from "./animal-card.svelte";
	import NewsPost from "./news-post.svelte";

  const animals = [
    { name: 'August', type: 'Katze', gender: 'male',   description1: 'Hauskatze', description2: '12 Jahre', image: 'https://source.unsplash.com/random/?dog,cat,rabbit&sig=1' },
    { name: 'Jens', type: 'Katze', gender: 'female', description1: 'Windhund', description2: '', image: 'https://source.unsplash.com/random/?dog,cat,rabbit&sig=2' },
    { name: 'Nina', type: 'Katze', gender: 'male',   description1: 'Hauskatze', description2: '', image: 'https://source.unsplash.com/random/?dog,cat,rabbit&sig=3' },
  ];
</script>
<div class="container">

  <div class="summary">
    <main>
      <div class="section">
        <h1 class="accent">Unsere Neuzugänge</h1>
        <div class="animal-cards">
          {#each animals as animal }
            <a href="animal"><AnimalCard {...animal}></AnimalCard></a>
          {/each}
        </div>
      </div>
      <div class="section">
        <h1 class="accent">Neuigkeiten</h1>
        <div class="news">
          <a href="article"><NewsPost></NewsPost></a>
          <a href="article"><NewsPost></NewsPost></a>
          <a href="article"><NewsPost></NewsPost></a>
          <a href="article"><NewsPost></NewsPost></a>
        </div>
      </div>
    </main>
    <aside>
      <div class="section">
        <h1 class="accent">Infos</h1>
        <p>
ÖFFNUNGSZEITEN
Das Tierheim öffnet:
Mi. 14.00 - 16.00 Uhr
Sa. 14.00 - 16.00 Uhr
So. 14.00 - 16.00 Uhr

GASSIGEHZEITEN
Die Hunde müssen jeweils 11.30 bzw. 15.30 Uhr zurück im Heim sein

Montag und Freitag:
08.15 - 11.30 Uhr
14.00 - 15.30 Uhr

Dienstag, Mittwoch, Donnerstag, Samstag, Sonntag:
08.15 - 11.30 Uhr
        </p>
      </div>
    </aside>
  </div>
</div>

<style>
.container {
  container-type: inline-size;
}

.summary {
  background-color: var(--bg-colour);
  padding: var(--spacing-m) var(--relative-spacing);
  display: flex;
  flex-direction: row;
  gap: 1em;

  & main {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-m);
    width: 66.6%;

    & .animal-cards {
      display: flex;
      gap: 1em;
      overflow-x: auto;
      scroll-snap-type: x mandatory;

      & AnimalCard {
        scroll-snap-align: start;
      }
    }
  }
}

aside {
  font-size: unset;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  width: 33.3%;

  & p {
    white-space: pre-wrap;
  }

  & h1 {
    font-size: 2em;
  }
}

@container (max-width: 1000px) {
  .summary {
    flex-direction: column;
  }

  .summary aside, .summary main {
    width: 100%;
  }
}

.section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
}

.news {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s)
}
</style>
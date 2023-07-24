<script>

	import AnimalCard from "./animal-card.svelte";
	import NewsPost from "./news-post.svelte";

</script>
<div class="container">

  <div class="summary">
    <main>
      <div class="section">
        <h1>Unsere Neuzugänge</h1>
        <div class="animal-cards">
          <AnimalCard></AnimalCard>
          <AnimalCard></AnimalCard>
          <AnimalCard></AnimalCard>
        </div>
      </div>
      <div class="section">
        <h1>Neuigkeiten</h1>
        <div class="news">
          <NewsPost></NewsPost>
          <NewsPost></NewsPost>
          <NewsPost></NewsPost>
          <NewsPost></NewsPost>
        </div>
      </div>
    </main>
    <aside>
      <div class="section">
        <h1>Infos</h1>
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
    }
  }

  & aside {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-m);
    width: 33.3%;

    & p {
      white-space: pre-wrap;
    }
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
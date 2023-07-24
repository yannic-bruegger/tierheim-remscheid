<script>

	import AnimalCard from "./animal-card.svelte";
	import NewsPost from "./news-post.svelte";

</script>
<div class="summary">
  <main>
    <h1>Unsere Neuzugänge</h1>
    <div class="animal-cards">
      <AnimalCard></AnimalCard>
      <AnimalCard></AnimalCard>
      <AnimalCard></AnimalCard>
    </div>
    <h1>Aktuelles</h1>
    <NewsPost></NewsPost>
    <NewsPost></NewsPost>
    <NewsPost></NewsPost>
    <NewsPost></NewsPost>
  </main>
  <aside>
    <h1>Test</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit enim, iusto sapiente doloribus laudantium hic officia ipsam neque, illum dolorum ullam quasi possimus. Illo veniam ab quidem. Facilis, ducimus.</p>
  </aside>
</div>

<style>
.summary {
  background-color: var(--bg-colour);
  padding: var(--spacing-m) var(--relative-spacing);
  display: flex;
  flex-direction: row;
  gap: 1em;
  & main {
    display: flex;
    flex-direction: column;
    width: 66.6%;

    & .animal-cards {
      display: flex;
      gap: 1em;
    }
  }

  & aside {
    display: flex;
    flex-direction: column;
    width: 33.3%;
  }
}
</style>
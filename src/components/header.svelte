<script lang="ts">
  import { base } from '$app/paths';
</script>

<header>
  <span><a href="/tierheim-remscheid"><b>Tierheim Remscheid</b></a></span>
  <div class="spacer"></div>
  <nav>
    <ul>
      <li><a href="{base}/">Home</a></li>
      <li>
        Das Sind Wir
        <ul>
          <li><a href="{base}/article">Das Team</a></li>
          <li><a href="{base}/article">Der Vorstand</a></li>
          <li><a href="{base}/article">Der Verein</a></li>
        </ul>
      </li>
      <li>
        Gut zu wissen
        <ul>
          <li><a href="{base}/article">Tier gefunden - was tun?</a></li>
          <li><a href="{base}/article">Tier vermisst - was tun?</a></li>
          <li><a href="{base}/article">Hilfe für Wildtieren</a></li>
          <li><a href="{base}/article">Katzenschutzverordnung</a></li>
          <li><a href="{base}/article">Tierärztlicher Notdienst</a></li>
          <li><a href="{base}/article">Sachkunde für große Hunde</a></li>
          <li><a href="{base}/article">Sachspende bei geschlossenem Tierheim</a></li>
        </ul>
      </li>
      <li>
        Unsere Tiere
        <ul>
          <li><a href="{base}/animals">Hunde</a></li>
          <li><a href="{base}/animals">Katzen</a></li>
          <li><a href="{base}/animals">Kaninchen</a></li>
          <li><a href="{base}/animals">Vögel</a></li>
          <li><a href="{base}/animals">Andere Mitbewohner</a></li>
          <hr>
          <li><a href="/article">Notfälle</a></li>
          <li><a href="/article">Regenbogenbrücke</a></li>
        </ul>
      </li>
      <li>
        Aktuelles
        <ul>
          <li><a href="{base}/article">Tierheimzeitung</a></li>
          <li><a href="{base}/article">Danksagungen</a></li>
          <li><a href="{base}/article">Kaninchen</a></li>
          <li><a href="{base}/article">Vögel</a></li>
          <li><a href="{base}/article">Andere Mitbewohner</a></li>
        </ul>
      </li>
      <li><a href="{base}/article">Arbeitgeber</a></li>
    </ul>
  </nav>
</header>


<style>
header {
  height: var(--header-height);
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--inverted-base);
  padding: var(--spacing-s) var(--relative-spacing);
}

nav {
  height: 100%;
}

nav > ul {
  height: 100%;
  display: flex;
  gap: 2em;
  list-style: none;
  position: relative;

  & li {
    height: 100%;
    white-space: nowrap;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & li ul {
    gap: 2em;
    list-style: none;
    position: relative;
    display: none;
    color: var(--font-base);
    position: absolute;
    top: 0;
    margin-top: var(--spacing-m);
    flex-direction: column;
    background-color: var(--bg-colour);
    padding: var(--spacing-s);
  }
  & li:hover > ul {
    display: flex;

    &:hover {
      display: flex;
    }
  }
}
</style>
<script lang="ts">
  import { base } from '$app/paths';
</script>

<header>
  <span><b>Tierheim Remscheid</b></span>
  <div class="spacer"></div>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li>
        Das Sind Wir
        <ul>
          <li><a href="{base}/">Das Team</a></li>
          <li><a href="{base}/">Der Vorstand</a></li>
          <li><a href="{base}/">Der Verein</a></li>
        </ul>
      </li>
      <li>
        Gut zu wissen
        <ul>
          <li><a href="{base}/">Tier gefunden - was tun?</a></li>
          <li><a href="{base}/">Tier vermisst - was tun?</a></li>
          <li><a href="{base}/">Hilfe für Wildtieren</a></li>
          <li><a href="{base}/">Katzenschutzverordnung</a></li>
          <li><a href="{base}/">Tierärztlicher Notdienst</a></li>
          <li><a href="{base}/">Sachkunde für große Hunde</a></li>
          <li><a href="{base}/">Sachspende bei geschlossenem Tierheim</a></li>
        </ul>
      </li>
      <li>
        Unsere Tiere
        <ul>
          <li><a href="{base}/">Hunde</a></li>
          <li><a href="{base}/">Katzen</a></li>
          <li><a href="{base}/">Kaninchen</a></li>
          <li><a href="{base}/">Vögel</a></li>
          <li><a href="{base}/">Andere Mitbewohner</a></li>
          <hr>
          <li><a href="/">Notfälle</a></li>
          <li><a href="/">Regenbogenbrücke</a></li>
        </ul>
      </li>
      <li>
        Aktuelles
        <ul>
          <li><a href="{base}/">Tierheimzeitung</a></li>
          <li><a href="{base}/">Danksagungen</a></li>
          <li><a href="{base}/">Kaninchen</a></li>
          <li><a href="{base}/">Vögel</a></li>
          <li><a href="{base}/">Andere Mitbewohner</a></li>
        </ul>
      </li>
      <li><a href="{base}/">Arbeitgeber</a></li>
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

nav ul {
  display: flex;
  gap: 2em;
  list-style: none;
  position: relative;
  & li {
    height: 100%;
    white-space: nowrap;
    font-weight: 600;
  }
  & li ul {
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
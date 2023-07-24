<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li>
        Das Sind Wir
        <ul>
          <li><a href="/">Das Team</a></li>
          <li><a href="/">Der Vorstand</a></li>
          <li><a href="/">Der Verein</a></li>
        </ul>
      </li>
      <li>
        Gut zu wissen
        <ul>
          <li><a href="/">Tier gefunden - was tun?</a></li>
          <li><a href="/">Tier vermisst - was tun?</a></li>
          <li><a href="/">Hilfe für Wildtieren</a></li>
          <li><a href="/">Katzenschutzverordnung</a></li>
          <li><a href="/">Tierärztlicher Notdienst</a></li>
          <li><a href="/">Sachkunde für große Hunde</a></li>
          <li><a href="/">Sachspende bei geschlossenem Tierheim</a></li>
        </ul>
      </li>
      <li>
        Unsere Tiere
        <ul>
          <li><a href="/">Hunde</a></li>
          <li><a href="/">Katzen</a></li>
          <li><a href="/">Kaninchen</a></li>
          <li><a href="/">Vögel</a></li>
          <li><a href="/">Andere Mitbewohner</a></li>
          <hr>
          <li><a href="/">Notfälle</a></li>
          <li><a href="/">Regenbogenbrücke</a></li>
        </ul>
      </li>
      <li>
        Aktuelles
        <ul>
          <li><a href="">Tierheimzeitung</a></li>
          <li><a href="">Danksagungen</a></li>
          <li><a href="">Kaninchen</a></li>
          <li><a href="">Vögel</a></li>
          <li><a href="">Andere Mitbewohner</a></li>
        </ul>
      </li>
      <li><a href="/">Arbeitgeber</a></li>
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
<script>
	import { base } from "$app/paths";

</script>
<div class="screen">
  <div class="spacer"></div>
  <div class="intro">
    <h1 class="screen-headline">Willkommen auf<br> unserer Website</h1>
    <p class="screen-paragraph">Tierheim Remscheid - Hier einleitender Text.</p>
  </div>
  <div class="calls-to-action">
    <a href="{base}/animals" class="primary-action">Lerne die Tiere kennen</a>
    <a href="{base}/article" class="secondary-action">oder hilf uns mit einer Spende</a>
  </div>
  <div class="spacer"></div>
  <div class="hint">
    <h2>Aktuelles</h2>
    <span class="material-symbols-outlined">
      stat_minus_2
    </span>
  </div>
</div>

<style>
.screen {
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--header-height));
  gap: var(--spacing-m);
  padding: 0 var(--relative-spacing);
  color: var(--inverted-base);
}

.calls-to-action {
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: var(--spacing-xs)
}

.screen-headline {
  font-size: 4rem;
  font-weight: 600;
}

.screen-paragraph {
  font-size: 1.5rem;
}

.hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

a {
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent);
  padding: var(--spacing-s) var(--spacing-m);
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
}

.secondary-action {
  background-color: transparent;
  color: var(--accent);
  backdrop-filter: var(--shadow);
}
</style>
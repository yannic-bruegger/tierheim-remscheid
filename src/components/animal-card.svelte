<div class="card">
  <img src="https://tierheim-remscheid.de/wp-content/uploads/2023/07/IMG-20230721-WA0002.jpg" alt="cat">
  <div class="description">
    <div class="inline">
      <h1>Haddy</h1>
      <span class="gender" title="weiblich"><span class="material-symbols-outlined">
        female
      </span></span>
    </div>
    <div>Hauskatze</div>
    <div>12 Jahre</div>
  </div>
</div>

<style>
  .gender {
    background-color: var(--accent-background);
    color: var(--accent);
    width: 1.3rem;
    height: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    font-size: .5em;

    & .material-symbols-outlined {
      font-size: 2.5em;
    }
  }
  .inline {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    font-size: 1.3rem;
  }
  .card {
    background-color: var(--bg-color-elevated);
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.06);
    min-width: 200px;
    max-width: 15rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  .description {
    padding: 1em;
  }
</style>
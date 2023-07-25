<script lang="ts">
  export let name: string;
  export let gender: 'male'|'female'|'';
  export let description1: string = '';
  export let description2: string = '&nbsp;';
  export let image: string;
  export let type: string;

  const genderTranslations = {
    'male': 'männlich',
    'female': 'weiblich',
    '': 'unbekannt',
  }
</script>

<div class="card">
  <img src="{image}" alt="{type}">
  <div class="description">
    <div class="inline">
      <h1>{name}</h1>
      <span class="gender" title="{genderTranslations[gender]}"><span class="material-symbols-outlined">
        {gender}
      </span></span>
    </div>
    <div>{description1}&nbsp;</div>
    <div>{description2}&nbsp;</div>
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
  }
  
  img {
    height: 13rem;
    width: 13rem;
    object-fit: cover;
    object-position: center center;
  }

  .description {
    padding: 1em;
  }

  div {
    display: block;
  }
</style>
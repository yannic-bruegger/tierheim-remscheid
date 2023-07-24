<script lang="ts">
  import Header from '../components/header.svelte';
  import Footer from '../components/footer.svelte';

  export const prerender = true;
</script>

<Header></Header>
<slot></slot>
<Footer></Footer>
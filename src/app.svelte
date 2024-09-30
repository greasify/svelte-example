<script lang="ts">
import Counter from './counter.svelte'
</script>

<div class="app">
  <h1>Greasify + Svelte</h1>
  <Counter />
</div>

<style>
.app {
  color: #fff;
  background-color: #bd34fe;
}

:global(h1) {
  font-size: 3.2em;
  line-height: 1.1;
}
</style>

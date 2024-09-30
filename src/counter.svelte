<script lang="ts">
let count = 0

function increment() {
  count += 1
}
</script>

<button class="counter" on:click={increment}>
  count is {count}
</button>

<style>
.counter {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  color: #fff;
}
</style>

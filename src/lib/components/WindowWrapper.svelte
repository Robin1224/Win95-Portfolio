<script>
  export let index;
  import { openWindows } from "../stores.js";

  const minimiseWindow = () => {
    openWindows.update((windows) => windows = [...windows, windows[index].visible = false]);
  }
</script>

<section style="--index: {index}; --position-x: {15}; position-y: {15}">
  <div>
    <h2>{$openWindows[index].title}</h2>
    <button on:click={minimiseWindow}>_</button>
  </div>
    <slot></slot>
</section>

<style>
    section {
        position: absolute;
        top: 30px;
        left: 30px;
        background: var(--window-bg);
        border-image: var(--path-border-default-small);
        border-style: solid;
        border-width: 4px;
        border-image-slice: 4;
        border-image-repeat: round;
        z-index: var(--index);
    }
</style>
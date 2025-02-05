<script>
  export let index;
  import { openWindows } from "../stores.js";
</script>

<section>
  <div class="titlebar">
    <div class="titlebar-title">
      <img src={$openWindows[index].icon} alt="Window icon" />
      <h2 class="unselectable bold">{$openWindows[index].title}</h2>
    </div>
    <div class="titlebar-buttons">
      <div class="minimise"></div>
      <div class="maximise"></div>
      <div class="close"></div>
    </div>
  </div>
  <slot></slot>
</section>

<style>
  section {
    margin: 1rem 1rem 0 1rem;
    background: var(--window-bg);
    border-image: var(--path-border-default-small);
    border-style: solid;
    border-width: 4px;
    border-image-slice: 4;
    border-image-repeat: round;
  }

  .titlebar {
    display: flex;
    background-color: var(--window-unfocused);
    margin: 2px;
    height: 1.6em;
    align-items: center;
    justify-content: space-between;
  }

  .titlebar > div {
    display: flex;
    align-items: center;
  }

  .titlebar-title {
    min-width: 10rem;
  }

  img {
    margin-left: 3px;
    height: 80%;
  }

  h2 {
    font-size: 1rem;
    margin-left: 3px;
    /* color: white; */
    --bold-color: #c0c0c0;
  }

  .titlebar-buttons > div {
    background-size: cover;
    width: 1.42rem;
    height: 1.25rem;
    /* transform: translateY(-0.5rem); */
    border: none;
  }

  .minimise {
    background-image: var(--path-button-minimise);
  }

  .maximise {
    background-image: var(--path-button-maximise);
    margin-right: 0.1rem;
  }

  .close {
    background-image: var(--path-button-close);
    margin-right: 0.1rem;
  }
</style>

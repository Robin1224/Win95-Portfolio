<script>
  import startIcon from "$lib/icons/windows.png";
  import TaskbarItem from "./TaskbarItem.svelte";
  import { openWindows } from "$lib/stores.js";
</script>

<div class="taskbar">
  <div class="start-button">
    <img src={startIcon} alt="Start icon" />
    <span class="bold">Start</span>
  </div>
  {#each $openWindows as window, index}
    <TaskbarItem {index} />
  {/each}
</div>

<style>
  .taskbar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3em;
    background: var(--window-bg);
    border-image: var(--path-border-default-small);
    border-top-style: solid;
    border-top-width: 4px;
    border-image-slice: 4;
    border-image-repeat: round;
    display: flex;
    align-items: center;
    padding: 3px;
    padding-right: 0px;
    z-index: 9999;
  }

  .taskbar > div {
    border-image: var(--path-border-taskbar-small);
    border-style: solid;
    border-width: 2px 4px 4px 2px;
    border-image-slice: 2 4 4 2;
    border-image-repeat: round;
    height: 2.4em;
    /* width: 100%; */
    display: flex;
    align-items: center;
    padding: 3px;
    margin-right: 0.3em;
  }

  .taskbar > div > span {
    transform: translateY(0.1rem);
    font-size: 1.3em;
    margin-left: 2px;
    margin-right: 2px;
  }

  img {
    height: 100%;
    margin-right: 3px;
  }
</style>

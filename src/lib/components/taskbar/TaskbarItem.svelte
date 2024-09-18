<script>
  export let index;

  import { openWindows } from "$lib/stores.js";
  import changeFocus from "$lib/ChangeFocus.js";

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="{$openWindows[index].focused ? 'focused' : ''}" on:mousedown={changeFocus(index)}>
  <img src={$openWindows[index].icon} alt="Window icon" />
  <span>{$openWindows[index].title}</span>
</div>

<style>
  div {
    border-image: var(--path-border-taskbar-small);
    border-style: solid;
    border-width: 2px 4px 4px 2px;
    border-image-slice: 2 4 4 2;
    border-image-repeat: round;
    height: 2.4em;
    width: 100%;
    /* max-width: 36rem; */
    display: flex;
    align-items: center;
    padding-right: 5px;
    max-width: 14em;
    margin-right: 0.3em;
  }

  .focused {
    background-color: var(--taskbar-active);
    border-image: var(--path-border-taskbar-active-small);
    border-style: solid;
    border-width: 2px 4px 4px 2px;
    border-image-slice: 2 4 4 2;
    border-image-repeat: round;
  }

  img {
    margin-left: 6px;
    height: 80%;
    margin-right: 3px;
  }

  span {
    transform: translateY(0.1rem);
    font-size: 1.3em;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 2px;
    margin-right: 2px;
  }
</style>

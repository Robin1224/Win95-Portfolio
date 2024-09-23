<script>
  export let index;
  import { openWindows } from "../stores.js";
  import changeFocus from "$lib/ChangeFocus.js";

  export let left = $openWindows[index].position.x;
  export let top = $openWindows[index].position.y;

  let moving = false;

  function onMouseDown() {
    moving = true;
  }

  function onMouseMove(e) {
    if (moving) {
      left += e.movementX;
      top += e.movementY;
    }
  }

  function onMouseUp() {
    openWindows.update((windows) => {
      windows[index].position = { x: left, y: top };
      return windows;
    });
    moving = false;
  }

  const minimiseWindow = () => {
    openWindows.update((windows) => {
      windows[index].visible = false;
      return windows;
    });
  };

  const closeWindow = () => {
    openWindows.update((windows) => {
      windows.splice(index, 1);
      return windows;
    });
  };
</script>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<section
  style="--z-index: {$openWindows[index]
    .zIndex}; --position-x: {top}px; --position-y: {left}px"
  tabindex={index}
  on:mousedown={changeFocus(index)}
>
  <div
    class="titlebar {$openWindows[index].focused ? 'focused' : ''}"
    on:mousedown={onMouseDown}
  >
    <div>
      <img src={$openWindows[index].icon} alt="Window icon" />
      <h2 class="unselectable bold">{$openWindows[index].title}</h2>
    </div>
    <div>
      <button on:click={minimiseWindow}>_</button>
      <button class="close" on:click={closeWindow}></button>
    </div>
  </div>
  <slot></slot>
</section>

<style>
  section {
    position: absolute;
    top: var(--position-x);
    left: var(--position-y);
    background: var(--window-bg);
    border-image: var(--path-border-default-small);
    border-style: solid;
    border-width: 4px;
    border-image-slice: 4;
    border-image-repeat: round;
    z-index: var(--z-index);
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

  .focused {
    background-color: var(--window-titlebar);
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

  .focused h2 {
    --bold-color: white;
  }

  .close {
    background-image: var(--path-button-close);
    background-size: cover;
    width: 1.42rem;
    height: 1.25rem;
    /* transform: translateY(-0.5rem); */
    border: none;
    margin-right: 0.1rem;
  }
</style>

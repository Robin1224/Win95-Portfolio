<script>
  export let index;
  import { openWindows } from "../stores.js";

  export let left = $openWindows[index].position.x;
  export let top = $openWindows[index].position.y;

  let moving = false;

  // function changeFocus() {
  //   openWindows.update((windows) => {
  //     if (index >= 0 && index < windows.length) {
  //       const [window] = windows.splice(index, 1); // Remove the window at the specified index
  //       windows.push(window); // Add the removed window to the end of the array
  //     }
  //     return windows;
  //   });
  // }

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
  style="--index: {index}; --position-x: {`${top}px`}; --position-y: {`${left}px`}"
  tabindex={index}
>
  <div class="window-titlebar" on:mousedown={onMouseDown}>
    <img src={$openWindows[index].icon} alt="Window icon" />
    <h2 class="unselectable bold">{$openWindows[index].title}</h2>
    <button on:click={minimiseWindow}>_</button>
    <button on:click={closeWindow}>x</button>
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
    z-index: var(--index);
    resize: auto;
  }

  section > div {
    display: flex;
    background-color: var(--window-titlebar);
    margin: 2px;
    height: 1.6em;
    align-items: center;
  }

  img {
    margin-left: 3px;
    height: 80%;
  }

  h2 {
    font-size: 1rem;
    margin-left: 3px;
    /* color: white; */
    --bold-color: white;
  }
</style>

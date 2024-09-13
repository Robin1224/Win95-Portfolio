<script>
  import { openWindows } from "../stores.js";
  import WindowWrapper from "./WindowWrapper.svelte";
</script>

<div class="windows-wrapper">
  {#each $openWindows as window, index}
    {#if window.visible}
      {#if window.component}
        <WindowWrapper {index}>
          <svelte:component this={window.component} />
        </WindowWrapper>
      {/if}
    {/if}
  {/each}
</div>

<!-- {(console.log({ $openWindows }), "")} -->
<script>
  import { openWindows } from "../stores.js";
  import WindowWrapper from "./WindowWrapper.svelte";
</script>

{#each $openWindows as window, index}
  {#if window.visible}
    {#if window.component}
      <WindowWrapper {index} >
        <svelte:component this={window.component} />
      </WindowWrapper>
    {/if}
  {/if}
{/each}

{(console.log({ $openWindows }), '')}
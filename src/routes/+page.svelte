<script>
  import "$lib/css/global.css";
  import Taskbar from "$lib/components/taskbar/Taskbar.svelte";
  import { openWindows } from "$lib/stores.js";
  import Windows from "$lib/components/Windows.svelte";
  import MobileWindowWrapper from "../lib/components/MobileWindowWrapper.svelte";
</script>

<div class="mobile">
  <MobileWindowWrapper index={1}>
    <svelte:component this={$openWindows[3].component} />
  </MobileWindowWrapper>
  <MobileWindowWrapper index={0}>
    <svelte:component this={$openWindows[2].component} />
  </MobileWindowWrapper>
  <MobileWindowWrapper index={3}>
    <svelte:component this={$openWindows[0].component} />
  </MobileWindowWrapper>
  <MobileWindowWrapper index={2}>
    <svelte:component this={$openWindows[1].component} />
  </MobileWindowWrapper>
</div>

<div class="desktop">
  <Windows />
  <Taskbar />
</div>

<style>
  div.desktop {
    display: none;
  }

  div.mobile {
    display: block;
    cursor: url("/cursors/arrow.png"), auto;
    overflow: scroll;
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--desktop-bg);
    border-image: var(--path-border-default-small);
    border-style: solid;
    border-width: 4px;
    border-image-slice: 4;
    border-image-repeat: round;
    padding-bottom: 1rem;
  }

  @media screen and (min-width: 678px) {
    div.mobile {
      display: none;
    }

    div.desktop {
      display: block;
      cursor: url("/cursors/arrow.png"), auto;
      overflow: hidden;
      position: relative;
      max-width: 1020px;
      max-height: 660px;
      width: 100%;
      height: 100%;
      background: var(--desktop-bg);
      border-image: var(--path-border-default-small);
      border-style: solid;
      border-width: 4px;
      border-image-slice: 4;
      border-image-repeat: round;
    }
  }
</style>

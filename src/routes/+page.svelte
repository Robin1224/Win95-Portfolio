<script>
  import "$lib/css/global.css";
  import Taskbar from "$lib/components/taskbar/Taskbar.svelte";
  import { openWindows } from "$lib/stores.js";
  import Windows from "$lib/components/Windows.svelte";
</script>

<div>
  <Windows />
  <Taskbar />
</div>

<style>
  div {
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
</style>

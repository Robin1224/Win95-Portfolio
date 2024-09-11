<script>
  export let index;
  import { openWindows } from "$lib/stores.js";
</script>

<div>
  <img src={$openWindows[index].icon} alt="Window icon" />
  <span>{$openWindows[index].title}</span>
</div>
import { writable } from "svelte/store";
import TestWindow from "./components/windows/TestWindow.svelte";
import htmlIcon from "./icons/html.png";

export const openWindows = writable([
  {
    id: 1,
    icon: htmlIcon,
    component: TestWindow,
    title: "Test Window",
    visible: true,
  },
  {
    id: 2,
    icon: htmlIcon,
    component: TestWindow,
    title: "Test Window2",
    visible: true,
  },
]);

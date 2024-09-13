import { writable } from "svelte/store";
import TestWindow from "./components/windows/TestWindow.svelte";
import htmlIcon from "./icons/html.png";
import computerIcon from "./icons/computer.png";
import cdIcon from "./icons/cd.png";
import cmdIcon from "./icons/cmd.png";

export const openWindows = writable([
  {
    id: 1,
    icon: computerIcon,
    component: TestWindow,
    title: "My Computer",
    visible: true,
    position: { x: 100, y: 100 },
    focused: true,
    zIndex: 1,
  },
  {
    id: 2,
    icon: cdIcon,
    component: TestWindow,
    title: "CD Player",
    visible: true,
    position: { x: 130, y: 130 },
    focused: false,
    zIndex: 2,
  },
  {
    id: 3,
    icon: cmdIcon,
    component: TestWindow,
    title: "Test Window3",
    visible: true,
    position: { x: 160, y: 160 },
    focused: false,
    zIndex: 3,
  },
]);

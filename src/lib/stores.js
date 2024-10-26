import { writable } from "svelte/store";

import Portrait from "./components/windows/Portrait.svelte";
import VisiteKaartje from "./components/windows/VisiteKaartje.svelte";

import htmlIcon from "./icons/html.png";
import computerIcon from "./icons/computer.png";
import cdIcon from "./icons/cd.png";
import cmdIcon from "./icons/cmd.png";
import imageIcon from "./icons/image.png";
import notepadIcon from "./icons/notepad.png";

export const openWindows = writable([
  {
    id: 1,
    icon: computerIcon,
    component: Portrait,
    title: "My Computer",
    visible: true,
    position: { x: 100, y: 100 },
    focused: false,
    zIndex: 1,
  },
  {
    id: 2,
    icon: imageIcon,
    component: Portrait,
    title: "Portrait",
    visible: true,
    position: { x: 130, y: 130 },
    focused: false,
    zIndex: 2,
  },
  {
    id: 3,
    icon: notepadIcon,
    component: VisiteKaartje,
    title: "Notepad",
    visible: true,
    position: { x: 160, y: 160 },
    focused: true,
    zIndex: 3,
  },
]);

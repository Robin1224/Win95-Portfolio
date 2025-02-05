import { writable } from "svelte/store";

import Portrait from "./components/windows/Portrait.svelte";
import VisiteKaartje from "./components/windows/VisiteKaartje.svelte";
import Projects from "./components/windows/Projects.svelte";
import AddressBook from "./components/windows/AddressBook.svelte";


import htmlIcon from "./icons/html.png";
import addressBookIcon from "./icons/address_book.png";
import computerIcon from "./icons/computer.png";
import cdIcon from "./icons/cd.png";
import cmdIcon from "./icons/cmd.png";
import imageIcon from "./icons/image.png";
import notepadIcon from "./icons/notepad.png";

export const openWindows = writable([
  {
    id: 1,
    icon: htmlIcon,
    component: Projects,
    title: "Projects",
    visible: true,
    position: { x: 100, y: 100 },
    focused: false,
    zIndex: 1,
  },
  {
    id: 2,
    icon: addressBookIcon,
    component: AddressBook,
    title: "Address Book",
    visible: true,
    position: { x: 130, y: 130 },
    focused: false,
    zIndex: 2,
  },
  {
    id: 3,
    icon: imageIcon,
    component: Portrait,
    title: "Portrait",
    visible: true,
    position: { x: 160, y: 160 },
    focused: false,
    zIndex: 3,
  },
  {
    id: 4,
    icon: notepadIcon,
    component: VisiteKaartje,
    title: "Notepad",
    visible: true,
    position: { x: 190, y: 190 },
    focused: true,
    zIndex: 4,
  },
]);

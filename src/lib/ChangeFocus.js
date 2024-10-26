import { openWindows } from "$lib/stores";

export default function changeFocus(index) {
  if (index === -1) {
    openWindows.update((windows) => {
      windows.forEach((window) => {
        window.focused = false;
      });
      return windows;
    });
    return;
  }

  openWindows.update((windows) => {
    let highestZIndex = 0;
    windows.forEach((window) => {
      if (window.zIndex > highestZIndex) {
        highestZIndex = window.zIndex;
      }
    });

    windows.forEach((window, i) => {
      if (i === index) {
        window.visible = true;
        if (window.zIndex !== highestZIndex) {
          window.focused = true;
          window.zIndex = highestZIndex + 1;
        }
      } else {
        window.focused = false;
      }
    });
    return windows;
  });
}

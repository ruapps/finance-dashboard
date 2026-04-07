import { createContext } from "react";

export const Drawercontext = createContext({
  open: false,
  handleDrawer: () => {},
});
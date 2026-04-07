import React, { useState } from "react";
import { Drawercontext } from "../context/Drawercontext";

const Drawerprovider = ({ children }) => {
    const [open, setOpen] = useState(false);

    const handleDrawer = (val) => {
        setOpen(val);
    };

    return (
        <Drawercontext.Provider value={{ open, handleDrawer }}>
            {children}
        </Drawercontext.Provider>
    );
};

export default Drawerprovider;

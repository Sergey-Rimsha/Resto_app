const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        playload: newMenu
    };
};

export {
    menuLoaded
};
const electronTitlebarWindows = require('electron-titlebar-windows');
    const { remote } = require('electron');
    /** Options */
    let titlebar = new electronTitlebarWindows({
        darkMode: false,
        color: 'rgb(220, 200, 200)',
        backgroundColor: 'rgb(119, 119, 119);',
        draggable: true,
        fullscreen: false
    });
    /**
     * DOM
     */
    titlebar.appendTo();
    /** Event#close */
    titlebar.on('close', () => {
        console.info('close');
        remote.getCurrentWindow().close();
    });
    /** Event#fullscreen */
    titlebar.on('fullscreen', () => {
        console.info('fullscreen');
        remote.getCurrentWindow().setFullScreen(true);
    });
    /** Event#minimize */
    titlebar.on('minimize', () => {
        console.info('minimize');
        remote.getCurrentWindow().minimize();
    });
    /** Event#maximize */
    titlebar.on('maximize', () => {
        console.info('maximize');
        remote.getCurrentWindow().setFullScreen(false);
        remote.getCurrentWindow().maximize();
    });
function centralizarMapa() {
    const SMALL_SCREEN_WIDTH = 640;
    const LARGE_SCREEN_WIDTH = 2160;

    const ZOOM_LEVEL_SMALL = 6.5;
    const ZOOM_LEVEL_LARGE = 10.2;
    const ZOOM_LEVEL_DEFAULT = 8.8;
    
    const width = document.documentElement.clientWidth;
    const initialCoordinates = [-5.844865661075205, -36.56710587301696]
    let initialZoomLevel;

    if (width < SMALL_SCREEN_WIDTH) {
        initialZoomLevel = ZOOM_LEVEL_SMALL;
    } else if (width > LARGE_SCREEN_WIDTH) {
        initialZoomLevel = ZOOM_LEVEL_LARGE;
    } else {
        initialZoomLevel = ZOOM_LEVEL_DEFAULT;
    }

    map.setView(initialCoordinates, initialZoomLevel);
}
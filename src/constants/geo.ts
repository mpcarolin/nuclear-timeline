
/**
 * Camera distance from globe
 */
export const CAM_DIST = 5

/**
 * Position camera at a distance. It faces globe
 * at all times b/c of OrbitControls
 */
export const INIT_CAM_POS = [0, 0, CAM_DIST] as const;

/**
 * rotate once by 90 degrees on the Y axis to align the mesh's
 * lat long (0,0) with the threejs z axis
 */
export const INIT_EARTH_ROTATION = [0, -Math.PI / 2, 0] as const;

export const EARTH_RADIUS = 3;
export const LOCATION_HIGHLIGHT_RADIUS = 0.05;
export const LOCATION_HIGHLIGHT_DIST = 3;

import type { TCoordinate } from "@/types/timeline";

import * as THREE from "three";
import { CAM_DIST } from "@/constants/geo";

/**
 * Get the position (x, y, z) for the lat, long 
 * (0, 0) on the globe at given radius
 */
export const getNullPosition = (radius?: number) => {
    return [
        0,
        0,
        radius
    ] as const
}

/**
 * Gets the position vector on a globe given lat/long coordiantes
 */
export const getCoordPosition = (coord?: TCoordinate, radius?: number): THREE.Vector3 => {
    const start = new THREE.Vector3(...getNullPosition(radius ?? CAM_DIST));
    if (!coord) return start;

    const { lat, long } = coord;

    // convert to radians, since lat/long are in degrees
    const latRad = THREE.MathUtils.degToRad(lat);
    const longRad = THREE.MathUtils.degToRad(long);

    const up = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3(1, 0, 0);


    // A positive x change in threejs is counterclockwise around that axis, 
    // and this would move a point on the sphere from north to south. However,
    // a positive latitude change is a movement from south to north, so we 
    // have to negate this to get the cam positioned in the right spot
    return start
        .applyAxisAngle(right, -latRad)
        .applyAxisAngle(up, longRad);
}

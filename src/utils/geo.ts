import type { TCoordinate } from "@/types/timeline";

import * as THREE from "three";
import { INIT_CAM_POS } from "@/constants/geo";

export const getCamPosition = (coord?: TCoordinate): THREE.Vector3 => {
    const start = new THREE.Vector3(...INIT_CAM_POS);
    if (!coord) return start;

    const { lat, long } = coord;

    // convert to radians, since lat/long are in degrees
    const latRad = THREE.MathUtils.degToRad(lat);
    const longRad = THREE.MathUtils.degToRad(long);

    const up = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3(1, 0, 0);


    // A positive x change in threejs is counterclockwise around the axis, 
    // and this would move a point on the sphere from north to south. However,
    // a positive latitude change is a movement from south to north, so we 
    // have to negate this to get the cam positioned in the right spot
    return start
        .applyAxisAngle(right, -latRad)
        .applyAxisAngle(up, longRad);
}

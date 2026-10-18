import { TextureLoader, type Mesh } from "three";
import * as THREE from "three";

import { Suspense, useRef, type RefObject } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const LAT = 34.307144
const LONG = -106.018066

// rotate once by 90 degrees on the Y axis to align the mesh's
// lat long (0,0) with the threejs z axis
const INIT_SPHERE_ROTATION = [0, -Math.PI / 2, 0] as const;

const Earth = ({ ref }: { ref: RefObject<Mesh> }) => {

    const texture = useLoader(TextureLoader, "/2k_earth_daymap.jpg");

    return (
        <mesh ref={ref} rotation={INIT_SPHERE_ROTATION}>
            <sphereGeometry
                args={[3, 48, 48]}
            />
            <meshStandardMaterial
                color="white"
                map={texture}
            />
        </mesh>
    );
}

const getCamPosition = (lat: number, long: number): THREE.Vector3 => {
    // convert to radians, since lat/long are in degrees
    const latRad = THREE.MathUtils.degToRad(lat);
    const longRad = THREE.MathUtils.degToRad(long);

    const up = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3(1, 0, 0);

    const start = new THREE.Vector3(...INIT_CAM_POS);

    // A positive x change in threejs is counterclockwise around the axis, 
    // and this would move a point on the sphere from north to south. However,
    // a positive latitude change is a movement from south to north, so we 
    // have to negate this to get the cam positioned in the right spot
    return start
        .applyAxisAngle(right, -latRad)
        .applyAxisAngle(up, longRad);
}

/**
 * Camera distance from globe
 */
const CAM_DIST = 5

/**
 * Position camera at a distance. It faces globe
 * at all times b/c of OrbitControls
 */
const INIT_CAM_POS = [0, 0, CAM_DIST] as const;

export const GeoViz = () => {
    const sphereRef = useRef<Mesh>(null!);
    // showCoordinates(LAT, LONG, sphereRef.current)

    return (
        <Suspense fallback={<p>loading</p>}>
            <div id="canvas-container" style={{ height: "100vh", border: "1px solid black", background: "black" }}>
                <Canvas camera={{
                    position: getCamPosition(LAT, LONG)
                }}>
                    { /* X: orange, Y: green, Z: blue */}
                    <axesHelper args={[4.5]} />
                    <OrbitControls />
                    <ambientLight
                        color="white"
                        intensity={2}
                        position={INIT_CAM_POS}
                    />
                    <Earth ref={sphereRef} />
                </Canvas>
            </div>
        </Suspense>
    )
}

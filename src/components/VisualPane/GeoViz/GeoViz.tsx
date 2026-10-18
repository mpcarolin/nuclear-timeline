import styles from "./GeoViz.module.css"
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { getCamPosition } from "@/utils/geo";
import { INIT_CAM_POS } from "@/constants/geo";
import { Earth } from "./Earth";

const LAT = 34.307144
const LONG = -106.018066

export const GeoViz = () => {
    return (
        <Suspense fallback={<p>loading</p>}>
            <div id="canvas-container" className={styles.canvasWrapper}>
                <Canvas camera={{ position: getCamPosition(LAT, LONG) }}>
                    { /* X: orange, Y: green, Z: blue */}
                    <axesHelper args={[4.5]} />
                    <OrbitControls />
                    <ambientLight
                        color="white"
                        intensity={2}
                        position={INIT_CAM_POS}
                    />
                    <Earth />
                </Canvas>
            </div>
        </Suspense>
    )
}

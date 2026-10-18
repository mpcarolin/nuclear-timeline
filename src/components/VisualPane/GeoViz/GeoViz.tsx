import type { TCoordinate } from "@/types/timeline";

import styles from "./GeoViz.module.css"
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { INIT_CAM_POS } from "@/constants/geo";
import { Earth } from "./Earth";
import { Camera } from "./Camera";
import { LocationHighlight } from "./LocationHighlight";


export const GeoViz = ({ coord }: { coord?: TCoordinate }) => {
    return (
        <Suspense fallback={<p>loading</p>}>
            <h3 className={styles.header}>{coord?.name}</h3>
            <div id="canvas-container" className={styles.canvasWrapper}>
                <Canvas>
                    <Camera coord={coord} />
                    <ambientLight
                        color="white"
                        intensity={2}
                        position={INIT_CAM_POS}
                    />
                    <Earth />
                    <LocationHighlight coord={coord} />
                </Canvas>
            </div>
        </Suspense>
    )
}

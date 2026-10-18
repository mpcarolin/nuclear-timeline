import type { TCoordinate } from "@/types/timeline";

import { useRef, useEffect } from "react";
import { CameraControls } from "@react-three/drei";
import { getCoordPosition } from "@/utils/geo";

export const Camera = ({ coord }: { coord?: TCoordinate }) => {
    const ref = useRef<CameraControls>(null);

    useEffect(() => {
        const controls = ref.current;
        if (!controls || !coord) {
            return;
        }

        const target = getCoordPosition(coord);
        controls.setPosition(
            target.x,
            target.y,
            target.z,
            true // smoothly lerp around globe
        );

    }, [coord]);

    return (
        <CameraControls
            ref={ref}
            enabled={false}
        />
    )
}

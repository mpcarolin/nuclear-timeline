import type { TCoordinate } from "@/types/timeline";

import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { getCamPosition } from "@/utils/geo";

export const Camera = ({ coord }: { coord?: TCoordinate }) => {
    useThree(({ camera }) => {
        const vec = getCamPosition(coord);
        camera.position.set(vec.x, vec.y, vec.z);
    });

    return (
        <OrbitControls />
    )
}

import { type RefObject } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, type Mesh } from "three";
import { INIT_EARTH_ROTATION } from "@/constants/geo";
import type { TCoordinate } from "@/types/timeline";

export const Earth = ({ ref, coord }: { ref?: RefObject<Mesh>, coord?: TCoordinate }) => {
    const texture = useLoader(TextureLoader, "/2k_earth_daymap.jpg");

    return (
        <mesh ref={ref} rotation={INIT_EARTH_ROTATION}>
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

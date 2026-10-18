import { type RefObject } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, type Mesh } from "three";
import { EARTH_RADIUS, INIT_EARTH_ROTATION } from "@/constants/geo";

export const Earth = ({ ref }: { ref?: RefObject<Mesh>, }) => {
    const texture = useLoader(TextureLoader, "/2k_earth_daymap.jpg");

    return (
        <mesh ref={ref} rotation={INIT_EARTH_ROTATION}>
            <sphereGeometry
                args={[EARTH_RADIUS, 128, 128]}
            />
            <meshStandardMaterial
                color="white"
                map={texture}
            />
        </mesh>
    );
}

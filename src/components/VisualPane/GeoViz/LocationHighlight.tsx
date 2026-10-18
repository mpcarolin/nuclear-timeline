import type { TCoordinate } from "@/types/timeline";
import { getCoordPosition } from "@/utils/geo";
import { cssVar } from "@/utils/cssVar";
import { LOCATION_HIGHLIGHT_DIST, LOCATION_HIGHLIGHT_RADIUS } from "@/constants/geo";

export const LocationHighlight = ({ coord }: { coord?: TCoordinate }) => {
    if (!coord) return null;

    const position = getCoordPosition(coord, LOCATION_HIGHLIGHT_DIST);

    return (
        <group>
            <mesh position={position}>
                <sphereGeometry
                    args={[LOCATION_HIGHLIGHT_RADIUS, 128, 128]}
                />
                <meshBasicMaterial
                    color={cssVar("color-alert")}
                    opacity={0.6}
                    transparent={true}
                />
            </mesh>
        </group>
    )
}

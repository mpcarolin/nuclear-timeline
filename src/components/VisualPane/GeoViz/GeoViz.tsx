import { TextureLoader, type Mesh } from "three";

import { Suspense, useRef, type RefObject } from "react";
import { Canvas, useLoader } from "@react-three/fiber";

const LAT = 0
const LONG = 0

const Earth = ({ ref }: { ref: RefObject<Mesh> }) => {

    const texture = useLoader(TextureLoader, "/2k_earth_daymap.jpg");

    return (
        <group>
            <mesh
                visible
                ref={ref}
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
            >
                <sphereGeometry args={[
                    3, 48, 48
                ]} />
                <meshStandardMaterial
                    color="white"
                    map={texture}
                />
            </mesh>
        </group>
    );
}

const showCoordinates = (lat: number, long: number, earth?: Mesh) => {
    earth?.rotation?.set(
        0,
        0,
        0,
        "XYZ"
    )
}

export const GeoViz = () => {
    const sphereRef = useRef<Mesh>(null!);
    showCoordinates(LAT, LONG, sphereRef.current)

    return (
        <Suspense fallback={<p>loading</p>}>
            <p style={{ marginBottom: -25, marginLeft: 5, color: "green" }}>{JSON.stringify(sphereRef.current?.rotation?.toArray())}</p>
            <div id="canvas-container" style={{ height: "100vh", border: "1px solid black" }}>
                <Canvas camera={{
                    position: [0, 0, 5]
                }}>
                    <ambientLight intensity={0.1} />
                    <directionalLight color="white" position={[0, 0, 5]} />

                    <Earth ref={sphereRef} />
                </Canvas>
            </div>
        </Suspense>
    )
}

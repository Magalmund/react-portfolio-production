import React, {Suspense, useMemo} from "react";
import {Line, OrbitControls, Preload, Sphere} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import CanvasLoader from "../Loader.jsx";
import {Canvas} from "@react-three/fiber";

const Shape = () => {
    const points = useMemo(
        () =>
            new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
                100
            ),
        []
    );
    return (
        <group>
            <Line
                scale={0.6}
                worldUnits points={points}
                color="#cae6f1"
                lineWidth={0.1} />
            <Line
                scale={0.6}
                worldUnits
                points={points}
                color="#cae6f1"
                lineWidth={0.1}
                rotation={[0, 0, 1]}
            />
            <Line
                scale={0.6}
                worldUnits
                points={points}
                color="#cae6f1"
                lineWidth={0.1}
                rotation={[0, 0, -1]}
            />
            <Sphere
                args={[0.55, 64, 64]}
                scale={0.6}>
                <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
            </Sphere>
        </group>
    );
};

const Atom = () => {
    return (
    <Canvas
        frameloop="demand"
        shadows
        camera={{position: [20, 3, 5], fov: 25}}
        gl={{preserveDrawingBuffer: true}}
    >
        <Suspense fallback={<CanvasLoader/>}>
            <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            <Shape />
            <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={1} radius={0.5} />
            </EffectComposer>
        </Suspense>
        <Preload all/>
    </Canvas>
    );
};

export default Atom;

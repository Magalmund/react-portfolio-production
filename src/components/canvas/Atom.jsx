import React, {Suspense, useEffect, useMemo, useState} from "react";
import {Line, OrbitControls, Preload, Sphere} from "@react-three/drei";
import {EffectComposer, Bloom} from "@react-three/postprocessing";
import * as THREE from "three";
import CanvasLoader from "../Loader.jsx";
import {Canvas} from "@react-three/fiber";

const Shape = (mobile) => {
    const points = useMemo(
        () =>
            new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
                100
            ),
        []
    );
    return (
        <group
            position={mobile.mobile ? [0, -0.5, 0] : [0, 0, 0]}
        >
            <Line
                scale={0.65}
                worldUnits points={points}
                color="#fff"
                lineWidth={0.05}/>
            <Line
                scale={0.65}
                worldUnits
                points={points}
                color="#fff"
                lineWidth={0.05}
                rotation={[0, 0, 1]}
            />
            <Line
                scale={0.65}
                worldUnits
                points={points}
                color="#fff"
                lineWidth={0.05}
                rotation={[0, 0, -1]}
            />
            <Sphere
                args={[0.55, 64, 64]}
                scale={0.5}
            >
                <meshBasicMaterial color={[0, 4, 25]} toneMapped={false}/>
            </Sphere>
        </group>
    );
};

const Atom = () => {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1024px)');
        setMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setMobile(event.matches);
        }
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, [])
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
                <Shape mobile={mobile}/>
                <EffectComposer>
                    <Bloom mipmapBlur luminanceThreshold={1} radius={0.4}/>
                </EffectComposer>
            </Suspense>
            <Preload all/>
        </Canvas>
    );
};

export default Atom;

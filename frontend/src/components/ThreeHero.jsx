import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSphere({ count = 5000 }) {
    const points = useRef();

    // Generate random points in a sphere shape
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const radius = 2 + Math.random() * 0.5;
            pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = radius * Math.cos(phi);
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        const { mouse, clock } = state;
        points.current.rotation.x = clock.getElapsedTime() * 0.05;
        points.current.rotation.y = clock.getElapsedTime() * 0.1;

        // Slight mouse drift
        points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, mouse.x * 0.5, 0.05);
        points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, mouse.y * 0.5, 0.05);
    });

    return (
        <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#cbd5e1"
                size={0.015}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.NormalBlending}
            />
        </Points>
    );
}

const ThreeHero = () => {
    return (
        <div className="hero-canvas">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <color attach="background" args={['#ffffff']} />
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
                <ParticleSphere />

                <Sphere args={[2.5, 32, 32]}>
                    <meshBasicMaterial color="#f1f5f9" transparent opacity={0.3} />
                </Sphere>
            </Canvas>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 60% 40%, rgba(241, 245, 249, 0.4) 0%, transparent 60%)',
                pointerEvents: 'none'
            }} />
        </div>
    );
};

export default ThreeHero;

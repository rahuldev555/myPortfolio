import { Float, Line, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

export default function Computers() {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <Float speed={3} rotationIntensity={3} floatIntensity={40}>
        <Atom />
      </Float>
    </Canvas>
  );
}

function Atom(props) {
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  return (
    <group {...props}>
      <Line worldUnits points={points} color="turquoise" lineWidth={0.3} />
      <Line
        worldUnits
        points={points}
        color="mediumPurple"
        lineWidth={0.3}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color="violet"
        lineWidth={0.3}
        rotation={[0, 0, -1]}
      />

      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[6, 5, 2]} toneMapped={false} />
      </Sphere>
    </group>
  );
}

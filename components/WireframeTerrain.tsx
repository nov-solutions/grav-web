'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// 04 — wireframe terrain
function wireframeTerrain() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, .1, 100);
  camera.position.set(0, 1.6, 2.4); camera.lookAt(0, 0, 0);
  const seg = 96;
  const geo = new THREE.PlaneGeometry(4, 4, seg, seg);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      uniform float uTime; varying float vH;
      float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float noise(vec2 p){ vec2 i=floor(p),f=fract(p); float a=hash(i),b=hash(i+vec2(1,0)),c=hash(i+vec2(0,1)),d=hash(i+vec2(1,1)); vec2 u=f*f*(3.-2.*f); return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y; }
      float fbm(vec2 p){ float v=0.,a=.5; for(int i=0;i<4;i++){ v+=a*noise(p); p*=2.02; a*=.5;} return v; }
      void main(){
        vec3 p = position;
        float h = fbm(p.xz * .9 + uTime*.15) * .9 - .35;
        p.y += h; vH = h;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.);
      }`,
    fragmentShader: `
      varying float vH;
      void main(){                          
        vec3 a = vec3(.60,.20,.90);
        vec3 b = vec3(.18,.22,.85);
        vec3 col = mix(a, b, smoothstep(-.3,.5,vH));
        gl_FragColor = vec4(col, 1.);
      }`,
    wireframe: true,
  });
  scene.add(new THREE.Mesh(geo, mat));
  return { scene, camera, mat, geo, update: (t: number) => { mat.uniforms.uTime.value = t; camera.position.x = Math.sin(t * .15) * .4; camera.lookAt(0, 0, 0); } };
}

export const WireframeTerrain = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scene, camera, mat, geo, update } = wireframeTerrain();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    const clock = new THREE.Clock();
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      update(clock.getElapsedTime());
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      renderer.dispose();
      mat.dispose();
      geo.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} className={className} aria-hidden />;
};

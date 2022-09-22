// import React, { useEffect, Suspense } from "react";
// import * as BABYLON from "babylonjs";
// import "babylonjs-loaders";

// type SceneEventArgs = {
//   engine: BABYLON.Engine;
//   scene: BABYLON.Scene;
//   canvas: HTMLCanvasElement;
// };

// type SceneProps = {
//   engineOptions?: BABYLON.EngineOptions;
//   adaptToDeviceRatio?: boolean;
//   onSceneMount?: (args: SceneEventArgs) => void;
//   width?: number;
//   height?: number;
// };

// const Scene: React.FC<SceneProps & React.HTMLAttributes<HTMLCanvasElement> = (
//   props
// ) => {
//   var scene: BABYLON.Scene;
//   var engine: BABYLON.Engine;
//   var canvas: HTMLCanvasElement;

//   const onResizeWindow = () => {
//     if (engine) {
//       engine.resize();
//     }
//   };

//   useEffect(() => {
//     engine = new BABYLON.Engine(
//       canvas,
//       true,
//       props.engineOptions,
//       props.adaptToDeviceRatio
//     );

//     let sceneD = new BABYLON.Scene(engine);
//     scene = sceneD;
//     // scene.clearColor = new BABYLON.Color3.Black;

//     BABYLON.SceneLoader.ImportMesh(
//       "",
//       "./",
//       "chavena.glb",
//       scene,
//       function (meshes) {
//         scene.createDefaultCameraOrLight(true, true, true);
//         scene.createDefaultEnvironment();

//         const myTexture = new BABYLON.Texture(
//           "./texture1.jpg",

//           scene
//         );

//         myTexture.uScale = -0.5;
//         myTexture.vScale = 0.2;

//         const materialForCup = new BABYLON.StandardMaterial("city", scene);

//         materialForCup.diffuseTexture = myTexture;

//         myTexture.wAng = -Math.PI / 6;

//         meshes[1].material = materialForCup;
//       }
//     );

//     if (typeof props.onSceneMount === "function") {
//       props.onSceneMount({
//         scene: sceneD,
//         engine: engine,
//         canvas: canvas,
//       });
//     } else {
//       console.error("onSceneMount function not available");
//     }

//     // Resize the babylon engine when the window is resized
//     window.addEventListener("resize", onResizeWindow);

//     return () => {
//       window.removeEventListener("resize", onResizeWindow);
//     };
//   }, []);

//   const onCanvasLoaded = (c: HTMLCanvasElement) => {
//     if (c !== null) {
//       canvas = c;
//     }
//   };

//   // 'rest' can contain additional properties that you can flow through to canvas:
//   // (id, className, etc.)

//   let { width, height, ...rest } = props;

//   let opts: any = {};

//   if (width !== undefined && height !== undefined) {
//     opts.width = width;
//     opts.height = height;
//   }

//   return (
//     <canvas
//       style= {{ width: "100%", height: "100vh" }
// }
// {...opts }
// ref = { onCanvasLoaded }
//   />
//   );
// };

// export default Scene;
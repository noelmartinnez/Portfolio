// Comprueba una sola vez si el navegador puede crear un contexto WebGL. En
// algunos móviles (ahorro de energía, GPU saturada) falla, y montar un
// <Canvas> de fiber en ese caso lanza un error durante el render.
let supported;

export const hasWebGL = () => {
  if (supported !== undefined) return supported;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    supported = Boolean(gl);
    // Libera el contexto de prueba: iOS limita cuántos puede haber a la vez.
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch (e) {
    supported = false;
  }
  return supported;
};

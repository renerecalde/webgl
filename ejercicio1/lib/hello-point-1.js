const VSHADER_SOURCE = 'void main() {\n'
    + ' gl_Position = vec4(0.0,0.5,0.0,1.0); \n'
    + ' gl_PointSize = 10.0;\n'
    + ' }\n';

const FSHADER_SOURCE = 'void main() {\n'
    + ' gl_FragColor = vec4(0.0,1.0,0.0,1.0); \n'
    + ' }\n';

function main() {
  const canvas = document.getElementById('webgl');
  const gl = getWebGLContext(canvas);

  if (!gl) {
    console.log('Failed to rendering context for webgl');
    return;
  }

  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)){
    console.log('Failed to initialize shaders');
  }

  gl.clearColor(0.0, 0.0, 0.0, 0.1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.POINTS, 0, 1);
}

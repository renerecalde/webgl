// HelloTriangle.js
var VSHADER_SOURCE = 'attribute vec4 a_Position;\n'
    + 'void main() {\n'
    + 'gl_Position = a_Position;\n'
    + '}\n';

let FSHADER_SOURCE = 'void main() {\n'
    + ' gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); \n'
    + ' }\n';

function main() {
  const canvas = document.getElementById('webgl');
  const gl = canvas.getContext('webgl');

  if (!gl) {
    console.log('Failed to rendering context for webgl');
    return;
  }

  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)){
    console.log('Failed to initialize shaders');
  }

  const n = initVertexBuffers(gl);
  if (n < 0) {
    console.log('Failed to set positions of the vertices');
    return;
  }

  gl.clearColor(0.0, 0.0, 0.0, 0.1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.drawArrays(gl.LINE_LOOP, 0, n);
}

function initVertexBuffers(gl) {
  const vertices = new Float32Array([
    0.0, 0.5,
    -0.5, -0.5,
    0.5, -0.5,
  ]);

  const n = 3;

  const vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create buffer object');
    return -1;
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  const a_Position = gl.getAttribLocation(gl.program, 'a_Position');

  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(a_Position);

  return n;
}

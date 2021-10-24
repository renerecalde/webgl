function main() {
    let canvas = document.getElementById('webgl');
    let gl = getWebGLContext(canvas);

    if(!gl) {
        console.log('Failed to rendering context for webgl');
        return;
    }

    gl.clearColor(1.0,0.5,0.5,0.1);
    gl.clear(gl.COLOR_BUFFER_BIT);

}

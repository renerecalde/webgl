function main(){
    let canvas = document.getElementById('example');
    if(!canvas){
        console.log('Failed to retrieve canvas elements');
        return false;
    }

    let context = canvas.getContext('2d');

    context.fillStyle = 'rgba(0,0,255,1.0)';
    context.fillRect(120,10,150,150)
}

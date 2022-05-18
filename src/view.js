class View{
    constructor(element, width, height, rows, columns){
        this.element = element;
        this.width = width;
        this.height = height;

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');

        this.blockWidth = this.width / columns;
        this.blockHeight = this.height / rows;

        this.element.appendChild(this.canvas);
    }

    render({ playfield }){
        this.clearScreen();
        this.renderPlayfield(playfield);
    }

    clearScreen(){
        this.context.clearRect(0, 0, this.width, this.height);
    }

    renderPlayfield(playfield){
        for (let y = 0; y < playfield.length; y++) {
            const line = playfield[y];
            for (let x = 0; x < line.length; x++) {
                const block = line[x];
                
                if(block){
                    this.renderBlock(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight, 'red');
                }
            }
        }
    }

    renderBlock(x, y, width, height, color){
        this.context.fillStyle = color;
        this.context.strokeStyle = 'black';
        this.context.loneWidth = 2;
        
        this.context.fillRect(x, y, width, height);
        this.context.strokeRect(x, y, width, height);
    }
}



export default View;
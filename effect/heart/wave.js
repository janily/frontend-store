class Wave {
    constructor({
        canvasWidth, //轴长
        canvasHeight, //轴高
        waveWidth = 0.055,
        waveHeight = 6, //设置波浪高度
        speed = 0.04,
        xOffset = 0,  //水平的位移
        colors = ["#dbb77a","#bf8f3b"]
    }){
        this.starX = 0;
        this.colors = colors;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.waveHeight = waveHeight;
        this.waveWidth = waveWidth;
        this.speed = speed;
        this.xOffset = xOffset;
    }

    update({nowrRang} = {}) {
        this.points = [];

        const {
            starX,
            canvasWidth, //轴长
            canvasHeight, //轴高
            waveWidth,
            waveHeight,  //设置波浪高度
            speed,
            xOffset
        } = this;

        for(let x = starX; x < starX+canvasWidth; x += 20 / canvasWidth) {
            // y = 波浪的高度 * sin()
        }
    }
}
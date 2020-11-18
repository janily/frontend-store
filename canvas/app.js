const canvas = document.getElementById("stage");

const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

const image = new Image()
image.src = 'cutbg.jpg';


image.addEventListener('load', function () {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const colorData = imgData.data;
  for (let i = 0; i < colorData.length; i += 4) {
    const total = colorData[i] + colorData[i + 1] + colorData[i + 2];
    const averageColorValue = total / 3;
    colorData[i] = averageColorValue;
    colorData[i + 1] = averageColorValue + 20;
    colorData[i + 2] = averageColorValue;
  }

  imgData.data = colorData;
  ctx.putImageData(imgData, 0, 0)
})
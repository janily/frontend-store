const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
///结束屏
const section = document.querySelector("section");
const end = section.querySelector("h1");
//滚动方法，创建一个scrollMagic控制器
const controller = new ScrollMagic.Controller();
//滚动
let scene = new ScrollMagic.Scene({
  duration: 3000,  // 效果持续距离
  triggerElement: intro,  // 触发元素
  triggerHook: 0 // 开始时间
})
  // .addIndicators()
  .setPin(intro)
  .addTo(controller);
//文字动画
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//视频动画
let accelAmount = 0.1; // 当前针
let scrollPos = 0;
let delay = 0;

scene.on("update", e => {
  scrollPos = e.scrollPos / 1000; // 更新时间
});

setInterval(
  () => {
    delay += (scrollPos - delay) * accelAmount; // 滚动的时候，添加延迟，并且有一个逐渐的加速
    console.log(scrollPos, delay);
    video.currentTime = delay;
  },
  41
); 

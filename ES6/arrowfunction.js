const obj = { name: '千古壹号' };

function fn1() {
  console.log(this); // 第一个 this
  return () => {
    console.log(this); // 第二个 this
  };
}

const fn2 = fn1.call(obj);
fn2();
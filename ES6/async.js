(async function f() {
  let url = "http://jsonplaceholder.typicode.com/users";

  const response = await fetch(url).catch(handleErr);
  const data = await response.json();
  if (data.code && data.code == 400) {
    //problem
    return;
  }
  console.log(data);
})();

function handleErr(err) {
  console.warn(err);
  let resp = new Response(
    JSON.stringify({
      code: 400,
      message: "Stupid network Error"
    })
  );
  return resp;
}


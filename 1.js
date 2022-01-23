const http = (param) => {
  console.log(param);
};

const usesHttp = () => {
  return (param) => http(param);
};

const ex = usesHttp();
const ex2 = http

http(3);

ex(3);
ex2(3)

const writeHttp = ()=>{
  http(3)
}
writeHttp()
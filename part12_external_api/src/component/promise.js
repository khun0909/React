function printMe() {
  console.log('printMe 콘솔 내용')
}

setTimeout(printMe, 3000);
console.log('대기중.....')

function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve: 성공, reject: 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 30) {
        // 50보다 값이 커지면 에러 발생
        const err = new Error('사용자 에러')
        return reject(err);
      }
      resolve(result); // number + 10 계산후 성공 처리
    }, 1000);
  });
  return promise
}

// increase(0)
//   .then(number => {
//     // Promise에서 resolve 된 값은 .then을 통해서 받아옴
//     console.log(number);
//     return increase(number); //Promise를 리턴
//   })
//   .then(number => {
//     // Promise에서 resolve 된 값은 .then을 통해서 받아옴
//     console.log(number);
//     return increase(number); //Promise를 리턴
//   })
//   .then(number => {
//     // Promise에서 resolve 된 값은 .then을 통해서 받아옴
//     console.log(number);
//     return increase(number); //Promise를 리턴
//   })
//   .then(number => {
//     // Promise에서 resolve 된 값은 .then을 통해서 받아옴
//     console.log(number);
//     return increase(number); //Promise를 리턴
//   })
//   .then(number => {
//     // Promise에서 resolve 된 값은 .then을 통해서 받아옴
//     console.log(number);
//     return increase(number); //Promise를 리턴
//   })
//   .catch(err => {
//     // 에러 발생시 .catch를 통해 확인
//     console.log(err);
//   })

async function runTasks() {
  try {
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (err) {
    console.log(err)
  }
}
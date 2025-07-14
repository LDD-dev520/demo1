// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum); // 输出 55
// let sum = 0;
// let i = 0;
// for (; i <= 1000; i++) {   
//    if (i % 2===0) {
//     console.log(i);
  
//     }else{
//     sum +=i;
//    }

// }
// console.log(sum);

// for (let i = 1; i < 10; i++){
//     document.write("<br>");

//     for (let j = 1; j < 10; j++){  
//         let sum=i*j
//         document.write(i+'*'+j+'= '+sum+' ');//+是拼接字符串的
//     }
// }
function climbStairs(n) {
    if (n <= 2) {
        return n;  // 如果楼梯只有1阶或者2阶，直接返回n
    }

    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];  // 当前楼梯的方式 = 上一步楼梯的方式 + 上两步楼梯的方式
    }

    return dp[n];
}

// 示例：爬到楼顶需要5阶楼梯
console.log(climbStairs(4));  // 输出: 8

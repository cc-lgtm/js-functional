// function Reasuvie(n) {
//   return (n == 1) ? 1 : n * Reasuvie(n - 1)
// }
// console.log(Reasuvie(5))

function TailReasuvie(n, a = 1) {
  return (n == 1) ? a : TailReasuvie(n - 1, a * n)
}
console.log(TailReasuvie(5))

// function facttail(n ,a) { 
//     if (n < 0)
//         return 0;    
//     else if (n == 0)
//         return 1;    
//     else if (n == 1)
//         return a;
//     else
//         return facttail(n - 1, n * a);
// }
// console.log(facttail(10, 1))

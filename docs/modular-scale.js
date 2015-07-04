
export default function (base, factors, length) {

  let arr = [base]

  for (var i = 0; i < length; i++) {
    let n = i % factors.length
    let f = factors[n]
    let a = arr[arr.length - 1]
    arr.push(a * f)
  }

  return arr

}


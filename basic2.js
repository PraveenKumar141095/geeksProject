var n = {
    a: "xy",
    b: "abc",
    5: "jsjjs"
}

var m=n;
m.a="xyz";

console.log(n.b);
console.log(n.a);
console.log(n[5]);
console.log(n["5"]);
console.log(n["a"]);
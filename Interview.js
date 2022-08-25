let ar = [25, 2, 3, 57, 38, 41];
let num = 0;
let s = ar.toString().split("");
for (let i = 0; i <= s.length; i++) {
  for (let x = i; x <= s.length; x++) {
    if (s[i] == s[x]) num++;
  }
}
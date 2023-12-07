let btn = document.getElementById("btn")
btn.addEventListener('click',()=>{
  let area = document.getElementById("area").value
  function Vowel(str) {
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;
    for (let i of str.toLowerCase()) {
        if (vowels.includes(i)) {
            count++;
        }
    }
    return count
}
const result1 = Vowel(area);
document.getElementById("result1").innerHTML =result1
function consonant(str) { 
    let count = 0; 
    for (let i = 0; i < str.length; i++) { 
    if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && 
    str[i] !== "o" && str[i] !== "u" && str[i] !== " ") { 
    count++; 
    } 
    } 
    return (count); 
    }
   const result2 = consonant(area);
  document.getElementById("result2").innerHTML = result2
})
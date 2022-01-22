const cats = ["white", "fuzzy", "little", "furry", "small", "siamese", "mean", "shorthair", "longhair"]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let index = -1;

function loop(arr) {

    index++;
    if (index == 9) {
        index = 0
    }
    return arr[index];

} 

document.querySelector("#catbtn").addEventListener("click", function() {
    
    
    document.querySelector("#catimg").setAttribute("src", "https://source.unsplash.com/featured/?{" + loop(cats) + " cat}")
    console.log(index);
})


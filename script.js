const counters = document.querySelectorAll('.hero-numbers');
counters.forEach(counter => {
    let initial_count = 0;
    const final_count = parseInt(counter.dataset.count);

    function updateCounting() {
        if (initial_count < final_count) {
            initial_count++;
            counter.innerText = `+${initial_count}`;
        } else {
            clearInterval(interval);
        }
    }

    const interval = setInterval(updateCounting, 20);
});

// MENU MOBILE OPEN CLOSE

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function toggleMenu() {

    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "100vh";
    } else {
        menuList.style.maxHeight = "0px";
    }
}


function openClose() {
    var x = document.getElementById("navigation");
}




const cursor = document.querySelector('.circle-cursor');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Set the position of the cursor element
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

});
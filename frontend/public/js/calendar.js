let last_menu = ''
let all_menus = ['selector-month', 'selector-year', 'selector-city', 'selector-vendor']

/**
 * Set active open calendar filter menu
 * @param {String} id 
 */
function setActiveMenu(id) {
    last_menu = id
    document.getElementById(id).classList.add('active')

    for (let menu of all_menus) {
        if (last_menu !== menu) {
            document.getElementById(menu).classList.remove('active')
        }
    }
}

// Mouse Over Name
document.getElementById('month-selector').addEventListener("mouseover", function() {
    setActiveMenu('selector-month')
})

document.getElementById('year-selector').addEventListener("mouseover", function() {
    setActiveMenu('selector-year')
})

document.getElementById('city-selector').addEventListener("mouseover", function() {
    setActiveMenu('selector-city')
})

document.getElementById('vendor-selector').addEventListener("mouseover", function() {
    setActiveMenu('selector-vendor')
})

// Mouse Leave Popup Menu
document.getElementById('selector-month').addEventListener('mouseout', function() {
    document.getElementById('selector-month').classList.remove('active');
})

document.getElementById('selector-year').addEventListener('mouseout', function() {
    document.getElementById('selector-year').classList.remove('active');
})

document.getElementById('selector-city').addEventListener('mouseout', function() {
    document.getElementById('selector-city').classList.remove('active');
})

document.getElementById('selector-vendor').addEventListener('mouseout', function() {
    document.getElementById('selector-vendor').classList.remove('active');
})
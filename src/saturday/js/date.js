var d = new Date()
var weekday = new Array("Sunday plus 1", "Saturday minus 5", "Saturday minus 4", "Saturday minus 3", "Saturday minus 2", "Saturday minus 1", "Saturday")

document.getElementById("saturday").innerHTML = weekday[d.getDay()];
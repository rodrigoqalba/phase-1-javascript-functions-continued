// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork() {
    return "function exists"
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective (z = `*`) {
    return function (i = `special`) {
        return `You are ${z}${i}${z}!`
    }
}

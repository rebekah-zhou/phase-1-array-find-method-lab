// code your solution here
function superbowlWin(arr) {
    const found = arr.find(element => element.result === "W")
    if (found) {
        return found.year;
    }
}

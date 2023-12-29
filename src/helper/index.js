export function getWeek(dt) {
    const date = new Date(dt * 1000)
    return date.toLocaleString('en-US', {
        weekday: "long"
    })
}
export function getDay(dt) {
    const date = new Date(dt * 1000)
    const day = date.toLocaleString('en-US', {
        day: "numeric"
    })
    return day < 10 ? '0' + day : day
}
export function getMonth(dt) {
    const date = new Date(dt * 1000)
    return date.toLocaleString('en-US', {
        month: "short"
    })
}
export function getTime(zone) {
    const date = new Date()
    return date.toLocaleString('en-US', {
        timeStyle:"short",
        hourCycle:"h23",
        timeZone: zone
    })
}
export function getTemp(temp) {
    return Math.round(temp) > 0 ? '+' + Math.round(temp) : Math.round(temp)
}
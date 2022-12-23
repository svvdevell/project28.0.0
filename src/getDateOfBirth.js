export function getDateOfBirth(date) {
    let d = new Date(date);
    let options = {day: "numeric", month: "long"};
    return (d.toLocaleString("en-EN", options));
}

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (typeof obj === 'number' && isNaN(obj)) {
        return NaN;
    }

    if (typeof obj === 'function') {
        return obj;
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}

////////////////////////////////////////////////

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


let coursesWithId = coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course}));
console.log(coursesWithId);
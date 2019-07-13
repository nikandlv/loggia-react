const persian=['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
export function toPersian(str) {
    str = str+"";
    let result = '';
    for (let letter of str) {
        if(!isNaN(letter)) {
            result += persian[(letter)];
            continue
        }
        result += letter;
    }
    return result;
}

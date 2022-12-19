function checkInput(word, num) {
    if (word === '' || num === '') {
        return 'Введены пустые значения'
    } else if (word.split('').every(elem => isNaN(+elem)) && Number.isInteger(num)) {
        return repeatWord(word, num)
    } else if (word.split('').every(elem => isNaN(+elem))) {
        // area.innerHTML = 'Введенное количество повторений не является целым числом';
        return 'Введенное количество повторений не является целым числом'
    } else if (Number.isInteger(num)){
        return 'Введенное слово содердит цифры'
    }
}
function repeatWord(word, count){
    let result = [];
    for (let i = 0; i < count; i++) {
        result[i] = `${word+(i+1)}`;
    }
    return result.join(', ')
}
module.exports = checkInput;
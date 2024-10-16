class MyString {
    reverse(str) {
        return str.split('').reverse().join('');
    }

    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    ucWords(str) {
        return str.split(' ').map(word => this.ucFirst(word)).join(' ');
    }
}

// Пример использования

console.log("Тесты класса Mystring")

const str = new MyString();
console.log(str.reverse('abcde')); // 'edcba'
console.log(str.ucFirst('abcde')); // 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // 'Abcde Abcde Abcde'
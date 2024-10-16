class Validator {
    isEmail(email) {
        const regex = /^[A-Za-z]{2,}@[A-Za-z]{2,}\.[A-Za-z]{2,}$/;
        return regex.test(email);
    }

    isDomain(domain) {
        const regex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(domain);
    }

    isDate(date) {
        const regex = /^\d{2}[\.\s\-]\d{2}[\.\s\-]\d{4}$/;
        return regex.test(date);
    }

    isPhone(phone) {
        const regex = /^\+?375\s?[\-\(]?\d{2}[\-\)]?\s?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
        return regex.test(phone);
    }
}

console.log("Тесты класса Validator")

// Пример использования
const validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru')); // true
console.log(validator.isEmail('phphtml@mailru')); // false
console.log(validator.isDomain('phphtml.net')); // true
console.log(validator.isDomain('phphtmlnet')); // false
console.log(validator.isDate('12.05.2020')); // true
console.log(validator.isDate('12 05 2020')); // true
console.log(validator.isDate('2024 05 02')); // false
console.log(validator.isPhone('+375 (29) 817-68-92')); // true
console.log(validator.isPhone('+375 (29) 817-68-92-10')); // false
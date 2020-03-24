
class Utils {

    formatNumber = (number) => {
        const str = number.toString()
        let cleaned = ('' + str).replace(/\D/g, '');
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        };
    }
}

export const utils = new Utils();

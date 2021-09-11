class BMIService {
    static getIndex(weight, height) {
        return weight / (height * height);
    }
}

module.exports = BMIService;
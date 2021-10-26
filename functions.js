module.exports = {
    calculator: function (num1, operator, num2) {
      if (!num1) throw new TypeError("Numéro manquant1");
      if (!operator) throw new TypeError("Opérateur manquant");
      if (!num2) throw new TypeError("Numéro 2 manquant");
      if (operator == "*") return num1 * num2;
      if (operator == "^") return num1 ^ num2;
      if (operator == "+") return num1 + num2;
      if (operator == "-") return num1 - num2;
      if (operator == "/") return num1 / num2;
    },
    formatDate: function (date) {
      return new Intl.DateTimeFormat("en-US").format(date);
    },
  };


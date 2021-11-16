// RUN: tsc -t es5 -w tscode.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(holder, balance) {
        this._accountNumber = Math.floor(Math.random() * 1000) + 1;
        this.holder = holder;
        this._balance = balance;
        console.clear();
        console.log("- Instantiated! 🔥");
        console.log(this);
        console.log("🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿");
    }
    Object.defineProperty(Account.prototype, "accountNumber", {
        get: function () {
            return this._accountNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (value) {
            this._balance = value;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.addBalance = function (balance) {
        this.balance += balance;
        console.log("Saldo atualizado! 💵");
    };
    Account.prototype.reduceBalance = function (balance) {
        this.balance += balance;
        console.log("Saldo atualizado! 💸");
    };
    return Account;
}());
var AccountPJ = /** @class */ (function (_super) {
    __extends(AccountPJ, _super);
    function AccountPJ(cnpj, holder, balance) {
        var _this = _super.call(this, holder, balance) || this;
        _this.cnpj = cnpj;
        console.log("- Instantiated PJ! 🔥");
        console.log(_this);
        console.log("🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿");
        return _this;
    }
    AccountPJ.prototype.getBalancePJ = function () {
        var message = "Saldo dispon\u00EDvel: R$ " + this.getBalance() + " \uD83D\uDCB0";
        console.log(message);
        return message;
    };
    AccountPJ.prototype.depositBalance = function (value) {
        this.addBalance(value);
    };
    AccountPJ.prototype.drawBalance = function (value) {
        this.reduceBalance(value);
    };
    return AccountPJ;
}(Account));
var AccountPF = /** @class */ (function (_super) {
    __extends(AccountPF, _super);
    function AccountPF(cpf, holder, balance) {
        var _this = _super.call(this, holder, balance) || this;
        _this.cpf = cpf;
        console.log("- Instantiated PF! 🔥");
        console.log(_this);
        console.log("🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿");
        return _this;
    }
    AccountPF.prototype.getBalancePF = function () {
        var message = "Saldo dispon\u00EDvel: R$ " + this.getBalance() + " \uD83D\uDCB0";
        console.log(message);
        return message;
    };
    AccountPF.prototype.depositBalance = function (value) {
        this.addBalance(value);
    };
    AccountPF.prototype.drawBalance = function (value) {
        if (this.getBalance() > 0 && value <= this.getBalance()) {
            this.reduceBalance(value);
        }
    };
    return AccountPF;
}(Account));
// Instances
var accountPJ = new AccountPJ(46173051000116, "Titular PJ", 1000);
accountPJ.depositBalance(100);
accountPJ.getBalancePJ();
var accountPF = new AccountPF(12345678909, "Titular PF", 200);
accountPF.depositBalance(10);
accountPF.getBalancePF();

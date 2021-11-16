abstract class Account {
	private readonly _accountNumber: number;
	holder: string;
	private _balance: number;

	constructor(holder: string, balance: number) {
		this._accountNumber = Math.floor(Math.random() * 1000) + 1;
		this.holder = holder;
		this._balance = balance;
		console.clear();
		console.log("- Instantiated! 🔥");
		console.log(this);
		console.log(
			"🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿"
		);
	}

	public get accountNumber(): number {
		return this._accountNumber;
	}

	public get balance(): number {
		return this._balance;
	}

	public set balance(value: number) {
		this._balance = value;
	}

	protected getBalance(): number {
		return this.balance;
	}

	protected addBalance(balance: number): void {
		this.balance += balance;
		console.log("Saldo atualizado! 💵");
	}

	protected reduceBalance(balance: number): void {
		this.balance += balance;
		console.log("Saldo atualizado! 💸");
	}
}
class AccountPJ extends Account {
	cnpj: number;

	constructor(cnpj: number, holder: string, balance: number) {
		super(holder, balance);
		this.cnpj = cnpj;
		console.log("- Instantiated PJ! 🔥");
		console.log(this);
		console.log(
			"🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿"
		);
	}

	getBalancePJ(): string {
		const message = `Saldo disponível: R$ ${this.getBalance()} 💰`;
		console.log(message);

		return message;
	}
	depositBalance(value: number) {
		this.addBalance(value);
	}
	drawBalance(value: number) {
		this.reduceBalance(value);
	}
}
class AccountPF extends Account {
	cpf: number;

	constructor(cpf: number, holder: string, balance: number) {
		super(holder, balance);
		this.cpf = cpf;
		console.log("- Instantiated PF! 🔥");
		console.log(this);
		console.log(
			"🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿"
		);
	}

	getBalancePF(): string {
		const message = `Saldo disponível: R$ ${this.getBalance()} 💰`;
		console.log(message);

		return message;
	}
	depositBalance(value: number) {
		this.addBalance(value);
	}
	drawBalance(value: number) {
		if (this.getBalance() > 0 && value <= this.getBalance()) {
			this.reduceBalance(value);
		}
	}
}

// Instances
const accountPJ = new AccountPJ(46173051000116, "Titular PJ", 1000);
accountPJ.depositBalance(100);
accountPJ.getBalancePJ();
const accountPF = new AccountPF(11111111111, "Titular PF", 200);
accountPF.depositBalance(10);
accountPF.getBalancePF();

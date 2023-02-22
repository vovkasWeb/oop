abstract class Figura {
	abstract Ploshad(): number;
	abstract Perimetr(): number;
}

class Treugolnik extends Figura {
	public a: number;
	public b: number;
	public c: number;
	constructor(a: number, b: number, c: number) {
		super();
		this.a = a;
		this.b = b;
		this.c = c;
	}
	Ploshad():number{
		let p: number = (this.a + this.b +this.c)/2;
		return (p*(p- this.a) *(p- this.b) * (p- this.c));
	}
	Perimetr():number{
		return(this.a + this.b + this.c);
	}
}

class Pramougolnik extends Figura{
	public a: number;
	public b: number;

	constructor(a: number, b: number) {
		super();
		this.a = a;
		this.b = b;
	}
	Ploshad(): number {
		return this.a * this.b;
	}
	Perimetr(): number {
		return (this.a * this.b) *2;
	}
}

class Kvadrat extends Figura {
	public a: number;
	constructor(a: number) {
		super();
		this.a = a;
	}
	Ploshad(): number {
		return this.a * this.a;
	}
	Perimetr(): number {
		return this.a + this.a + this.a + this.a ;
	}
}
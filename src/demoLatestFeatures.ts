/* tslint:disable */
let str1:string = "test";
enum enumTest{
    test1=1,
    test2=2
}
interface firstInterface{
    a:number;
    b:number;
    c:number;
}
interface secondInterface{
    c:number;
    d:number;
}
class point{
    readonly x:number;
    readonly y:number;
}

interface SearchFunc {
    (source: string, subString: string): boolean;
}
interface StringDictionary {
    [index: string]: point;
}

export class SimpleTest{
    private readonly co:string;

    constructor(public bob:string){
        this.co = "sss";
    }

    public printHTML(str:string):void{
        let htmlObj:HTMLElement = document.getElementById("greeting");
        htmlObj.innerText = str;
    }

    public consolePrint(str:string){
        console.log(str);
    }

    public testTuple():void{
        let tupleX:[string, number, boolean] = ["me",1,true];
    }

    public testEnum():void{
        let valueEnum:enumTest = enumTest.test1;
    }

    public typeAssertion():void{
        let str:any = "";

        let converted:string = <string>str;
        let converted2:string = str as string;
    }

    public testDistructing():void{
        let arrayForDess:Array<string> = ["one", "two"];
        let [a, b] = arrayForDess;
        this.consolePrint(a);;
        this.consolePrint(b);
    }

    public testRemaining():void{
        let arrayRemaining:number[] = [1, 2, 3, 4, 5];
        let [t, v, ...u] = arrayRemaining;
    }
    public objectDistructing():void{
        let o = {a:1, b: 2};
        // rename property
        let {a:c,b:d=2}:{a:number, b:number} = o;

    }

    public spreadOperator(){
        let first:number[] = [1,2];
        let second:number[] = [3,4];
        let third:number[] = [...first, ...second];
    }

    public extendObjects(){
        let firstObj:firstInterface = {a:1,b:2,c:3};
        let secondObj:secondInterface ={c:4,d:6};
        type mergeInterfaces = firstInterface & secondInterface;
        let letfinalObj:mergeInterfaces = {...firstObj, ...secondObj};

    }

    public stringDic():void{
        let testDictionary:StringDictionary = {"sss":new point(),"tttt":new point()};
    }

}


interface newInterfaceOne{
    prop1:number;
}
interface newInterfaceTwo{
    prop2:number;
}
interface newInterfaceThree extends newInterfaceOne, newInterfaceTwo{
    prop3:number;
}
export class SimpleClassTwo implements newInterfaceThree {
    prop1:number;
    prop2:number;
    prop3:number;
    protected prop4:string;
    constructor(){
        this.prop4 = "init main class"
    }
}

export class SimpleClassThree extends SimpleClassTwo{
    private _testProp:string;
    static ST:string="asd";
    get testProp():string{
        return this._testProp;
    }
    set testProp(value:string){
        this._testProp = value;
    }
    constructor(){
        super();
        let test:any = SimpleClassThree.ST;
    }
}

abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

export class OneInsurerDepartment extends Department{

    constructor(){
        super("OneInsurer");;
    }
    printMeeting(){
        let myAdd: (baseValue:number, increment:number) => number = (x, y) => { return x + y; };
    }

    testMethod(){
        this.printName();
    }
}

//type guard.
export class cat {
    type:number=1;
    meaw(){
        console.log("mau")
    }
}

export class dog {
    type:number=2;
    bark(){
        console.log("mau")
    }
}

function isCat (petToCheck:cat|dog) : petToCheck is cat {
    return petToCheck.type==1;
}
function getCatOrDog():cat|dog{
    return new cat();
}
function checkTypeOf(){
    let valNumber:number = 1;
    let b:boolean = typeof valNumber =="number";
}
function checkInstanceOf(){
    let pet:cat = new cat();
    let isCat:boolean = pet instanceof cat;
}


function checkPet(){
    let pet:cat | dog = getCatOrDog();
    if(isCat(pet)){
        pet.meaw();
    }

}

//type aliases
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}
type Container<T> = { value: T };
type Easing = "ease-in" | "ease-out" | "ease-in-out";
type ttype = string | number | boolean;

function checkAliases(){
    let a:LinkedList<Person>;
    let b:Container<number> = {value:3};

}

//Polymorphic this
class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
}

function useCalc(){
    let v = new BasicCalculator(2).add(5);
}

//Index types
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}

function testIndexType(){

}



// let simpleObject: SimpleTest = new SimpleTest("sss");

// simpleObject.printHTML(`This is a ${str1}`);
// simpleObject.testDistructing();

// let oneInsurerDep:OneInsurerDepartment = new OneInsurerDepartment();

// oneInsurerDep.testMethod();


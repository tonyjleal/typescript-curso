(() => {

    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (name: string): string => `Hola ${name}`;
    const saveTheWorld = (): string => `El mundo está salvado`;

    let myFunction: (y:number, z:number) => number;
    let myFunction2: (y:string) => string;
    let myFunction3: () => string;
    // myFunction = 10;
    // console.log(myFunction);

    myFunction = addNumbers;
    console.log(myFunction(1,2));

    myFunction2 = greet;
    console.log(myFunction2('Fernando'));
    
    myFunction3 = saveTheWorld;
    console.log(myFunction3());



})();
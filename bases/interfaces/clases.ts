(()=>{

    interface Xmen {
        name: string,
        realName: string,
        mutantPower(id: number): string,
    }

    interface Human {
        age: number,
    }

    class Mutants implements Xmen, Human {
        constructor(
            public age: number,            
            public name: string,        
            public realName: string        
        ){}
            

        mutanPower(id: number) {
            return this.name.concat(this.realName);
        }
    }


})();
(() => {

    type Hero = {
        name: string, 
        age?: number, 
        powers: string[], 
        getName?: () => string 
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    }
    
    let superman: Hero = {
        name: 'Clark Ken',
        age: 60,
        powers: ['Súper velocidad'],
        getName() {
            return this.name;
        }
    }


})();
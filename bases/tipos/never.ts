(() => {


    const error = (message: string):(never|number) => {
       
        
        if(message) {
            throw new Error(message);
        }

        return 1;
    }


})();
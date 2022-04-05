const buyFlightTicket = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;
            if (error) {
                reject("Sorry your payment was not successful.");
            
            } else {
                resolve("Thank you, your payment was successful.");
            }
        }, 3000);
    });
}

buyFlightTicket().then((success) => console.log(success))
.catch((error) => console.log(error));
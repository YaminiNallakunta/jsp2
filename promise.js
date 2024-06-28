const checkEO = (num) => {
    return new Promise((resolve, reject)=> {
        if(num % 2== 0){
            resolve("This is even number.")
        }
        else
        {
            reject("This is odd number.")
        }
    });
};

checkEO(3).then(res => {
    console.log(res);
})
.catch(error =>{
    console.error(error);
});

checkEO(6).then(res => {
    console.log(res);
})
.catch(error =>{
    console.error(error);
})
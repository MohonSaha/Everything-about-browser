

const showAlert = () =>{
    alert('Dosto give me some money');
}

const lendMoney = () =>{
    const returnOfConfirm = confirm('Willyou lend me 500 tk');
    console.log(returnOfConfirm);
    if(returnOfConfirm === true){
        alert('Tui amar janer dostw')
    }
    else(
        alert('DGM')
    )
}


const getInfo = () =>{
    const returnOfPrompt = prompt('tor name ki re ?')
    console.log(returnOfPrompt);
    if(returnOfPrompt === null){
        alert('Name na dile kam nai.');
    }
    else{
        alert(returnOfPrompt + ' Wellcome to this world')
    }
}
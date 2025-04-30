function subscribe()
{
    let subs = document.querySelector(".subscribe-btn");
    if (subs.innerText === "Subscribe"){
        subs.innerHTML = 'Subscribed';
    }
    else{
        subs.innerHTML = 'Subscribe';
    }
}

function calculate()
{
    const userInput = document.querySelector(".orderPrice");
    let costPrice = Number(userInput.value);
    if (costPrice < 40)
    {
        costPrice += 10;
    }

    document.querySelector(".total-price").innerHTML = `$${costPrice}`;
}
function userPressesEnter(event)
{
    console.log('Typing....')
    if(event.key === 'Enter')
    {
        calculate();
    }
}
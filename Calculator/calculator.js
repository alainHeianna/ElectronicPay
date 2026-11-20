let form = document.getElementById("random-form");
let amount = document.getElementById("amount");
let result = document.getElementById("random-results");

form.addEventListener("submit", process);

function process(e) {
    e.preventDefault();

    let inputAmount = Number(amount.value);

    try {
        if (inputAmount < 3) {
            throw new Error("Amount under 2");
        } else if (inputAmount > 10) {
            throw new Error("Amount under 10");
        }

        console.log("Correct amount");
        const randomAmount = [];

        for (let i = 0; i < inputAmount; i++) {
            let numRandom = Math.round(Math.random()*20);
            randomAmount.push(numRandom);
            console.log(randomAmount);
        }

        let li_big = document.createElement("li");
        let li_low = document.createElement("li");
        let li_under10 = document.createElement("li");
        let li_above10 = document.createElement("li");
        let li_pair = document.createElement("li");
        let li_odd = document.createElement("li");
        let li_order = document.createElement("li");
        let li_orderInverse = document.createElement("li"); 


        let big = randomAmount[0];
        let low = randomAmount[0];
        let under10 = randomAmount.filter(num => num < 10);
        let above10 = randomAmount.filter(num => num > 10);
        let pair = randomAmount.filter(num => num % 2 === 0);
        let odd = randomAmount.filter(num => num % 2 !== 0);
        let order = [...randomAmount].sort((a,b) => a - b);
        let orderInverse = [...randomAmount].sort((a,b) => b - a);

        result.innerHTML = "";

        for (const num of randomAmount) {

            if (num > big) {
                big = num;
            }

            if (num < low) {
                low = num;
            }
        }

        let li = document.createElement("li");
        li.textContent = randomAmount;
        result.append(li);

        li_big.textContent = `Biggest number: ${big}`;
        li_low.textContent = `Lowest number: ${low}`;
        li_under10.textContent = `Numbers under 10: ${under10.length}`;
        li_above10.textContent = `Numbers above 10: ${above10.length}`;
        li_pair.textContent = `Pair numbers: ${pair}`;
        li_odd.textContent = `Odd numbers: ${odd}`;
        li_order.textContent = `${order}`;
        li_orderInverse.textContent = `${orderInverse}`;
        
        result.append(li_big);
        result.append(li_low);
        result.append(li_under10);
        result.append(li_above10);
        result.append(li_pair);
        result.append(li_odd);
        result.append(li_order);
        result.append(li_orderInverse);

        console.log(`Biggest: ${big}`);
        console.log(`Lowest: ${low}`);
        console.log(`Amount under 10: ${under10.length}`);
        console.log(`Amount above 10: ${above10.length}`);
        console.log(`Pair: ${pair}`);
        console.log(`Odd: ${odd}`);
        console.log(`Order: ${order}`);
        console.log(`Inverse order: ${orderInverse}`);

    } catch (error) {
        result.innerHTML = "";
        console.log(error.message);

        let li = document.createElement("li");
        li.textContent = error.message;
        result.append(li);
    }
    
}
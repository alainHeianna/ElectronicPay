let form = document.getElementById("form-search");
let search = document.getElementById("phones");
let result = document.getElementById("result-search");

form.addEventListener("submit", show);

async function show(e) {

    e.preventDefault();
    result.innerHTML = "";
    let inputSearch = search.value.toLowerCase().trim();
    
    try {
        if (inputSearch !== "phones") {
            throw new Error("Wrong search");
        } 
        console.log("Search completed");

        const library = await fetch("electronicPay.txt");
        const data = await library.json();

        console.log(data);

        if (inputSearch === "phones") {
            for (const product of data) {
                let li = document.createElement("li");
                li.textContent = `
                    ${product.name.toUpperCase()}
                    
                    Storage: ${product.storage}
                    Memory RAM: ${product.ram}
                    Processor: ${product.processor}
                    ${product.price} argentine pesos
                `
                let inputBuy = document.createElement("input");
                inputBuy.setAttribute("type", "number");
                inputBuy.setAttribute("placeholder", "amount");
                let btnBuy = document.createElement("button");
                btnBuy.setAttribute("id", "btnBuy");
                btnBuy.textContent = "Buy"
                result.append(li);
                li.append(inputBuy);
                li.append(btnBuy);

                product.amountPurchased = 0;
                btnBuy.addEventListener("click", change); 

                function change() {
                    let total = Number(inputBuy.value);

                    if (total <= 0) {
                        console.log("Wrong amount");
                        return;
                    } else {
                        product.amountPurchased = total;
                        console.log(data);
                    }
                }

            }
        }

    } catch (error) {
        console.log(error.message);
    }
}
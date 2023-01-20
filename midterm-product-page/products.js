var products = [];

$(document).ready(function () {
    $.ajax({
        url: "data.json"
    }).done(function (data) {
        console.log("DONE", data)
        for (let d in data) {
            products.push(data[d])
        }
        loadData()
    });
});

function deleteProduct(index) {
    delete products[index] // Delete element from array
    loadData();
};

function clearProducts() {
    products = [];
    loadData();
};

function addProduct() {
    let newItem = $('#products').val();
    let newPPU = $('#newPPU').val();
    let newQuantity = $('#newQuantity').val();
    let newDiscount = $('#newDiscount').val();
    let isOldItem = false;

    products.forEach(product => {
        if (product.item == newItem && product.ppu == newPPU) {
            isOldItem = true;
        } 
    });

    if (isOldItem) {
        products.forEach(product => {
            if (product.item == newItem && product.ppu == newPPU) {
                product.quantity = (parseInt(product.quantity) + parseInt(newQuantity)).toString();
            } 
        });
    } else {
        let productObject = {
            item: newItem,
            ppu: newPPU,
            quantity: newQuantity,
            discount: newDiscount
        }
        products.push(productObject);
    }

    loadData();
};

function loadData() {
    let allRows = ""
    let totalDiscount = 0
    let total = 0

    for (let p in products) {
        let cellIcon = `<td style="width: 30px;"><img src='trash-solid.svg' class='icon' onclick="deleteProduct(${p})"></td>`
        let cellItem = `<td> ${products[p].item} </td>`
        let cellQuantity = `<td class="text-right">${products[p].quantity}</td>`
        let cellPPU = `<td class="text-right">${parseInt(products[p].ppu).toFixed(2)}</td>`
        let cellDiscount = `<td class="text-right">${parseInt(products[p].discount).toFixed(2)}</td>`
        let amount = (parseInt(products[p].ppu) * parseInt(products[p].quantity)) - parseInt(products[p].discount)
        let cellAmount = '<td class="text-right">' + amount.toFixed(2) + "</td>"
        let row = `<tr>${cellIcon}${cellQuantity}${cellItem}${cellPPU}${cellDiscount}${cellAmount}</tr>`

        totalDiscount += parseInt(products[p].discount)
        total += amount
        allRows += row
    }

    $('#product-body').html(allRows);
    $('#total').html(total.toFixed(2));
    $('#total-discount').html(totalDiscount.toFixed(2));
};
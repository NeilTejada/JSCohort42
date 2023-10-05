function productDetails() {
  let productName = prompt("Enter the product name: ");
  let priceOfProduct = Number(prompt("Enter price of product:"));
  let quantityOfProducts = Number(prompt("Enter how many you will purchase"));

  const salesTaxRate = 0.0725;
  const productTotal = priceOfProduct * quantityOfProducts;
  const salesTax = productTotal * salesTaxRate;
  const totalWithTax = productTotal + salesTax;

  document.getElementById("product-results").innerHTML = `
    <li>
      <p>Product Name: ${productName}</p>
      <p>Price of Product: $${priceOfProduct}</p>
      <p>Quantity: ${quantityOfProducts}</p>
      <p>Sales Tax Rate: ${salesTaxRate * 100}%</p>
      <p>Product Total: $${productTotal.toFixed(2)}</p>
      <p>Sales Tax: $${salesTax.toFixed(2)}</p>
      <p>Total with Tax: $${totalWithTax.toFixed(2)}</p>
    </li>
  `;

  //used the console.log to display results when inspecting.
  console.log("Product Name: " + productName);
  console.log("Price of Product: " + priceOfProduct);
  console.log("Quantity: " + quantityOfProducts);
  console.log("Sales Tax Rate: " + salesTaxRate * 100 + "%");
  console.log("Product Total: $" + productTotal);
  console.log("Sales Tax: $" + salesTax.toFixed(2));
  console.log("Total with Tax: $" + totalWithTax.toFixed(2));
}

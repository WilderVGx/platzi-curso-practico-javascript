function aplicarDescuento(){
    let price = document.getElementById("price");
    let precio = parseFloat(price.value);

    let discount = document.getElementById("discount");
    let descuento = parseFloat(discount.value);

    let precioFinal = (precio * (100-descuento))/100;

    const p = document.getElementById("priceWithDiscount");
    p.innerText=`El precio final es: S/.${precioFinal}`;
}

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;
  
    return precioConDescuento;
  
  }
  
  function onClickButtonPriceDiscount() {
      const inputPrice = document.getElementById("InputPrice");
      const priceValue = inputPrice.value;
      
      const inputCoupon = document.getElementById("inputCoupon");
      const couponValue = inputCoupon.value;
  
      const resultCoupon = document.getElementById("priceWithCoupon")
      
      let descuento;
      let precioConDescuento; 
    
      switch(true) {
        case couponValue === "JuanDC_es_Batman":
          descuento = 15;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido, el precio con descuento es de: S/.${precioConDescuento}`
        break;
        case couponValue === "pero_no_le_digas_a_nadie":
          descuento = 30;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido, el precio con descuento es de: S/.${precioConDescuento}`
        break;
        case couponValue === "es_un_secreto":
          descuento = 25;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido, el precio con descuento es de: S/.${precioConDescuento}`
        break;
        default:
          resultCoupon.innerText = "el cupón ingresado no es valido"
      }
  }
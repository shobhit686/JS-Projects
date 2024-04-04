const qr_input = document.getElementById("qr-input");
const qr_btn = document.getElementById("qr-btn");
const qr_img = document.getElementById("qr-img");

qr_btn.addEventListener('click',() => {
    const inputValue = qr_input.value;
    if (!inputValue){
        alert("Please give appropriate input");
        return;
    }else{
        qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qr_img.alt = `QR Code for ${inputValue}`;
    }
})
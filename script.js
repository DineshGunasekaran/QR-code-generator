// QR code generator

// QR generator API: https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

const imgDiv = document.getElementById('imgDiv');
const inputText = document.getElementById('inputText');
const qrImage = document.getElementById('qrImage');

function generateQR() {
  if (inputText.value.length > 0) {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;

  imgDiv.classList.add('show-qr');
  } else {
    inputText.classList.add('error'); // After some time we need to disable this class for next process. We can use settime out.
    
    imgDiv.classList.remove('show-qr');
    qrImage.src = "";

    setTimeout(() => {
      inputText.classList.remove('error');
      
    }, 1000);
  }
  
}
let customerImages = [
  "https://vignette.wikia.nocookie.net/prettylittleliars/images/7/70/Shay-mitchell-pantene-thumb-233x350-76741.jpg/revision/latest?cb=20110624150853",
  "http://www.lse.ac.uk/GranthamInstitute/wp-content/uploads/2014/03/AM_photo-233x350.jpg",
  "http://www.lse.ac.uk/GranthamInstitute/wp-content/uploads/2016/12/profile-pic-2-233x350.jpeg",
  "http://www.bleedingcool.com/wp-content/uploads//2013/05/henry-cavill-233x350.jpg?x70969",
  "http://1vze7o2h8a2b2tyahl3i0t68.wpengine.netdna-cdn.com/wp-content/uploads/2017/08/PendletonHeadshot-233x350.jpeg",
  "https://www.carnegiefoundation.org/wp-content/uploads/2017/08/Pierson-233x350.jpg",
  "https://mk0hungercenteradnlo.kinstacdn.com/wp-content/uploads/2018/02/Maria-Cristina-Chicuen-233x350.jpg",
  "https://di-uploads-pod1.dealerinspire.com/andymohrtoyota/uploads/2017/03/Jhonathan_Mijangos-Sales_Consultant-233x350.png",
  "https://jackscamp.com/wp-content/uploads/2018/01/Kyle-Sylor_August-2018_forweb-233x350.jpg",
  "http://www.collegemediamatters.com/wp-content/uploads/2014/09/Christian-Lee-Courtesy-of-Lee-233x350.jpg",
  "http://27avnc3dnr2c247vhv4aaqj1.wpengine.netdna-cdn.com/wp-content/uploads/2017/11/April-Kitchell-233x350.jpg",
  "https://mk0hungercenteradnlo.kinstacdn.com/wp-content/uploads/2018/02/Maggie-You-Ming-233x350.jpg"
];

let customerNames = [];

customerImages.forEach(image => {
  customerNames.push(prompt("Hello, please enter your name."));
});

let customerInfo = document.querySelector(".customer-info");
let button = document.querySelector(".next");

button.addEventListener("click", () => {
  if (customerNames.length !== 0 && customerImages.length !== 0) {
    for (let i = 0; i < customerNames.length; i++) {
      customerInfo.innerHTML = `<div><h1 class=>${customerNames[i]}</h1></div>
           <div><img src="${customerImages[i]}"></div>`;
    }
    customerImages.pop();
    customerNames.pop();
  }
});

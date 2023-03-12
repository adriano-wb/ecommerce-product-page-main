window.onload = function() {
  let slideIndex = 0;
  let slideIndexModal = 0;
  const slides = document.getElementsByClassName("slideshow__img");
  const dots = document.getElementsByClassName("dot");

  // Modal slide
  const modalSld = document.querySelector(".modal-slides");
  const slidesModalImg = document.getElementsByClassName("slideshow-modal__img");
  const dotsModal = document.getElementsByClassName("modal-dot");
  const closeModal = document.getElementById("closeModal");
  const bgDarkModal = document.getElementById("bgModal");

  const proximoSldBtn = document.getElementById("nextSld");
  const anteriorSldBtn = document.getElementById("prevSld");

  const menuCart = document.querySelector(".menu-cart");
  const addToCartBtn = document.querySelector(".add-button");
  const diminuirQntItem = document.getElementById("diminuir");
  const aumentarQntItem = document.getElementById("aumentar");
  const textoNoDropdownValor = document.querySelector(".cart-dropdown-price");
  const descricaoProdutoModal = document.querySelector(".cart-dropdown-product");
  descricaoProdutoModal.style.display = "none";
  const trashDropdownCart = document.querySelector(".cart-dropdown-trash__icon");

  const cartQntBadgeIconTrash = document.getElementById("cartQnt");

  let totaQuantiaDeProduto = "1";


  /* ----------------------- Slideshow --------------------- */
  slideshow(slideIndex);

  function currentSlide(n) {
    slideshow(slideIndex = n);
  }

  function currentSlideModal(n) {
    slideshowModal(slideIndexModal = n);
  }

  function slideModalNext() {
    slideshowModal(slideIndexModal = (slideIndexModal + 1) % dotsModal.length);
  }

  function slideModalPrev() {
    slideshowModal(slideIndexModal -= 1);
  }

  slideshowModal(slideIndexModal);
  function slideshowModal(n) {

    for (let i = 0; i < slidesModalImg.length; i++) {
      slidesModalImg[i].style.display = "none";
    }

    for (let i = 0; i < dotsModal.length; i++) {
      dotsModal[i].classList.remove("active");
    }

    if (n < 0) {
      slideIndexModal = slides.length-1;
    }

    slidesModalImg[slideIndexModal].style.display = "block";
    dotsModal[slideIndexModal].classList.add("active");
  }

  function slideshow(n) {
    for(let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    if (n < 0) {
      slideIndex = slides.length-1;
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
  }

  /* ---------------------- End Slideshow ----------------------- */

  /* ------------------------ Modal ------------------------ */
  function fecharModal() {
    modalSld.classList.add("fecharModalAnim");
    modalSld.classList.remove("abrirModalAnim");

    if (modalSld.className.indexOf("fecharModalAnim") == -1) {
      modalSld.addEventListener("animationend", () => {
        modalSld.style.display = "none";
      })
    }
  }

  function abrirModal() {
    currentSlideModal(slideIndexModal = slideIndex);
    modalSld.style.display = "block";
    modalSld.classList.remove("fecharModalAnim");
    modalSld.classList.add("abrirModalAnim");
  }

  /* -------------------------- CART DROPDOWN ----------------------- */


  function funcaoDeContagemDoProduto() {
    let totalQntItems = 1;
    let multiplyValueTotal = 0;
    let multiplyValue = Number.parseFloat(textoNoDropdownValor.firstElementChild.firstChild.nodeValue.match(/[0-9]./g).join(""));

    diminuirQntItem.addEventListener("click", () => {
      if (totalQntItems > 1) {
        totalQntItems--;

        cartQntBadgeIconTrash.innerText = totalQntItems;
      }
    });

    aumentarQntItem.addEventListener("click", () => {
      totalQntItems++;
      if (totalQntItems > 1) {
        multiplyValueTotal = totalQntItems * multiplyValue;

        textoNoDropdownValor.firstElementChild.firstChild.nodeValue = "$125.00 x ";

        textoNoDropdownValor.lastElementChild.firstChild.nodeValue = "$" + multiplyValueTotal + ".00";
      }

      aumentarQntItem.previousElementSibling.firstChild.nodeValue = totalQntItems;

      cartQntBadgeIconTrash.innerText = totalQntItems;

      addToCartBtn.addEventListener("click", () => {
        cartQntBadgeIconTrash.style.display = "block";

        menuCart.addEventListener("click", () => {
          let alternateModalCart = true;
          descricaoProdutoModal.style.display = "flex";
          document.querySelector(".cart-dropdown").classList.toggle("cart-dropdown-alterne");
        })
      })
    });

    trashDropdownCart.addEventListener("click", () => {
      trashDropdownCart.parentNode.parentNode.style.display = "none";
      multiplyValueTotal = 0;
      totalQntItems = 1;

      cartQntBadgeIconTrash.innerText = totalQntItems;
      cartQntBadgeIconTrash.style.display = "none";
      aumentarQntItem.previousElementSibling.firstChild.nodeValue = totalQntItems;
    })
  }

  funcaoDeContagemDoProduto();



  /*----------------------------------- FALLBACK addEventListener ---------*/
  /*--------------------------------- FALLBACK addEventListener ---------*/
  /*----------------------------------- FALLBACK addEventListener ---------*/
  /*--------------------------------- FALLBACK addEventListener ---------*/

  if (document.addEventListener) {
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", () => currentSlide(i), false);
    }

    for (let i = 0; i < dots.length; i++) {
      dotsModal[i].addEventListener("click", () => currentSlideModal(i), false);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].addEventListener("click", abrirModal);
      closeModal.addEventListener("click", fecharModal);
      bgDarkModal.addEventListener("click", fecharModal);
    }

    proximoSldBtn.addEventListener("click", slideModalNext);
    anteriorSldBtn.addEventListener("click", slideModalPrev);

    anteriorSldBtn.addEventListener("mousemove", () => {
      anteriorSldBtn.firstElementChild.src = "./images/icon-previous-active.svg";
    })
    proximoSldBtn.addEventListener("mousemove", () => {
      proximoSldBtn.firstElementChild.src = "./images/icon-next-active.svg";
    })

    anteriorSldBtn.addEventListener("mouseout", () => {
      anteriorSldBtn.firstElementChild.src = "./images/icon-previous.svg";
    })
    proximoSldBtn.addEventListener("mouseout", () => {
      proximoSldBtn.firstElementChild.src = "./images/icon-next.svg";
    })
  }
}

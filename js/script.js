window.onload = () => {
  /* -------------------------- VARIÁVEIS ------------------------------ */

  /* -------------- Parte do cart dropdown e somas --------------------- */
  /* -------------- Parte do cart dropdown e somas --------------------- */
  /* -------------- Parte do cart dropdown e somas --------------------- */
  /* -------------- Parte do cart dropdown e somas --------------------- */
  /* -------------- Parte do cart dropdown e somas --------------------- */
  /* -------------- Parte do cart dropdown e somas --------------------- */

  // Pequeno "amostral" sinalizando quantos produtos foram
  // colocados no carrinho
  const amostralQntProductCart = document.getElementById("cartQnt");

  // Botão para abrir o dropdown com os produtos no carrinho
  const botaoAbrirCartDropdown = document.getElementById("btnDropdownCart");

  // Mensagem carrinho vazio
  const emptyCartMsg = document.getElementById("msgVazio");

  // Conteúdo "carrinho" contendo produto
  const cartDropdownContainer = document.querySelector(".cart-dropdown");

  // Produto no carrinho
  const cartProductContent = document.querySelectorAll(".cart-dropdown-product");

  // Botão Checkout
  const btnCheckoutProduct = document.getElementById("btnCheckout");

  // Botão adicionar ao carrinho
  const btnAddToCartProduct = document.getElementById("addToCart");

  // Botão excluír produto do cart
  const excluirProdutoCarrinho = document.querySelector(".cart-dropdown-trash");

  // Texto com preço vezes a quantidade de produtos escolhidos
  const textPriceToCart = document.querySelector(".cart-dropdown-price");

  // Texto com preço total
  const totalPriceProduct = document.getElementById("totalPrice");

  // Valor que será adicionado ao carrinho
  let valorAdicionadoAoCarrinho = 1;

  // Valor total calculado
  let valorTotalSomandoItem = 0;

  // Botão decrementar quantia de produtos
  const quantiaDecrementa = document.getElementById("diminuir");

  // Botão incrementar quantia de produtos
  const quantiaIncrementa = document.getElementById("aumentar");

  // Exibidor de quantidade de produtos escolhida
  const quantidadeEscolhidaResult = document.querySelector(".quantity__value");

  // Preço único do tênis
  const precoUnicoProduto = Number(totalPriceProduct.firstChild.nodeValue.match(/[0-9]./g).join(""));

  // Variável para verificar se foi adicionado produto no carrinhno
  let itemAdicionado = false;

  // Nenhum produto foi adicionado ao carrinho
  cartProductContent[0].style.display = "none";

  // Ocultar botão de checkout
  btnCheckoutProduct.style.display = "none";

  /* -------------- Parte do efeitos de slideshow  --------------------- */
  /* -------------- Parte do efeitos de slideshow  --------------------- */
  /* -------------- Parte do efeitos de slideshow  --------------------- */
  /* -------------- Parte do efeitos de slideshow  --------------------- */
  /* -------------- Parte do efeitos de slideshow  --------------------- */
  /* -------------- Parte do efeitos de slideshow  --------------------- */
  let slideIndex = 0;
  let slideIndexModal = 0;
  const slides = document.getElementsByClassName("slideshow__img");
  const dots = document.getElementsByClassName("dot");
  const modalSld = document.querySelector(".modal-slides");
  const slidesModalImg = document.getElementsByClassName("slideshow-modal__img");
  const dotsModal = document.getElementsByClassName("modal-dot");
  const closeModal = document.getElementById("closeModal");
  const bgDarkModal = document.getElementById("bgModal");
  const proximoSldBtn = document.getElementById("nextSld");
  const anteriorSldBtn = document.getElementById("prevSld");

  const anteriorSldBtnMobile = document.getElementById("prevSldMobile");
  const proximoSldBtnMobile = document.getElementById("nextSldMobile");


  // Viriável menu principal botão
  const menu = document.getElementsByClassName("menu-list");
  const btnMenu = document.getElementById("btnMenu");
  const btnFecharMenu = document.getElementsByClassName("menu-fechar-icon")
  const fundoPretoMenu = document.getElementsByClassName("fundo-preto-menu");

  // Media query para atribuir efeitos apenas para Mobile
  const mediaMobile = window.matchMedia("(min-width: 375px)").matches;

  /* -------------------------------------- FIM VARIÁVEIS ---------------------------------- */

  function trabalharQuantiaAdicionadaAoCarrinho() {
    // Exibir preço total
    valorTotalSomandoItem = precoUnicoProduto * valorAdicionadoAoCarrinho;

    // Exibe o valor total acordado
    totalPriceProduct.innerText = "$" + valorTotalSomandoItem.toFixed(2);
  }

  /* ------------------------------- SLIDESHOW FUNÇÕES ------------------------------------- */
  /* ------------------------------- SLIDESHOW FUNÇÕES ------------------------------------- */
  /* ------------------------------- SLIDESHOW FUNÇÕES ------------------------------------- */
  /* ------------------------------- SLIDESHOW FUNÇÕES ------------------------------------- */
  /* ------------------------------- SLIDESHOW FUNÇÕES ------------------------------------- */
  /* ------------------------------- SLIDESHOW FUNÇÕES ------------------------------------- */
  /* ------------------------------- SLIDESHOW FUNÇÕES ------------------------------------- */
  /* ----------------------- Slideshow --------------------- */
  slideshow(slideIndex);

  function currentSlide(n) {
    slideshow(slideIndex = n);
  }

  function currentSlideModal(n) {
    slideshowModal(slideIndexModal = n);
  }

  function slideNextMobile() {
    slideshow(slideIndex = (slideIndex + 1) % slides.length);
  }

  function slidePrevMobile() {
    slideshow(slideIndex -= 1);
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
    if (document.addEventListener) {
      window.addEventListener("keydown", moverComTeclas);
      window.removeEventListener("keydown", moverComTeclasModal);
    } else {
      window.attachEvent("keydown", moverComTeclas);
      window.detachEvent("keydown", moverComTeclasModal);
    }

    if (modalSld.className.indexOf("fecharModalAnim") == -1) {
      if (document.addEventListener) {
        modalSld.addEventListener("animationend", () => {
          modalSld.style.display = "none";
        })
      } else {
        modalSld.attachEvent("onanimationend", function() {
          modalSld.style.display = "none";
        })
      }
    }
  }

  function abrirModal() {
    currentSlideModal(slideIndexModal = slideIndex);
    modalSld.style.display = "block";
    modalSld.classList.remove("fecharModalAnim");
    modalSld.classList.add("abrirModalAnim");
    if (document.removeEventListener && document.addEventListener) {
      window.removeEventListener("keydown", moverComTeclas);
      window.addEventListener("keydown", moverComTeclasModal);
    } else {
      window.detachEvent("onkeydown", moverComTeclas);
      window.attachEvent("keydown", moverComTeclasModal);
    }
  }

  function slideModalNext() {
    slideshowModal(slideIndexModal = (slideIndexModal + 1) % dotsModal.length);
  }

  function slideModalPrev() {
    slideshowModal(slideIndexModal -= 1);
  }

  /* -------------------------- MENU PRINCIPAL --------------------------- */
  function finalizaAnimFundoPreto() {
    fundoPretoMenu[0].style.display = "none";
  }

  function menuResponsivo() {
    menu[0].classList.add("responsivo");
    fundoPretoMenu[0].style.display = "block";

    fundoPretoMenu[0].removeEventListener("animationend", finalizaAnimFundoPreto);
    fundoPretoMenu[0].style.animationName = "aberturaLenta";
  }

  function fecharMenuResponsivo() {
    menu[0].style.width = "0";
    menu[0].classList.remove("responsivo");
    fundoPretoMenu[0].style.animationName = "fechamentoLenta";
    fundoPretoMenu[0].addEventListener("animationend", finalizaAnimFundoPreto);
  }

  function moverComTeclas(evt) {
    if (evt.key === "ArrowRight") {
      slideshow(slideIndex = (slideIndex + 1) % slides.length);
    }

    if (evt.key === "ArrowLeft") {
      slideshow(slideIndex -= 1);
    }

  }

  function moverComTeclasModal(evt) {
    if (evt.key === "ArrowRight") {
      slideshowModal(slideIndexModal = (slideIndexModal + 1) % slidesModalImg.length);
    }

    if (evt.key === "ArrowLeft") {
      slideshowModal(slideIndexModal -= 1);
    }
  }

  /* --- Alternativa de fallback para suporte ao addEventListener --- */
  if (document.addEventListener) {
    /* Botão de adicionar ao carrinho evento */
    btnAddToCartProduct.addEventListener("click", () => {

      // Atualizar preço somando a quantidade de produto escolhida
      if (valorAdicionadoAoCarrinho > 0) {
        if (!itemAdicionado) {
          itemAdicionado = true;
          trabalharQuantiaAdicionadaAoCarrinho();

          // Texto com valor vezes valorAdicionadoAoCarrinho
          textPriceToCart.firstElementChild.firstChild.nodeValue =
            `$125,00 x ${valorAdicionadoAoCarrinho}`;
              // Exibir quantidade de produtos no icone de carrinho
              amostralQntProductCart.firstChild.nodeValue = valorAdicionadoAoCarrinho;
              amostralQntProductCart.style.display = "block";
        }

      // Exbir produto adicionado ao carrinho
      cartProductContent[0].style.display = "flex";

      // Exibir botão de checkout
      btnCheckoutProduct.style.display = "block";

      // Ocultar mensagem carrinho vazio
      emptyCartMsg.style.display = "none";
    }
    });

    /* Botão para ver carrinho de compras */
    botaoAbrirCartDropdown.addEventListener("click", () => {
      cartDropdownContainer.classList.toggle("cart-dropdown-alterne");
    });

    /* Botão decrementar quantidade de produtos no carrinho */
    quantiaDecrementa.addEventListener("click", () => {
      if (valorAdicionadoAoCarrinho > 0) {
        valorAdicionadoAoCarrinho--;

        // Exibe a quantidade de produtos escolhida
        quantidadeEscolhidaResult.firstChild.nodeValue = valorAdicionadoAoCarrinho;
      }
    })

    /* Botão incrementar quantidade de produtos no carrinho */
    quantiaIncrementa.addEventListener("click", () => {
      valorAdicionadoAoCarrinho++;

      // Exibe a quantidade de produtos escolhida
      quantidadeEscolhidaResult.firstChild.nodeValue = valorAdicionadoAoCarrinho;
    });

    /* Evento para excluír produto do carrinho de compras */
    excluirProdutoCarrinho.addEventListener("click", () => {
      // Apagar produto atual no carrinho
      cartProductContent[0].style.display = "none";

      // Ocultar botão de checkout
      btnCheckoutProduct.style.display = "none";

      // Exibír mensagem carrinho vazio
      emptyCartMsg.style.display = "block";

      // Ocultar mini notificação de quantidade carrinho de compras
      amostralQntProductCart.style.display = "none";

      itemAdicionado = false;
    })

    /* Eventos para slideshow e modal de galeria de imagens */
    /* Eventos para slideshow e modal de galeria de imagens */
    /* Eventos para slideshow e modal de galeria de imagens */
    /* Eventos para slideshow e modal de galeria de imagens */
    /* Eventos para slideshow e modal de galeria de imagens */
    /* Eventos para slideshow e modal de galeria de imagens */
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", () => currentSlide(i), false);
    }

    for (let i = 0; i < dots.length; i++) {
      dotsModal[i].addEventListener("click", () => currentSlideModal(i), false);
    }

    if (mediaMobile) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].addEventListener("click", abrirModal);
        closeModal.addEventListener("click", fecharModal);
        bgDarkModal.addEventListener("click", fecharModal);
      }

      closeModal.addEventListener("mousemove", () => {
        closeModal.firstElementChild.src = "images/icon-close-hover.svg";
      })

      closeModal.addEventListener("mouseout", () => {
        closeModal.firstElementChild.src = "images/icon-close.svg";
      })
    } else {
      modalSld.style.display = "none";
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

    window.addEventListener("keydown", moverComTeclas);

    proximoSldBtnMobile.addEventListener("click", slideNextMobile);
    anteriorSldBtnMobile.addEventListener("click", slidePrevMobile);

    btnMenu.addEventListener("click", menuResponsivo);
    btnFecharMenu[0].addEventListener("click", fecharMenuResponsivo);
    fundoPretoMenu[0].addEventListener("click", fecharMenuResponsivo);
  } else {
    /* Botão de adicionar ao carrinho evento */
    btnAddToCartProduct.attachEvent("onclick", function() {
      // Exibir quantidade de produtos no icone de carrinho
      amostralQntProductCart.firstChild.nodeValue = valorAdicionadoAoCarrinho;
      amostralQntProductCart.style.display = "block";

      // Atualizar preço somando a quantidade de produto escolhida
      if (!itemAdicionado) {
        itemAdicionado = true;
        trabalharQuantiaAdicionadaAoCarrinho();

        // Texto com valor vezes valorAdicionadoAoCarrinho
        textPriceToCart.firstElementChild.firstChild.nodeValue =
          `$125,00 x ${valorAdicionadoAoCarrinho}`;
      }

      // Exbir produto adicionado ao carrinho
      cartProductContent[0].style.display = "flex";

      // Exibir botão de checkout
      btnCheckoutProduct.style.display = "block";

      // Ocultar mensagem carrinho vazio
      emptyCartMsg.style.display = "none";
    });

    /* Botão para ver carrinho de compras */
    botaoAbrirCartDropdown.attachEvent("onclick", function() {
      cartDropdownContainer.classList.toggle("cart-dropdown-alterne");
    });

    /* Botão decrementar quantidade de produtos no carrinho */
    quantiaDecrementa.attachEvent("onclick", function() {
      if (valorAdicionadoAoCarrinho > 1) {
        valorAdicionadoAoCarrinho--;

        // Exibe a quantidade de produtos escolhida
        quantidadeEscolhidaResult.firstChild.nodeValue = valorAdicionadoAoCarrinho;
      }
    })

    /* Botão incrementar quantidade de produtos no carrinho */
    quantiaIncrementa.attachEvent("onclick", function() {
      valorAdicionadoAoCarrinho++;

      // Exibe a quantidade de produtos escolhida
      quantidadeEscolhidaResult.firstChild.nodeValue = valorAdicionadoAoCarrinho;
    });

    /* Evento para excluír produto do carrinho de compras */
    excluirProdutoCarrinho.attachEvent("onclick", function() {
      // Apagar produto atual no carrinho
      cartProductContent[0].style.display = "none";

      // Ocultar botão de checkout
      btnCheckoutProduct.style.display = "none";

      // Exibír mensagem carrinho vazio
      emptyCartMsg.style.display = "block";

      itemAdicionado = false;
    })

    /* Eventos para slideshow e modal de galeria de imagens */
    /* Eventos para slideshow e modal de galeria de imagens */
    /* Eventos para slideshow e modal de galeria de imagens */
    /* Eventos para slideshow e modal de galeria de imagens */
    /* Eventos para slideshow e modal de galeria de imagens */
    /* Eventos para slideshow e modal de galeria de imagens */
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", () => currentSlide(i), false);
    }

    for (let i = 0; i < dots.length; i++) {
      dotsModal[i].addEventListener("click", () => currentSlideModal(i), false);
    }

    if (mediaMobile) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].attachEvent("onclick", abrirModal);
        closeModal.attachEvent("onclick", fecharModal);
        bgDarkModal.attachEvent("onclick", fecharModal);
      }

      closeModal.attachEvent("onmousemove", function() {
        closeModal.firstElementChild.src = "images/icon-close-hover.svg";
      })

      closeModal.attachEvent("onmouseout", function() {
        closeModal.firstElementChild.src = "images/icon-close.svg";
      })
    } else {
      modalSld.style.display = "none";
    }

    proximoSldBtn.attachEvent("onclick", slideModalNext);
    anteriorSldBtn.attachEvent("onclick", slideModalPrev);

    anteriorSldBtn.attachEvent("onmousemove", function() {
      anteriorSldBtn.firstElementChild.src = "./images/icon-previous-active.svg";
    })
    proximoSldBtn.attachEvent("onmousemove", function() {
      proximoSldBtn.firstElementChild.src = "./images/icon-next-active.svg";
    })

    anteriorSldBtn.attachEvent("onmouseout", function() {
      anteriorSldBtn.firstElementChild.src = "./images/icon-previous.svg";
    })
    proximoSldBtn.attachEvent("onmouseout", function() {
      proximoSldBtn.firstElementChild.src = "./images/icon-next.svg";
    })

    proximoSldBtnMobile.attachEvent("onclick", slideNextMobile);
    anteriorSldBtnMobile.attachEvent("onclick", slidePrevMobile);

    btnMenu.attachEvent("onclick", menuResponsivo);
    btnFecharMenu[0].attachEvent("onclick", fecharMenuResponsivo);
    fundoPretoMenu[0].attachEvent("onclick", fecharMenuResponsivo);
  }
}

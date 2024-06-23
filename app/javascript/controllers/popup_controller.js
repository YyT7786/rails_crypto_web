import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [
    "signInTab",
    "signUpTab"
  ];

  handleOver(e) {
    if (this.isMobile()) return;

    const popupTarget = e.currentTarget.querySelector(".popup-items");
    const popupLabelTarget = e.currentTarget.querySelector(".popup-label");
    popupLabelTarget.classList.add("2lg:text-primary-500");
    popupTarget.classList.add("2lg:block");
    popupTarget.classList.remove("2lg:hidden");
  }

  handleAway(e) {
    if (this.isMobile()) return;

    const popupTarget = e.currentTarget.querySelector(".popup-items");
    const popupLabelTarget = e.currentTarget.querySelector(".popup-label");
    popupLabelTarget.classList.remove("2lg:text-primary-500");
    popupTarget.classList.add("2lg:hidden");
    popupTarget.classList.remove("2lg:block");
  }

  handleClick(e) {
    if (!this.isMobile()) return;

    const popupItemTarget = e.currentTarget.querySelector(".popup-items");
    const wrapperToggleTarget = e.currentTarget.querySelector(".wrapper-toggle");
    popupItemTarget.classList.toggle("open");
    popupItemTarget.style.maxHeight = popupItemTarget.classList.contains("open") ? popupItemTarget.scrollHeight + "px" : null;

    wrapperToggleTarget.classList.toggle("fa-plus");        
    wrapperToggleTarget.classList.toggle("fa-minus");
  }

  toggleMenu(e) {
    if (!this.isMobile()) return;
    
    const wrapper = document.body.querySelector(".wrapper");
    const backdrop = document.body.querySelector(".backdrop");
    const menu = e.currentTarget;

    wrapper.classList.toggle("hidden");
    backdrop.classList.toggle("hidden");
    menu.classList.toggle("fa-bars");
    menu.classList.toggle("fa-xmark");
  }

  toggleSignInModal(e) {
    this.signInTabTarget.click();
    Modal.show("login_modal");
  }

  toggleSignUpModal(e) {
    this.signUpTabTarget.click();
    Modal.show("login_modal");
  }

  isMobile(){
    return window.innerWidth < 1200;
  }
}
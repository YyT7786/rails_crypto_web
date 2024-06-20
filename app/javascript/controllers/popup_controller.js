import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  handleOver(e) {
    const popupTarget = e.currentTarget.querySelector(".popup-items");
    const popupLabelTarget = e.currentTarget.querySelector(".popup-label");
    popupLabelTarget.classList.add("2lg:text-primary-500");
    popupTarget.classList.add("2lg:block");
    popupTarget.classList.remove("2lg:hidden");
  }

  handleAway(e) {
    const popupTarget = e.currentTarget.querySelector(".popup-items");
    const popupLabelTarget = e.currentTarget.querySelector(".popup-label");
    popupLabelTarget.classList.remove("2lg:text-primary-500");
    popupTarget.classList.add("2lg:hidden");
    popupTarget.classList.remove("2lg:block");
  }
}
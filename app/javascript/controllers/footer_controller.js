import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    toggleFooter(e) {
        const footer = e.currentTarget;
        const footerItems = document.getElementById(`${footer.id}-items`);
        const toggle = footer.querySelector("i");

        toggle.classList.toggle("fa-plus");        
        toggle.classList.toggle("fa-minus");
        footer.classList.toggle("border-b");
        footerItems.classList.toggle("h-0");
        footerItems.classList.toggle("border-b");
        footerItems.classList.toggle("pb-4");
      }
}
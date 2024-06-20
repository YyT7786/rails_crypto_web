import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["element"];

    connect() {
        // Add event listener to document to hide element when clicking outside
        document.addEventListener("click", this.handleClickOutside.bind(this));
    }

    toggle(e) {
        e.stopPropagation(); // Prevent event bubbling
        const dropdownTarget = e.currentTarget.querySelector(".filter-dropdown");
        dropdownTarget.classList.toggle("hidden");
    }

    handleClickOutside(e) {
        if (!this.elementTarget.contains(e.target) &&
            !this.elementTarget.classList.contains("hidden")) {
        this.elementTarget.classList.add("hidden");
        }
    }
}
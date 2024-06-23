import Alpine from "alpinejs";

export const initializeAlpine = () => {
    if (window.Alpine !== undefined) return;
    window.Alpine = Alpine;

    Alpine.store("modals", {
        init() {
            window.Modal = {
                show: (modalId) => { this.show(modalId) },
                hide: (modalId) => { this.hide(modalId) },
            };
        },

        register(modalId) {
            // Prevent clashing modal IDs on the same page.
            if (this[modalId] !== undefined) {
              return;
            }
      
            // Modals are always hidden on page load.
            this[modalId] = false;
          },
          
        show(modalId) {
            if (this[modalId] !== undefined)
                this[modalId] = true;
        },

        hide(modalId) {
            if (this[modalId] !== undefined)
                this[modalId] = false;
        },
    });

    Alpine.data("toggleModal", (modalId) => ({
        hasGlobalState: false,
    
        init() {
          if (this[modalId] === undefined) {
            this[modalId] = false;
    
            // Register modal to control modal state
            this.$store.modals.register(modalId);
            this.hasGlobalState = true;
            
            this.$watch(`$store.modals.${modalId}`, (visible) => { this[modalId] = visible });
          }
    
          this.$watch(modalId, (visible) => this.toggleModalChange(visible));
        },
    
        toggleModalChange(visible) {
          if (this.hasGlobalState === true) {
            this.$store.modals[modalId] = visible;
          }
        },

      }));

    Alpine.start();
}
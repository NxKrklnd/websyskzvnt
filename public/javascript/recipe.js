
export function setupModals() {
    function setupModal(modalId, btnId, closeClass) {
        var modal = document.getElementById(modalId);
        var btn = document.getElementById(btnId);
        var close = modal.getElementsByClassName(closeClass)[0];

        // When the button is clicked, open the modal
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        close.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // Section_1
    setupModal("Chicken_lumpia_modal", "chicken_lumpia_btn", "chicken-lumpia-close");
    setupModal("Pork_chop_modal", "pork_chop_btn", "pork-chop-close");
    setupModal("Pork_sisig_modal", "Pork_sisig_btn", "pork-sisig-close");

    // Section 2
    setupModal("kare_kare_modal", "kare_kare_btn", "kare-kare-close");
    setupModal("Bicol_expess_modal", "Bicol_express_btn", "Bicol-express-close");
    setupModal("Pork_adobo_modal", "Pork_adobo_btn", "Pork_adobo-close");
    setupModal("Fried_chicken_modal", "Fried_chicken_btn", "Fried_chicken-close");
    setupModal("Chicken_lumpia_modal", "chicken_lumpia_btn_2", "chicken-lumpia-close");
    setupModal("Pork_chop_modal", "pork_chop_btn_2", "pork-chop-close");
    setupModal("Pork_sisig_modal", "Pork_sisig_btn_2", "pork-sisig-close");

    // Section_3 DRINKS
    setupModal("Orange_juice_modal", "Orange_juice_btn", "Orange_juice-close");
    setupModal("Apple_juice_modal", "Apple_juice_btn", "Apple_juice-close");
    setupModal("Pineapple_juice_modal", "Pineapple_juice_btn", "Pineapple_juice-close");
}

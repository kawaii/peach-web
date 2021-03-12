var Peach = {
    createModal: function (filepath) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4) {
                let modal = document.createElement(`div`);
                modal.classList.add(`modal`);
                modal.id = `modal-id`;
                modal.onclick = function () {
                    this.parentElement.removeChild(this);
                };

                modal.innerHTML = xhttp.responseText;                

                document.querySelector(`body`).appendChild(modal);

            }
        };
        xhttp.open("GET", filepath, true);
        xhttp.send();
    },

    destroyModal: function () {
        var modal = document.getElementById(`modal-id`);
        modal.onclick(modal.remove());
    },

    createRulesModal: function () {
        Peach.createModal(`assets/components/rules.html`)
    },

    createPluginsModal: function () {
        Peach.createModal(`assets/components/plugins.html`)
    }

    
}
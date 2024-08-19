const text = document.getElementById("sec");

        const words = ["World!", "Friend!","Coder!"];
        let index = 1;
        text.textContent = words[0];
        const textLoad = () => {
            setInterval(() => {
                text.textContent = words[index];
                index = (index + 1) % words.length; // Boucle entre les mots
            }, 4000); // Change toutes les 4 secondes
        };

        textLoad();
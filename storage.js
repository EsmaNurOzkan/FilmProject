class Storage {

    static addFilmToStorage(newFilm) {
        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));
    };
    
    static getFilmsFromStorage() {
        let films;
    
        if (localStorage.getItem("films") === null) {
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films"));
        }
    
        return films;
    };
    
    static addFilm(e) {
        const title = titleElement.value;
        const director = directorElement.value;
        const url = urlElement.value;
    
        if (title === "" || director === "" || url === "") {
            ui.displayMessages("Tüm alanları doldurun..", "danger");
        } else {
            const newFilm = { title, director, url };
            ui.addFilmToUI(newFilm);
            storage.addFilmToStorage(newFilm);
            ui.displayMessages("Film başarıyla eklendi", "success");
        }
    
        ui.clearInputs(titleElement, urlElement, directorElement);
    
        e.preventDefault();
    };
    
    static deleteFilmFromStorage = function(filmTitle){
        let film = this.getFilmsFromStorage();
    
        film.forEach(function(film, index){
            if(film.title === filmTitle){
                films.splice(index, 1);
            }
        })
    
        localStorage.setItem("films", JSON.stringify(films));
    }
    
    static clearAllFilmsFromStorage = function(){
        localStorage.removeItem("films");
    }

}


class SeriesData {
   name;
   staffel;
   folge;

   constructor() {
       this.seriesList = [];
   }
   hinzufuegen(name, staffel, folge){
       const newSeries = {
           name: name,
           staffel: staffel,
           folge: folge,
       };
       this.seriesList.push(newSeries);
       return newSeries;
    }

    loeschen(){
        const index = this.seriesList.findIndex((serie) => serie.name);
        if (index !== -1) {
            const deletedSeries = this.seriesList.splice(index, 1)[0];
            return deletedSeries;
        } else {
            return null; // Serie nicht gefunden
        }
    }

    bearbeiten(name, updateStaffel, updateFolge) {
        const index = this.seriesList.findIndex((serie) => serie.name);
        if (index !== -1) {
            this.seriesList[index].staffel = updateStaffel;
            this.seriesList[index].folge = updateFolge;
            return this.seriesList[index];
        } else {
            return null; // Serie nicht gefunden
        }
    }
}

export default SeriesData;
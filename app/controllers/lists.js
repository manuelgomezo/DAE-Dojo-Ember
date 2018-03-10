import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        create(){
            console.log(this.listTitle)
            var list = this.store.createRecord("list",{
                title: this.listTitle
             });
             // para almacenar la información de la lista 
            list.save();
        }
    }
});
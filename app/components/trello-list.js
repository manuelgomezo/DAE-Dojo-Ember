
import Component from '@ember/component';

export default Component.extend({
    actions:{
        delete(){
            this.$().slideUp('normal',() => {
                this.list.deleteRecord();
                this.list.save();
            });
        }
    }
})
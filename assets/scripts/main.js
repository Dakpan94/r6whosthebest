new Vue({
        el: '#app',
        data() {
            return {
                data: null,
                isLoading: true
            }
        },
        mounted (){
            axios
            .get("https://r6statsstreamwidget.azurewebsites.net/api/GetGenericStats?code=oLhpAqRTdm0vH7u0OSCmPygLxUHAlc4xKpSiVJB6xTxpBxhzPZt2hg%3D%3D&platform=pc&username=efg-dakpan")
            .then(response => (this.data = response.data))
            .catch(error => console.log(error))
            .finally(this.isLoading = false)
        },
        computed: {
            // add progress bar here
        }
    });
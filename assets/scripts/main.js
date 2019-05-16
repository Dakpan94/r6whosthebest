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
            .get("https://r6statsapi.azurewebsites.net/api/GetTheBestSquad?platform=pc&usernames=efg-steluktal,efg-dakpan,bluecewe,ishnutella,bros10.tr")
            .then(response => (this.data = response.data))
            .catch(error => console.log(error))
            .finally(this.isLoading = false)
        },
        computed: {
            // add progress bar here
        }
    });
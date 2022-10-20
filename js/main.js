Vue.filter('datatime', function (value) {
    let d = new Date(value)
    return d.toDateString()
  });

var app = new Vue({
    el: '#app',
    data:{
        search_input: 'mazen-mahfouz',
        changeColor: 'dark',
        data_user: [],
        state_fetch: false,
    },
    created: function() {
        this.fetch_data();
    },
    methods: {
        fetch_data: async function(){
            axios.get(`https://api.github.com/users/${this.search_input}`)
            .then(response => {
                if (response.status == 200) {
                    this.state_fetch = true;
                    this.data_user = response.data;
                    console.log(response)
                }
            }).catch((error) => {
                this.state_fetch = false;
              })
        }
    },
})

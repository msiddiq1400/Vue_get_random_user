const app = Vue.createApp({
    data() {
        return {
            firstName: 'first name',
            lastName: 'last name',
            email: 'test@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },

    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const {results} = await res.json();
            const randomUser = results[0];
            console.log(randomUser)
            this.firstName = randomUser.name.first,
            this.lastName = randomUser.name.last,
            this.email = randomUser.email,
            this.gender = randomUser.gender,
            this.picture = randomUser.picture.large
        }
    }
});

app.mount('#app');
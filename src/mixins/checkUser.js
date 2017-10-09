export default {
    methods: {
        $checkUser({ mobile, email }) {
            return new Promise( (resolve, rej) => {
                this.$http.post('index.php?g=home&m=register&a=check_username', {
                    mobile: mobile,
                    email: email
                })
                .then(({ data }) => {
                    resolve(data)
                }).catch(rej)
            })
        }
    }
}
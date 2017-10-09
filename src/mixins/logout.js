export default {
    methods: {
        $logout() {
            this.$indicator.open()
            this.$http.get('index.php?g=home&m=Users&a=logout')
            .then(({ data }) => {
                console.log('登出:', data)
                this.$indicator.close()
                this.$toast(data.msg)
                if (data.code === 1) {
                    this.$router.push('/login')
                }
            })
        }
    }
}
export default {
    methods: {
        $getUserInfo(callback){
            this.$http.get('index.php?g=home&m=Users&a=user_info')
            .then(({data}) => {
                // console.log('获取用户信息:',data);
                if (data.code==1) {
                    callback(data.data)
                }else{
                    console.warn('获取用户信息失败')
                }
            }).catch(() => {
                 console.warn('获取用户信息失败')
            })

        },
    }
}
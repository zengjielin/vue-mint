export default {
    beforeCreate: function () {
        // 检测是否登录
        this.$http.get('index.php?g=home&m=login')
        .then(({data}) => {
            if (data.code!==1) {
                // 未登录
                this.$messagebox({
                    title:'未登录提醒',
                    message:'现在前往登录',
                    showCancelButton: true,
                    closeOnClickModal:false
                })
                .then(action => {
                    if (action==='confirm') {
                        this.$router.replace('/login')
                    }else{
                        this.$router.go(-1)
                    }
                })
            }
        }).catch(() => {
            
        })
    }
}
// 全局方法

export default {
    install: function (Vue) {

        // 低版本浏览器兼容
        // forEach
        if (!Object.prototype.forEach) {
            Object.defineProperty(window.Object.prototype, 'forEach', {
                value: function(forEachCallback){
                    for (let i = 0; i < this.length; i++) {
                        forEachCallback(this[i], i, this)
                    }
                }
            })
        }

        /** 日期格式化
         * @param fmt {String} 日期格式 如 yyyy-MM-dd
         * @param date 要格式化的Date日期对象
         */
        Object.defineProperty(Vue.prototype, '$date', {
            value: function dateFtt(fmt, date) { //author: meizz   
                var o = {
                    "M+": date.getMonth() + 1,                 //月份   
                    "d+": date.getDate(),                    //日   
                    "h+": date.getHours(),                   //小时   
                    "m+": date.getMinutes(),                 //分   
                    "s+": date.getSeconds(),                 //秒   
                    "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
                    "S": date.getMilliseconds()             //毫秒   
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
        });


    }
}

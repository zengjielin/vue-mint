// 点击等却倒计时
export default {
    methods: {
        $clickCooling(el, time=60){
            let oldText = el.innerHTML
            el.disabled = true
            el.className += ' is-disabled';

            let timer = setInterval(() => {
                time--
                if (time <= 0) {
                    clearInterval(timer)
                    el.disabled = false
                    el.className = el.className.replace(/is-disabled/g, '');
                    el.innerHTML = oldText
                } else {
                    el.innerHTML = `等待 ${time} 秒`
                }
            }, 1000);
        }
    }
}
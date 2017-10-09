export default  {
    name: 'click-cooling',

    // 点击后静止按钮,冷却倒计时
    // 用于获取验证按钮
    bind(el, binding, vnode) {
        el.addEventListener("click", () => {
            let oldText = el.innerHTML
            let second = 60
            el.disabled = true
            el.className += ' is-disabled';

            let timer = setInterval(() => {
                second--
                if (second <= 0) {
                    clearInterval(timer)
                    el.disabled = false
                    el.className = el.className.replace(/is-disabled/g, '');
                    el.innerHTML = oldText
                } else {
                    el.innerHTML = `等待 ${second} 秒`
                }
            }, 1000);
        })
    }
}


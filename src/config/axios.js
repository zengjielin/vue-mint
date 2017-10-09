/**
 * axios-http
 * 基于Promise 的 HTTP 请求客户端
 * https://www.awesomes.cn/repo/mzabriskie/axios
 * 
 * @version 0.1.2
 * 
 * 使用:
 * http://www.jianshu.com/p/df464b26ae58
 */

import axios from 'axios';


export default {
    install: function (Vue, config) {

        config = Object.assign({
            // default config
            timeout: 10000,
        },config)

        if (config) {
            for (let key in config) {
                axios.defaults[key] = config[key]
            }
        }

        const instance = axios.create({

            transformRequest: [function (data) {
                // 发送前的参数转成formdata键值对, 后端目前接收的类型
                // key1=123&key2=456&key3=789&
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }],

            headers: {
                'Content-Type':'application/x-www-form-urlencoded',//以formdata形式发送数据
            },
            
        });


        // 默认的调用 $axios 无基础配置
        Object.defineProperty(Vue.prototype, '$axios', {
            value: axios
        });


        // 封装$http方法, 包含配置, indicator:true开启加载指示器
        const ajax = (url, data, type) => {
            // let indicator = data && data.indicator
            // indicator && Vue.$indicator.open()
            return new Promise(function (resolve, reject) {
                instance[type](url, data)
                    .then( res => {
                        // indicator && Vue.$indicator.close()
                        resolve(res)
                    })
                    .catch( err => {
                        // indicator && Vue.$indicator.close()
                        reject(err)
                    });
            })
        }
        
        const $http = function(config, data){
            if(typeof config === 'object'){
                return instance({
                    data: data,
                    ...config
                })
            }else if( typeof config === 'string'){
                // config is url
                return ajax(config, data, 'get')
            }else{
                throw new Error('$http must set first param: config or url')
            }
        }

        $http.get = function(url, data){
            return ajax(url, data, 'get')
        }

        $http.post = function(url, data){
            return ajax(url, data, 'post')
        }

        Object.defineProperty(Vue.prototype, '$http', {
            value: $http
        })


    }
}

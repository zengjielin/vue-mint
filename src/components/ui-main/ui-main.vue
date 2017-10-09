<style lang="scss" scoped>
    .ui-main{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
    }
    .ui-main-content{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .ui-main-header{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
    }
    .ui-main-scroll{
        overflow: hidden;
        flex:1;
        height: 100%;
    }
    // .ui-main-footer{
    // }
    .ui-main-popup{// 模态窗
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 3001;
    }

    .ui-main-router{//二级路由
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 20;
    }
</style>
<template>
    <div class="ui-main">

        <div class="ui-main-content" ref="content">
            <!--popup 可选-->
            <div class="ui-main-popup">
                <slot name="popup"></slot>
            </div>

            <!--header 可选-->
            <div class="ui-main-header" ref="header" >
                <slot name="header"></slot>
            </div>
            
            <!--滚动层-->
            <div class="ui-main-scroll" :class="{'scroll-y':scrollActive}" ref="scroll-box" :style="style">
                <slot></slot>
            </div>

            <!-- footer 可选 -->
            <div class="ui-main-footer">
                <slot name="footer"></slot>
            </div>
        </div>

        <ui-router class="ui-main-router" ref="router"></ui-router>

    </div>
</template>
<script>
    export default {
        name: 'ui-main',
        version: '0.1.1',
        data () {
            return {
                style:{
                    paddingTop:''
                },
                parentUiMainContent:null,
                scrollActive: true,
                routePath: this.$route.path
            }
        },
        mounted () {
            this.$nextTick(() => {
                //获取父级ui-main 如果有的话
                let parentUiMain = this.$el.parentElement
                if (parentUiMain && parentUiMain.className && parentUiMain.className.indexOf('ui-main')>-1) {
                    this.parentUiMainContent = parentUiMain.querySelector('.ui-main-content')
                }

                // 子路由激活后,隐藏父级ui-main content
                this.hideParentContent()

                // 阻止滚动露底,会挂载多个手势监听,慎用
                // this.preventScrollOver(this.$refs['scroll-box'])

                this.resetScroll()

            })
        },
        watch:{
            $route(){
                // 页面切换重置滚动容器
                this.$nextTick(() => {
                    this.resetScroll()
                })
            }
        },
        beforeDestroy () {
            // 当前页销毁,显示父级ui-main content
            this.ShowParentContent()
        },
        methods: {
            hideParentContent(){//隐藏ui-main的内容
                if(this.parentUiMainContent){
                    this.parentUiMainContent.style.display = 'none'
                }
            },
            ShowParentContent(){
                if(this.parentUiMainContent){
                    this.parentUiMainContent.style.display = ''
                }
            },
            preventScrollOver(scrollContainer){//防止移动端滚动露底

                let content = this.$refs['content']

                // 防止内容区域滚到底后引起页面整体的滚动
                let startY;

                scrollContainer.addEventListener('touchstart', function (e) {
                    startY = e.touches[0].clientY;
                });

                scrollContainer.addEventListener('touchmove', function (e) {
                    // 当前容器已被隐藏则不动作
                    if (content.style.display === 'none') {
                        return
                    }

                    // 高位表示向上滚动
                    // 底位表示向下滚动
                    // 1容许 0禁止
                    let status = '11';
                    let ele = this;

                    let currentY = e.touches[0].clientY;

                    if (ele.scrollTop === 0) {
                        // 如果内容小于容器则同时禁止上下滚动
                        status = ele.offsetHeight >= ele.scrollHeight ? '00' : '01';
                    } else if (ele.scrollTop + ele.offsetHeight >= ele.scrollHeight) {
                        // 已经滚到底部了只能向上滚动
                        status = '10';
                    }

                    if (status != '11') {
                        // 判断当前的滚动方向
                        let direction = currentY - startY > 0 ? '10' : '01';
                        // 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动
                        if (!(parseInt(status, 2) & parseInt(direction, 2))) {
                            e.preventDefault()
                        }
                    }
                });
            },
            resetScroll(){//初始化 ui-main-scroll 滚动
                let box = this.$refs['scroll-box']
                let firstChild = box.children[0]
                let paddingTop = this.$refs['header'].offsetHeight+'px'
                
                // 检测如果主内容区域只有一个子容器,并且子容器自带滚动,则滚动交由子容器负责
                // 目的:子容器如果用到无限滚动加载,则其容器需开启滚动
                // let class
                if (box.children.length===1 && firstChild.className.indexOf('scroll-y')>-1) {
                    this.scrollActive = false

                    // 内层增加顶部间距
                    firstChild.style.paddingTop = paddingTop
                    firstChild.style.height = '100%'
                }else{
                    // 根据header高度设置内容区域的paddingTop
                    // 让header起到半透明悬浮的效果
                    this.style.paddingTop = paddingTop
                }
                // alert(this.style.paddingTop);
            }
        }
    }
</script>
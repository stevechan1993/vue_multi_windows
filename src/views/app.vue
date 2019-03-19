<template>
    <div id="drag" class="drag">
        <div class="layout">
            <div class="resizeL"></div>
            <div class="resizeT"></div>
            <div class="resizeR"></div>
            <div class="resizeB"></div>
            <div class="resizeLT"></div>
            <div class="resizeTR"></div>
            <div class="resizeBR"></div>
            <div class="resizeLB"></div>
            <Layout >
                <Header>
                    <div class="layout-logo"></div>
                    <div class="title">
                        <div>
                            <a class="min" href="javascript:" title="最小化"></a>
                            <a class="max" href="javascript:" title="最大化"></a>
                            <a class="revert" href="javascript:" title="还原"></a>
                            <a class="close" href="javascript:" title="关闭"></a>
                        </div>
                    </div>
                </Header>
                <Layout>
                    <Sider hide-trigger :style="{background: '#fff'}"></Sider>
                    <Layout :style="{padding: '0 24px 24px'}">
                        <Content id="test" :style="{padding: '24px', minHeight: '300px', height: '300px', background: '#fff'}">
                            Content
                        </Content>
                    </Layout>
                    <Sider hide-trigger :style="{background: '#fff'}"></Sider>
                </Layout>
            </Layout>
        </div>
    </div>
</template>

<script>
    export default {
        //name: "app",
        data() {
            return {

            }
        },
        methods: {
            byId: function (id) {
                return typeof id === "string" ? document.getElementById(id): id;
            },
            byTagName: function (elem, obj) {
                return obj.getElementsByTagName(elem) || document.getElementsByTagName(elem);
            },
            byClass: function(sClass, oParent) {
                var aClass = [];
                var reClass = new RegExp("(^| )" + sClass + "( |$)");
                var aElem = this.byTagName("*", oParent);
                for (var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
                return aClass;
            },
            drag: function(oDrag, handle) {
                var disX = 0;
                var disY = 0;
                var oMin = this.byClass("min", oDrag)[0];
                var oMax = this.byClass("max", oDrag)[0];
                var oRevert = this.byClass("revert", oDrag)[0];
                var oClose = this.byClass("close", oDrag)[0];
                handle = handle || oDrag;
                handle.style.cursor = "move";
                handle.onmousedown = function (event) {
                    var event = event || window.event;
                    disX = event.clientX - oDrag.offsetLeft;
                    disY = event.clientY - oDrag.offsetTop;
                    document.onmousemove = function (event) {
                        var event = event || window.event;
                        var iL = event.clientX - disX;
                        var iT = event.clientY - disY;
                        var maxL = document.documentElement.clientWidth - oDrag.offsetWidth;
                        var maxT = document.documentElement.clientHeight - oDrag.offsetHeight;
                        iL <= 0 && (iL = 0);
                        iT <= 0 && (iT = 0);
                        iL >= maxL && (iL = maxL);
                        iT >= maxT && (iT = maxT);
                        oDrag.style.left = iL + "px";
                        oDrag.style.top = iT + "px";
                        return false
                    };
                    document.onmouseup = function () {
                        document.onmousemove = null;
                        document.onmouseup = null;
                        this.releaseCapture && this.releaseCapture()
                    };
                    this.setCapture && this.setCapture();
                    return false
                };
                //最大化按钮
                oMax.onclick = function () {
                    oDrag.style.top = 0;
                    oDrag.style.left = 0;

                    oDrag.style.width = document.documentElement.clientWidth - 2 + "px";
                    oDrag.style.height = document.documentElement.clientHeight - 2 + "px";

                    document.getElementById("test").style.height = document.documentElement.clientHeight - 2 + "px";

                    this.style.display = "none";
                    oRevert.style.display = "block";
                };
                //还原按钮
                oRevert.onclick = function () {
                    // oDrag.style.width = this.dragMinWidth + "px";
                    // oDrag.style.height = this.dragMinHeight + "px";
                    oDrag.style.width = 500 + "px";
                    oDrag.style.height = 300 + "px";

                    document.getElementById("test").style.height = 300 + "px";

                    oDrag.style.left = (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + "px";
                    oDrag.style.top = (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + "px";
                    this.style.display = "none";
                    oMax.style.display = "block";
                };
                //最小化按钮
                oMin.onclick = oClose.onclick = function () {
                    oDrag.style.display = "none";
                    var oA = document.createElement("a");
                    oA.className = "open";
                    oA.href = "javascript:;";
                    oA.title = "还原";

                    document.body.appendChild(oA);

                    oA.style.background = "red";
                    oA.style.position = "absolute";
                    oA.style.top = "10px";
                    oA.style.left = "125px";
                    oA.style.width = "34px";
                    oA.style.height = "34px";

                    //绑定点击事件
                    oA.onclick = function () {
                        oDrag.style.display = "block";
                        document.body.removeChild(this);
                        this.onclick = null;
                    };
                };
                //阻止冒泡
                oMin.onmousedown = oMax.onmousedown = oClose.onmousedown = function (event) {
                    this.onfocus = function () { this.blur() };
                    (event || window.event).cancelBubble = true
                };
            },
            resize: function(oParent, handle, isLeft, isTop, lockX, lockY) {
                handle.onmousedown = function (event) {
                    var event = event || window.event;
                    var cnt = document.getElementById("test");
                    var disX = event.clientX - handle.offsetLeft;
                    var disY = event.clientY - handle.offsetTop;
                    var iParentTop = oParent.offsetTop;
                    var iParentLeft = oParent.offsetLeft;
                    var iParentWidth = oParent.offsetWidth;
                    var iParentHeight = oParent.offsetHeight;
                    document.onmousemove = function (event) {
                        var event = event || window.event;
                        var iL = event.clientX - disX;
                        var iT = event.clientY - disY;

                        var maxW = document.documentElement.clientWidth - oParent.offsetLeft - 2;
                        var maxH = document.documentElement.clientHeight - oParent.offsetTop - 2;

                        var iW = isLeft ? iParentWidth - iL : handle.offsetWidth + iL;
                        var iH = isTop ? iParentHeight - iT : handle.offsetHeight + iT;

                        isLeft && (oParent.style.left = iParentLeft + iL + "px");
                        isTop && (oParent.style.top = iParentTop + iT + "px");

                        iW < 500 && (iW = 500);

                        iW > maxW && (iW = maxW);

                        lockX || (oParent.style.width = iW + "px");

                        iH < 300 && (iH = 300);

                        iH > maxH && (iH = maxH);

                        lockY || (cnt.style.height = oParent.style.height = iH + "px");

                        if ((isLeft && iW == 500) || (isTop && iH == 300)) document.onmousemove = null;
                        return false;
                    };
                    document.onmouseup = function () {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                    return false;
                }
            },
        },
        mounted() {
            let that = this;
            var oDrag = document.getElementById("drag");
            var oTitle = that.byClass("title", oDrag)[0];
            var oL = that.byClass("resizeL", oDrag)[0];
            var oT = that.byClass("resizeT", oDrag)[0];
            var oR = that.byClass("resizeR", oDrag)[0];
            var oB = that.byClass("resizeB", oDrag)[0];
            var oLT = that.byClass("resizeLT", oDrag)[0];
            var oTR = that.byClass("resizeTR", oDrag)[0];
            var oBR = that.byClass("resizeBR", oDrag)[0];
            var oLB = that.byClass("resizeLB", oDrag)[0];
            that.drag(oDrag, oTitle);
            //四角
            that.resize(oDrag, oLT, true, true, false, false);
            that.resize(oDrag, oTR, false, true, false, false);
            that.resize(oDrag, oBR, false, false, false, false);
            that.resize(oDrag, oLB, true, false, false, false);
            //四边
            that.resize(oDrag, oL, true, false, false, true);
            that.resize(oDrag, oT, false, true, true, false);
            that.resize(oDrag, oR, false, false, false, true);
            that.resize(oDrag, oB, false, false, true, false);

            oDrag.style.left = (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + "px";
            oDrag.style.top = (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + "px";
        }
    }
</script>

<style scoped>
    .drag {
        position: absolute;
        top: 100px;
        left: 100px;
        width: 500px;
        height: 300px;
        background: #e9e9e9;
        /*border: 1px solid #444;*/
        /*border-radius: 2px;*/
        /*box-shadow: 0 1px 3px 2px #666;*/
    }

    .drag .title {
        position: relative;
        height: 27px;
        margin: 5px;
    }

    .drag .title h2 {
        font-size: 14px;
        height: 27px;
        line-height: 24px;
        border-bottom: 1px solid #A1B4B0;
    }

    .drag .title div {
        position: absolute;
        height: 19px;
        top: 2px;
        right: 0;
    }

    .drag .title a,
    a.open {
        float: left;
        width: 21px;
        height: 19px;
        display: block;
        margin-left: 5px;
        background: url(../assets/tool.png) no-repeat;
    }
    a.open {
        position: absolute;
        top: 10px;
        left: 50%;
        margin-left: -10px;
        background-position: 0 0;
    }

    a.open:hover {
        background-position: 0 -29px;
    }

    .drag .title a.min {
        background-position: -29px 0;
    }

    .drag .title a.min:hover {
        background-position: -29px -29px;
    }

    .drag .title a.max {
        background-position: -60px 0;
    }

    .drag .title a.max:hover {
        background-position: -60px -29px;
    }

    .drag .title a.revert {
        background-position: -149px 0;
        display: none;
    }

    .drag .title a.revert:hover {
        background-position: -149px -29px;
    }

    .drag .title a.close {
        background-position: -89px 0;
    }

    .drag .title a.close:hover {
        background-position: -89px -29px;
    }

    .drag .content {
        overflow: auto;
        margin: 0 5px;
    }

    .drag .resizeBR {
        position: absolute;
        width: 14px;
        height: 14px;
        right: 0;
        bottom: 0;
        overflow: hidden;
        cursor: nw-resize;
        background: url(../assets/resize.png) no-repeat;
        z-index: 999;
    }
    .drag .resizeL,
    .drag .resizeT,
    .drag .resizeR,
    .drag .resizeB,
    .drag .resizeLT,
    .drag .resizeTR,
    .drag .resizeLB {
        position: absolute;
        background: #000;
        overflow: hidden;
        opacity: 0;
        filter: alpha(opacity=0);
        z-index: 999;
    }

    .drag .resizeL,
    .drag .resizeR {
        top: 0;
        width: 5px;
        height: 100%;
        cursor: w-resize;
    }

    .drag .resizeR {
        right: 0;
    }

    .drag .resizeT,
    .drag .resizeB {
        width: 100%;
        height: 5px;
        cursor: n-resize;
    }

    .drag .resizeT {
        top: 0;
    }

    .drag .resizeB {
        bottom: 0;
    }

    .drag .resizeLT,
    .drag .resizeTR,
    .drag .resizeLB {
        width: 8px;
        height: 8px;
        background: #FF0;
    }

    .drag .resizeLT {
        top: 0;
        left: 0;
        cursor: nw-resize;
    }

    .drag .resizeTR {
        top: 0;
        right: 0;
        cursor: ne-resize;
    }

    .drag .resizeLB {
        left: 0;
        bottom: 0;
        cursor: ne-resize;
    }

    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        /*border-radius: 4px;*/
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }

    .ivu-layout-header {
        padding: 0px;
    }
</style>

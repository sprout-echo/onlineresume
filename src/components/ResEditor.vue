<template>
    <div id="editArea">
        <nav id="nav">
            <ul>
                <a href="/"><li id="back">退出</li></a>
                <li v-for="item in resume.config" :class="{active: item.field === selected}" @click="selected=item.field" :title="item.field">
                    <i :class="item.icon" aria-hidden="true"></i>
                </li>
                <router-link to="/preview" ><li id="preview">预览</li></router-link>
            </ul>
            <div class="line-btn">
                <button @click="addLineHeight()"> + </button><br/>
                <button @click="reduceLineHeight()"> - </button>
            </div>
        </nav>
        <ul id="editText">
            <li v-for="item in resume.config" v-show="item.field === selected">

                <div v-if="resume[item.field] instanceof Array">
                    <div v-for="(subItem, i) in resume[item.field]">
                        <div v-for="(value, key) in subItem" class="layout">
                            <label>{{key}}</label>
                            <input type="text" :value="value" @input="changeResPreview(`${item.field}.${i}.${key}`,$event.target.value)"/>
                        </div>
                    </div>
                    <button @click="appendInput(resume[item.field],resume[item.field][0])"><i class="fa fa-plus" aria-hidden="true"></i> ADD</button>
                </div>

                <div v-else v-for="(value,key) in resume[item.field]" class="layout">
                    <label>{{key}}</label>
                    <input type="text" :value="value" @input="changeResPreview(`${item.field}.${key}`,$event.target.value)"/>
                </div>

            </li>
        </ul>
    </div>
</template>
<script>
export default{
    name:'ResEditor',
    computed: {
        resume(){
            return this.$store.state.resume
        },
        selected: {
            get() {
                return this.$store.state.selected
            },
            set(value) {
                return this.$store.commit('switchTab',value)
            }
        }
    },
    methods: {
        changeResPreview(path,value){
            this.$store.commit('updateResume',{path,value})
        },
        appendInput(field,key){
            console.log(key)
            this.$store.commit('append',{field,key})
        },
        addLineHeight() {
            this.$store.commit('addLineHeight')
        },
        reduceLineHeight() {
            this.$store.commit('reduceLineHeight')
        }
    }
}
</script>
<style scoped>
    #editArea{
        position:absolute;
        width:40%;
        height:100%;
        background:#efefef;
        float:left;
        font-family:'微软雅黑';
        border-right:1px solid #ccc;
        padding:20px 0px;
        top:-20px;
    }
    #nav{
        width:22%;
        height:100%;
        float:left;
        margin-left:-40px;
        margin-top:-20px;
        font-size:13px;
        text-align:center;
    }
    ul{list-style:none;}
    #nav li{
        padding:38px 15px;
        background:#ccc;
        color:#00a49d;
        border-bottom:1px solid #eee;
        cursor:pointer;
        font-size:16px;
    }
    #nav .active{
        background:#00a49d;
        color:#fff;
    }
    #editText{
        float:left;
        padding:10px 20px;
        overflow:auto;
        width:77%;
        height:100%;
    }
    #editText label{
        display:inline-block;
        width:70px;
        font-weight:bold;
        color:#6b4e32;
    }
    #editText input{
        padding:8px;
        background:#fff;
        outline:none;
        border:1px solid #ccc;
        width:300px;
        border-radius:3px;
    }
    #editText .layout{
        margin-top:10px;
    }
    #editText button{
        padding:6px;
        outline:none;
        border-radius:3px;
        background:transparent;
        border:1px solid #18a094;
        color:#18a094;
        margin:10px 0px 10px 300px;
        cursor:pointer;
        width:80px;
    }
    a {
        text-decoration:none;
        color:#fff;
    }
    .line-btn{
        position:absolute;
        top:50px;
        right:-70px;
    }
    .line-btn button{
        width:50px;
        background:#fff;
        color:#333;
        font-weight:bold;
        outline:none;
        border:1px solid #eee;
        padding:6px 0px;
        font-size:16px;
        cursor:pointer;

    }
    .line-btn a {
        display:block;
        width:50px;
        border:1px solid #eee;
        text-align:center;
        padding:6px 0px;
        text-decoration:none;
        margin-top:10px;
        color:#333;
    }
    #nav #back,#nav #preview{
        background:#fff;
        border-top:0px;
        border-bottom:0px;
    }
</style>

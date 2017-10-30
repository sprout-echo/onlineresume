<template>
    <div class="temparea">
        <div class="backPreview">
            <router-link to="/main">退出预览</router-link>
            <button @click="downloadPDF()">导出PDF</button>
        </div>

        <div id="previewDiv">
            <ResPreview></ResPreview>
        </div>

    </div>
</template>
<script>
import ResPreview from '../components/ResPreview'
export default{
name :'preview',
components:{ResPreview},
computed:{
    topshow(){
        return this.$store.state.topshow
    }
},
methods: {
    downloadPDF() {
        this.$store.commit('downloadPDF')
    }
}
}
</script>
<style>
body{
    margin:0;
    padding:0;
}
.backPreview a {
    display:inline-block;
    width:50%;
    border-right:2px solid #eee;
    text-align:center;
    padding:6px 0px;
    text-decoration:none;
    color:#333;
}
#previewDiv #previewArea{
    width:100%;
    left:-40%;
    overflow-x:hidden;
    background:#fff;
}
#previewDiv #inner-preview{
    width:80%;
    padding:60px 100px;
    border:0px;
}
#previewDiv{
    width:100%;
    height:100%;
    position:absolute;
    overflow-x:hidden;
    overflow-y:auto;
    background:#fff;
}
.backPreview{
    width:100%;
    border:1px solid #eee;
    background:#fff;
}
button{
    width:49%;
    display:inline-block;
    border:0px solid #eee;
    text-align:center;
    padding:8px 0px;
    color:#333;
    background:#fff;
    outline:none;
    cursor:pointer;
}
</style>

<template>
    <div id="contain">
        <ResEditor/>
        <ResPreview/>
    </div>
</template>
<script>
import ResEditor from '../components/ResEditor'
import ResPreview from '../components/ResPreview'

export default{
    name: 'main',
    components:{ResEditor,ResPreview}
}
</script>
<style>
    body{
        width:100%;
        height:100%;
        overflow:hidden;
        margin:0;
        padding:0;
        background:#fff;
    }
    #contain{
        width:100%;
        height:100%;
        overflow:auto;
    }
</style>

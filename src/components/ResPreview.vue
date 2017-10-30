<template>
<div id="previewArea">
    <div id="inner-preview"  :style="{lineHeight : lineSize }">
            <section data-name="profile" id="profile">
                <h1>{{resume.profile.name}}</h1>
                <h3>{{resume.profile.job}}</h3>
            </section>

            <section>
                <ul>
                    <li v-for="item in resume.education">
                        <p>{{item.school}}</p>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
            </section>

            <section id="contact">
                <ul>
                    <li v-for="item in resume.contact">
                        <p>{{item.contacts}} : {{item.content}}</p>
                    </li>
                </ul>
            </section>
            <div class="line"></div>
            <section>
                <ul>
                    <li v-for="item in resume.skills">
                        <p class="section-title skill-title">{{item.name}}</p>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
            </section>
            <div class="line"></div>
            <section>
                <p class="section-title">工作经历</p>
                <ul>
                    <li v-for="item in resume.workHistory">
                        <p>• {{item.company}}</p>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
            </section>
            <div class="line"></div>
            <section>
                <p class="section-title">项目经历</p>
                <ul>
                    <li v-for="item in resume.projects">
                        <p>• {{item.project}}</p>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
        </section>
    </div>
</div>
</template>
<script>
export default{
    name:'ResPreview',
    computed: {
        resume(){
            return this.$store.state.resume
        },
        lineSize(){
            return this.$store.state.lineSize
        }
    }
}
</script>
<style scoped>
#previewArea{
    position:absolute;
    width:52%;
    height:95%;
    margin-left:45%;
    margin-top:20px;
    backgrpund:#fff;
    font-family:'微软雅黑';
    line-height:16px;
    overflow-x:hidden;
    overflow-y:auto;
    color:#333;
}
#inner-preview{
    position:relative;
    width:85%;
    height:auto;
    border:1px solid #ccc;
    border-radius:3px;
    padding:30px 50px;
    overflow-x:hidden;
    overflow-y:auto;
}
ul{list-style:none}
#profile h1{
    font-size:35px;
    color:#7b193a;
}
#profile h3{
    color:#999;
}
#contact{
    position:absolute;
    right:30%;
    top:12%;
}
.line{
    width:100%;
    border:1px solid #eee;
}
.section-title{
    font-weight:bold;
    font-size:20px;
    color:#7b193a
}
.skill-title{
    margin-left:-40px;
}
</style>

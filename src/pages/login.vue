<template>
    <div class="contain">
        <img src="../assets/logo.png" id="logo">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <input type="text" v-model="username" @input="toggleShow()" placeholder="username..."/>
        <i class="fa fa-lock" aria-hidden="true"></i>
        <input type="text" v-model="password"  @input="toggleShow()" placeholder="password..."/><br/>
        <button @click="subLogin">Login in</button>
        <transition name="tooltip">
            <div id="tooltip" v-show="show">{{errormsg}}</div>
        </transition>
        <div id="footer">提示：默认用户名：admin 密码：123456</div>
    </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return{
        username: '',
        password: '',
        errormsg: '',
        show: false
    }
  },
  methods: {
    subLogin() {
        this.show = false;
        if(this.username == 'admin' && this.password == '123456'){
            this.show = true;
            this.errormsg = '登录成功'
            this.$router.push('/main')
        }else{
            this.show = true;
            this.errormsg = '用户名或密码错误'
        }
    },
    toggleShow() {
        this.show = false;
    }
  }
}
</script>
<style scoped>
.contain{
    width:440px;
    margin:80px auto;
}
input[type="text"]{
  padding:8px;
  outline:none;
  border:1px solid #666;
  border-radius:3px;
}
#logo{
  display:block;
  margin:80px auto;
}
button{
    padding:8px;
    background:transparent;
    border:0px;
    outline:none;
    width:80px;
    cursor:pointer;
    margin:10px 320px;
    font-weight:bold;
}
#footer{
    position:absolute;
    bottom:10px;
    right:20px;
    color:#999;
    border-radius:3px;
    background:#efefef;
    padding:6px;
    font-size:13px;
    box-shadow:5px 5px 10px #999;
}
#tooltip{
    font-family:'微软雅黑';
    color:#aaa;
}
.tooltip-enter-active{
    margin-top:0px;
    transform:rotate(0deg);
    transition:all .5s ease;
}
.tooltip-enter{
    transform:rotate(90deg);
    margin-top:200px;
}
.tooltip-leave-active{
    transform:rotate(0deg);
    transition:all .5s ease;
}
.tooltip-leave-to{
    transform:rotate(-90deg);
}
</style>

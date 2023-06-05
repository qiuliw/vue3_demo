<template>
    <div class="shell">
        <div class="box">
            <img src="../../public/imgs/0.jpg">
            <span>Image</span>
        </div>
        <div class="box">
            <img src="../../public/imgs/2.jpg">
            <span>Video</span>
        </div>
        <div class="box">
            <img src="../../public/imgs/3.jpg">
            <span>File</span>
        </div>
        <div class="box">
            <img src="../../public/imgs/4.jpg">
            <span>Music</span>
        </div>
        <div class="box">
            <img src="../../public/imgs/1.jpg">
            <span>tyric</span>
        </div>
    </div>
</template>



<style lang="less" scoped>
*{
    padding:0;
    margin:0;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgb(243,230,241);
}
.shell{
    width:90%;
    height: 500px;
    display: flex;


}
.box{
    flex: 1;
    overflow: hidden;
    transition: .5s;
    margin:0 20px;
    box-shadow:0px 20px 20px rgba(8, 182, 212, 0.822);
    border-radius: 20px;
    border:10px solid #fff;
    background-color: #fff;
}
.box>img{
    width: 200%;
    height: 85%;
    object-fit: cover;
    transition: .5s;
}
.box>span{
    font:200 45px '优设标题黑';
    text-align: center;
    height:15%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box:hover{
    flex-basis: 40%;
}
.box:hover>img{
    width: 100%;
    height: 100%;
}

</style>
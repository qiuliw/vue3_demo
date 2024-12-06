<template>
    <div class="shell">
        <div class="box">
            <img src="../../public/imgs/a-1.jpeg">
            <span>外公</span>
        </div>
        <div class="box">
            <img src="../../public/imgs/a-2.jpeg">
            <span>母亲</span>
        </div>
        <div class="box">
            <img src="../../public/imgs/a-3.jpeg">
            <span>弟弟</span>
        </div>
        <div class="box">
            <img src="../../public/imgs/a-4.jpeg">
            <span>爷爷</span>
        </div>
        <div class="box">
            <img src="../../public/imgs/a-5.jpeg">
            <span>xxx</span>
        </div>
    </div>
</template>



<style scoped>
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
    box-shadow:0px 20px 20px rgba(181, 199, 203, 0.822);
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
<template>
  <div id="app">
  <!-- <img src="./assets/logo.png"> -->
  <!-- <user></user> -->
    <!-- <div class="main-container-inner"> -->
      <nav class="sidebar" id="sidebar">
        <ul class="nav nav-list">
           <li><a href="<%=path%>/admin/userMgmtServlet">
            <i class="glyphicon glyphicon-user"></i> <span class="menu-text"> 用户信息管理 </span> </a></li>
              <li><a href="<%=path%>/admin/corpMgmtServlet">
                <i class="glyphicon glyphicon-folder-close"></i> <span class="menu-text">投标单位管理 </span> </a></li>
              <li><a href="<%=path%>/admin/tendersMgmtServlet" class="dropdown-toggle">
                <i class="glyphicon glyphicon-list"></i> <span class="menu-text">招标信息管理</span></a></li>
              <li><a href="<%=path%>/admin/bidinfoMgmtServlet" class="dropdown-toggle">
                <i class="glyphicon glyphicon-tasks"></i> <span class="menu-text">投标申请审核</span></a></li>
              <li><a href="<%=path%>/admin/bidMgmtServlet" class="dropdown-toggle">
                <i class="glyphicon glyphicon-tags"></i> <span class="menu-text">评标管理</span></a></li>
              <li><a href="<%=path%>/admin/applyMgmtServlet" class="dropdown-toggle">
                <i class="glyphicon glyphicon-edit"></i> <span class="menu-text">投标申请</span></a></li>
              <li><a href="<%=path%>/admin/myBidServlet" class="dropdown-toggle">
                <i class="glyphicon glyphicon-book"></i> <span class="menu-text">我的投标</span></a></li>
              <li><a href="<%=path%>/admin/checkMgmtServlet" class="dropdown-toggle">
                <i class="glyphicon glyphicon-check"></i> <span class="menu-text">审批管理</span></a></li>
              <li><a href="<%=path%>/admin/logMgmtServlet" class="dropdown-toggle">
                <i class="glyphicon glyphicon-stats"></i> <span class="menu-text">日志查询</span></a></li>
        </ul>
        <div class="sidebar-collapse" id="sidebar-collapse">
          <i class="icon-double-angle-left" data-icon1="icon-double-angle-left" data-icon2="icon-double-angle-right"></i>
        </div>
       </nav>
       <div>
        <div class="main-content">
          <user></user>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import user from './page/User.vue'
export default {
  name: 'App',
  components: { user }
}
</script>

<style>
#app {
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 height: 100%;
}

nav{
    line-height:30px;
    background-color:#eeeeee;
    height:100%;
    width:200px;
    float:left;
    padding:5px;
}

.navbar{
  margin: 0;
}

</style>

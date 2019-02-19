<template>
 <div id="user" style="float: left;margin-left: 30px;">
   <div class="row">
     <div class="col-xs-12">
       <h3 class="header smaller lighter blue">用户信息管理</h3>
       <form action="" method="post">
         <div class="row">
<div class="btn-group " role="group" aria-label="...">
<label class="form-control">登录名：</label>
</div>
<div class="btn-group " role="group" aria-label="...">
<input name="s_userid" type="text" class="form-control"
value="">
</div>
<div class="btn-group " role="group" aria-label="...">
<label class="form-control">用户类型：</label>
</div>
<div class="btn-group " role="group" aria-label="...">
<select class="form-control" id="stype" name="stype">
<option value="0" selected>全部</option>
<option value="1">招标成员</option>
<option value="2" >审批成员</option>
<option value="100">超级管理员</option>
</select>
</div>
<div class="btn-group " role="group" aria-label="...">
<button type="submit" class="btn btn-info" id="btnSearch">
<span class="glyphicon glyphicon-search"></span>搜索
</button>
<button type="button" class="btn btn-danger" id="btnDel">
<span class="glyphicon glyphicon-trash"></span>删除
</button>
<button type="button" class="btn btn-success" id="btnAdd">
<span class="glyphicon glyphicon-plus"></span>新增
</button>
<button type="button" class="btn btn-success" onclick="window.location.reload()">
<span class="glyphicon glyphicon-refresh"></span>刷新
</button>
</div>
         </div>
       </form>
     </div>
   </div>
<table>
<thead>
<tr>
<th class="center"><label> <input type="checkbox" id="checkAll" name="checkAll" value=""> <span class="lbl"></span> </label></th>
<th class="center">登录名</th>
<th class="center">手机号</th>
<th class="center">类型</th>
<th class="center">电子邮箱</th>
<th class="center">用户状态</th>
<th class="center">注册时间</th>
<th class="center">操作</th>
</tr>
</thead>
<tbody>
<!-- <c:forEach items="${list }" var="n"> -->
<tr name="tr">
<td class="center"><label> <input type="checkbox"
name="uid" value="${n.id }"><span class="lbl"></span>
</label></td>
<td>${n.userid }</td>
<td>${n.phone }</td>
<td>
<!-- <c:if test="${n.type==0 }">招标成员</c:if>
<c:if test="${n.type==1 }">审批成员</c:if>
<c:if test="${n.type==2 }">投标单位</c:if>
<c:if test="${n.type==100 }">超级管理员</c:if> -->
</td>
<td>${n.email }</td>
<td>
<c:if test="${n.status==0 }">
<span class="glyphicon glyphicon-ok" style="color: green;"> 正常</span>
</c:if>
<c:if test="${n.status==1 }">
<span class="glyphicon glyphicon-remove" style="color: red;"> 删除</span>
</c:if>
</td>
<td><fmt:formatDate value="${n.createtime }" pattern="yyyy-MM-dd HH:mm" />
</td>
<td> <button type="button" class="btn btn-info btn-sm" onclick="javascript:editUser('${n.id}');">
<span class="glyphicon glyphicon-pencil"></span> 编辑
</button></td>
</tr>
<!-- </c:forEach> -->
</tbody>
</table>
<div class="row">
<div class="pagination-record-info col-sm-6">
共 <b>${contentNum }</b> 条记录，当前第 <b>${pageNum }/${totalPage}</b> 页
</div>
<ul class="pagination col-sm-6">
<li id="li_first" class="disabled">
<a href="<%=path%>/admin/userMgmtServlet?pageNum=1&s_userid=${s_userid }&stype=${stype}">第一页</a>
</li>
<li id="li_prev" class="disabled" ><a href="javaScript:prevPage(${pageNum })">上一页</a>
</li>
<c:forEach var="i" begin="1" end="${totalPage }">
<li id="li${i }"><a href="<%=path%>/admin/userMgmtServlet?pageNum=${i}&s_userid=${s_userid }&stype=${stype}">${i}</a>
</li>
</c:forEach>
<li id="li_next"><a href="javaScript:nextPage(${pageNum })" >下一页</a></li>
<li id="li_last">
<a href="<%=path%>/admin/userMgmtServlet?pageNum=${totalPage}&s_userid=${s_userid }&stype=${stype}" onclick="">最末页</a></li>
</ul>
</div>
 </div>
</template>

<script type="text/javascript">
export default {
  name: 'User',
  data () {
    return {
      stype: 0,
      username: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
    h1{
       margin: 0;
    }
</style>

<template>
   <div style="padding:20px;" id="app">
        <div class="panel panel-primary">
            <div class="panel-heading">材料需用计划</div>
            <table class="table table-bordered table-striped text-center">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>单据编号</th>
                        <th>计划日期</th>
                        <th>计划类型</th>
                        <th>备注</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for = "item in xyjhs" :key="item.code">
                      <td>{{item.num}}</td>
                      <td>{{item.code}}</td>
                      <td>{{item.bizDate}}</td>
                      <td v-if="item.jhlx=='JC'">集采</td>
                      <td v-else>自采</td>
                      <td>{{item.remark}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CLXYJH',
  data () {
    return {
      xyjhs: [
        {'num': 1, code: 'CLXYJH-1', bizDate: '2019-2-10', jhlx: 'JC', remark: '第一张单据'},
        {'num': 2, code: 'CLXYJH-2', bizDate: '2019-2-11', jhlx: 'ZC', remark: '第二张单据'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

tr,th{
  text-align:center;
}
</style>

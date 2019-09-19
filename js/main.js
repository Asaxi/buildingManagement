window.onload=function(){
 // 曲线图
 var chart=echarts.init(document.getElementById("Smoothline"));
 option = {
     tooltip:{
        trigger: 'axis',
        axisPointer:{
            snap:false,
            label:{
              formatter:'{value}kwh',  
            },
            lineStyle:{
                width:2,
                color:{
                    type:'linear',
                    x:0,y:0,x1:0,y2:1,
                    colorStops:[
                        {offset:0,color:'#FFD24D'},
                        {offset:1,color:'#1A1919'}
                    ]
                },
            }
        },
     },
 xAxis: {
 type: 'category',
 axisLine:{lineStyle:{color:'lightblue'}},         
 axisTick:{show:false},//是否显示刻度
 //axisLabel:{show:false},
 data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00','15:00','16:00','17:00','18:00']
         },
 yAxis: {
 type: 'value',
 axisLine:{lineStyle:{color:'lightblue'}},
 splitLine:{show:false},//是否显示分隔线
 axisTick:{show:false},
 data:[1000,3000,5000,8000]
     },                 
 series: [{
         data:[820, 932, 901, 934, 1290, 1330, 1600,1750,1860],
 type: 'line',
 smooth: true,
 showSymbol: false,
 //线条阴影
 lineStyle: {
     normal: {
         shadowBlur: 5,
         color:'yellow',
         shadowColor: 'rgba(150, 20, 142,0.7)'
     }
 }
         },
         {
         data:[100, 200, 300, 500, 800, 600, 1200,2100,2000],
 type: 'line',
 smooth: true,
 showSymbol: false,
 //线条阴影
 lineStyle: {
     normal: {
         shadowBlur: 5,
         shadowColor: 'rgba(240, 130, 142,0.7)'
     }
 }
         }],
     };
chart.setOption(option);
//环形图
document.title="环形图";
var charts=echarts.init(document.getElementById("bin"));
option2 = {

tooltip: {
trigger: 'item',
formatter: "{a} <br/>{b}: {c} ({d}%)"
},
legend: {
orient: 'vertical',
x: '75%',
//right:1,
y:'center',
icon:'emptyCircle',
itemWidth:10,
itemGap: 20,
data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','6'],
textStyle: {
 fontSize:14,
 color:'white'
}
},
series: [
{
 name:'访问来源',
 type:'pie',
 radius: ['45%', '60%'],
 avoidLabelOverlap: false,
 label: {
     normal: {
         show: false,
         position: 'center'
     },
     emphasis: {
         show: true,                    
         textStyle: {
             fontSize: '30',
             fontWeight: 'bold'
         }
     }
 },
 labelLine: {
     normal: {
         show: false
     }
 },
 data:[                
     {value:335, name:'直接访问'},
     {value:310, name:'邮件营销'},
     {value:234, name:'联盟广告'},
     {value:135, name:'视频广告'},
     {value:1548, name:'搜索引擎'},
     {value:60, name:'6'}
 ]
}
],
color:['red','green','yellow','blue','orange','pink']
};
charts.setOption(option2);
//环
var str="";
for(var i=0;i<1;i++)
{
    str=`<div class="th1">
    <div class="rings" id="ring`+i+`"></div>
    <div class="titles"><span>40%<br>报修总数<br><hr></span><span>1</span></div>
    </div>`;
    
    document.getElementById("Trend").innerHTML+=str;
    console.log("ring"+i);
    addRings("ring"+i);
};
ItemList();
logState();
};
function addRings(ids){
    var charts2=echarts.init(document.getElementById(ids));
    option3={
        animation:false,
        
        series: [
            {
                //name:'访问来源',
                type:'pie',
                radius: ['50%', '75%'],
                avoidLabelOverlap: false,
                label:{
                    normal:{
                        show:false
                    }
                },
                labelLine:{
                    normal:{
                        show:false
                    },
                },
                data:[
                    {value:50, name:'总占比'},
                    {value:100, name:'剩余'}
                ]
            } 
        ],
        color:['#23BFEC','#083145']
    };
    charts2.setOption(option3);

}
function logState(){
    var charts=echarts.init(document.getElementById("Log1"));
    var option={
        // tooltip:{
        //     trigger:'axis',  
        //     axisPointer:{
        //         show:false
        //     }
        // },
        // grid: {
        //     left: '3%',
        //     right: '4%',
        //     bottom: '3%',
        //     containLabel: true
        // },
        xAxis:{
            type:'category',
            boundaryGap:false,
            axisLine:{show:false},
            axisLabel:{show:false},
            axisTick:{show:false},
            data : ['周一','周二','周三','周四','周五','周六','周日'],
        }, 
        yAxis:{
            type : 'value',
            axisLine:{show:false},
            axisLabel:{show:false},
            splitLine:{show:false},
            axisTick:{show:false},
        },
        series:[{
            type:'line',
            smooth:true,
            showSymbol:false,
            lineStyle:{
                color:'#186391',
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(29,119,166)'
                }, {
                    offset: 1,
                    color: 'rgb(41,92,105)'
                }])
            },
             data:[0, 10, 6, 12, 7, 15, 3]
        }]
    };
    charts.setOption(option);    
}

function ItemList(){    
    var data=[{'type':'空调','use':'195','list':'','state':'关闭'},
             {'type':'空调','use':'100','list':'','state':'开启'},
             {'type':'空调','use':'150','list':'','state':'开启'},
             {'type':'空调','use':'185','list':'','state':'关闭'},
             {'type':'空调','use':'60','list':'','state':'开启'},
             {'type':'空调','use':'80','list':'','state':'关闭'}];
    console.log(data[0].state);
    var str="";
    var statecolor;
    for(var i=0;i<data.length;i++)
    {  
        if(data[i].state=='开启')
        statecolor='green';
        else
        statecolor='red';
        str+=`<ul>
        <li></li>
        <li>`+data[i].type+`</li>
        <li><hr style='width:`+data[i].use+`px'></li>
        <li>`+data[i].use+`kwh</li>
        <li id="Log1"></li>
        <li style='color:`+statecolor+`'>`+data[i].state+`</li>
        </ul>`;
    }
    document.getElementById("ItemList").innerHTML=str;
}

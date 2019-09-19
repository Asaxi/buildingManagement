window.onload=function addRings(){
    //YWGD();
   UsePie();
}
function YWGD(){
    var charts=echarts.init(document.getElementById("item1"));
    option={
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
    charts.setOption(option);
    var chart=echarts.init(document.getElementById("smooth"));
    options = {
        grid: {
            top: '30%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
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
   chart.setOption(options);
}
function UsePie(){
    var data=[                
        {value:335, name:'办公照明'},
        {value:310, name:'中央空调'},
        {value:234, name:'三层宿舍用电'},
        {value:135, name:'消防用电'},
        {value:1548, name:'厨房动力'},
        {value:60, name:'室外充电桩、照明'}
    ];
    var charts=echarts.init(document.getElementById("UsePie"));
    option2 = {
        grid:{
           
        },
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
        data:['办公照明','中央空调','三层宿舍用电','消防用电','厨房动力','室外充电桩、照明'],
        formatter:function(name){
            let target;
            for(let i=0;i<data.length;i++){
                if(data[i].name===name){
                    target=data[i].value
                }
            }
            //let arr=["{a|"+target+"}","{b|"+name+"}"]
            let arr=[target+"\n"+name]
            return arr//.join("\n")

        },
        textStyle: {
         fontSize:14,
         color:'white'
        }
        },
        series: [
        {
         name:'访问来源',
         type:'pie',
         radius: ['43%', '60%'],
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
         data:data
        }
        ],
        color:['red','green','yellow','blue','orange','pink']
        };
    charts.setOption(option2);
}
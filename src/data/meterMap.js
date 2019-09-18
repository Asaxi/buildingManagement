// 电表映射
const electricMeter = [
    {
        id: 402019124807,
        type: '空调内机',
        detail: "南一楼照明+空调",
    },
    {
        id: 402019124811,
        type: '机房用电',
        detail: "机房用电（弱电控制室）",
    },
    {
        id: 402019124813,
        type: '照明',
        detail: "200人会议室照明",
    },
    {
        id: 402019124810,
        type: '照明',
        detail: "南二照明",
    },
    {
        id: 402019124818,
        type: '应急照明',
        detail: "南二楼应急照明",
    },
    {
        id: 402019124808,
        type: '空调内机',
        detail: "南二楼空调内机",
    },
    {
        id: 402019124806,
        type: '空调内机',
        detail: "南三空调内机",
    },
    {
        id: 402019124819,
        type: '应急照明',
        detail: "南三应急照明",
    },
    {
        id: 402019124802,
        type: '照明',
        detail: "南三照明",
    },
    {
        id: 402019124839,
        type: '空调内机',
        detail: "南四楼空调内机",
    },
    {
        id: 402019124798,
        type: '照明',
        detail: "南四楼照明",
    },
    {
        id: 402019124826,
        type: '应急照明',
        detail: "南五楼应急照明",
    },
    {
        id: 402019124834,
        type: '空调内机',
        detail: "南五楼空调内机",
    },
    {
        id: 402019124801,
        type: '照明',
        detail: "南五楼照明",
    },
    {
        id: 402019124842,
        type: '空调内机',
        detail: "南六楼空调内机",
    },
    {
        id: 402019124836,
        type: '应急照明',
        detail: "南六楼应急照明",
    },
    {
        id: 402019124796,
        type: '照明',
        detail: "南六楼照明",
    },
    {
        id: 402019124795,
        type: '照明',
        detail: "南七层照明",
    },
    {
        id: 402019124821,
        type: '应急照明',
        detail: "南七层应急照明",
    },
    {
        id: 402019124835,
        type: '空调内机',
        detail: "南七层空调内机",
    },
    {
        id: 402018698779,
        type: '空调外机',
        detail: "南楼空调室外机",
    },
    {
        id: 402019124791,
        type: '太阳能',
        detail: "已装好，太阳能未通电",
    },
    {
        id: 402019124809,
        type: '照明',
        detail: "北六楼照明",
    },
    {
        id: 402019124797,
        type: '太阳能',
        detail: "北六楼太阳能",
    },
    {
        id: 402019124833,
        type: '应急照明',
        detail: "北六楼应急照明",
    },
    {
        id: 402019124817,
        type: '空调内机',
        detail: "北六楼空调内机",
    },
    {
        id: 402018698768,
        type: '空调外机',
        detail: "北楼空调外机",
    },
    {
        id: 402019124800,
        type: '照明',
        detail: "北五楼照明",
    },
    {
        id: 402019124822,
        type: '空调内机',
        detail: "北五楼空调内机",
    },
    {
        id: 402019124843,
        type: '应急照明',
        detail: "北五楼应急照明",
    },
    {
        id: 402019124823,
        type: '空调内机',
        detail: "北四楼空调内机",
    },
    {
        id: 402019124799,
        type: '照明',
        detail: "北四楼照明",
    },
    {
        id: 402019124827,
        type: '应急照明',
        detail: "北四楼应急照明",
    },
    {
        id: 402019124838,
        type: '空调内机',
        detail: "北三楼空调内机",
    },
    {
        id: 402019124814,
        type: '照明',
        detail: "北三楼照明",
    },
    {
        id: 402019124824,
        type: '应急照明',
        detail: "北三楼应急照明",
    },
    {
        id: 402019124816,
        type: '空调内机',
        detail: "北二楼空调内机",
    },
    {
        id: 402019124805,
        type: '照明',
        detail: "北二楼照明",
    },
    {
        id: 402019124840,
        type: '应急照明',
        detail: "北二楼应急照明",
    },
    {
        id: 402018698766,
        type: '厨房',
        detail: "南一楼厨房用电",
    },
    {
        id: 402019124812,
        type: '照明',
        detail: "北一楼照明",
    },
    {
        id: 402019124804,
        type: '空调内机',
        detail: "北一楼空调",
    },
    {
        id: 402019124830,
        type: '应急照明',
        detail: "北一楼应急照明",
    },
]

// 水表映射
const waterMeter = [ //
    {
        id: 101811200913,
        type: '南楼卫生间+茶水间',
        detail: '南二楼卫生间用水+茶水间',
    },
    {
        id: 101902174234,
        type: '北楼卫生间',
        detail: '北五楼卫生间用水',
    },
    {
        id: 101902174230,
        type: '北楼卫生间',
        detail: '北四楼卫生间用水',
    },
    {
        id: 101902174219,
        type: '北楼卫生间',
        detail: '北三楼卫生间用水',
    },
    {
        id: 101902174231,
        type: '北楼卫生间',
        detail: '北二楼卫生间用水',
    },
    {
        id: 101902174217,
        type: '北楼卫生间',
        detail: '北一楼卫生间用水',
    },
    {
        id: 101902174227,
        type: '直饮水+空气源热泵',
        detail: '直饮水+空气源热泵',
    },
    {
        id: 101902174233,
        type: '南楼卫生间+茶水间',
        detail: '南一楼卫生间',
    },
    {
        id: 101902174225,
        type: '南楼卫生间+茶水间',
        detail: '南三楼卫生间+茶水间',
    },
    {
        id: 101902174226,
        type: '南楼卫生间+茶水间',
        detail: '南四楼卫生间+茶水间',
    },
    {
        id: 101902174222,
        type: '南楼卫生间+茶水间',
        detail: '南五楼卫生间+茶水间',
    },
    {
        id: 101902174223,
        type: '南楼卫生间+茶水间',
        detail: '南六楼卫生间+茶水间',
    },
    {
        id: 101902174235,
        type: '南楼卫生间+茶水间',
        detail: '南七楼卫生间+茶水间',
    },
    {
        id: 101902174267,
        type: '垂直绿化',
        detail: '南楼垂直绿化',
    },
    {
        id: 101902174232,
        type: '厨房',
        detail: '厨房用水',
    },
    {
        id: 101902174228,
        type: '北楼茶水间',
        detail: '北楼所有茶水间',
    },
    {
        id: 101902174271,
        type: '垂直绿化',
        detail: '北楼垂直绿化',
    },
]

export {
    electricMeter,
    waterMeter
}
// 空调系统数据
const air_conditioner_data = [{
    label: '当前状态',
    value: '开',
}, {
    label: '即时室内空气温度',
    value: '26℃',
}, {
    label: '即时室内空气湿度',
    value: '30%',
}, {
    label: '每月室内空气温度',
    value: '26℃',
}, {
    label: '每月室内空气湿度',
    value: '26℃',
}, {
    label: '风速',
    value: '超高风',
}, {
    label: '模式',
    value: '自动',
}, {
    label: '设定温度',
    value: '26℃',
}];

// 新风系统数据
const fresh_air_data = [{
        label: '当前状态',
        value: '开',
    },
    {
        label: '风速',
        value: '睡眠模式',
    },
    {
        label: '模式',
        value: '自动',
    },
];


// 房间号数据
const room_data = [
    '1287',
    '1288',
    '1289',
]

// 首页运维项目数据
const home_oper_data = [{
        id: 2,
        roomName: 102,
        title: '下水道堵住',
        time: 1555700642000,
        state: 'finished',
        content: '这几天我家厨房顶发生渗水现象，每间隔6，7秒钟就会滴下一滴。（如图，就是顺着这根管子中间部分向下渗水）现在的漏水点不止这根管子，向卫生间过渡的墙顶上又出现了一个漏水点。其实去年也出现了这种情况，和楼上邻居反应后，楼上邻居找来透下水道的人来透，之后就没有出现过漏水现象。可前几天又开始渗水。找到楼上邻居，楼上邻居找到透下水的人来，可是这次并不见效。渗水现象仍然存在。再找到邻居，邻居说他们也找不出原因.请问这种渗水情况是什么原因，楼上的漏水点会在哪里？'
    },
    {
        id: 1,
        roomName: 103,
        title: '空调无法制冷',
        time: 1525700642000,
        state: 'unfinished',
        content: '这几天我家厨房顶发生渗水现象，每间隔6，7秒钟就会滴下一滴。（如图，就是顺着这根管子中间部分向下渗水）现在的漏水点不止这根管子，向卫生间过渡的墙顶上又出现了一个漏水点。其实去年也出现了这种情况，和楼上邻居反应后，楼上邻居找来透下水道的人来透，之后就没有出现过漏水现象。可前几天又开始渗水。找到楼上邻居，楼上邻居找到透下水的人来，可是这次并不见效。渗水现象仍然存在。再找到邻居，邻居说他们也找不出原因.请问这种渗水情况是什么原因，楼上的漏水点会在哪里？如果刨开地面会很麻烦，在楼上安装明管会管用吗？麻烦大家了。'
    },
]

// 建筑楼层、房间信息
const build_data = {
    '北楼': [],
    '西楼': [],
    '南楼': [],
}

// 建筑楼层、房间信息
// const build_data = {
//     '北楼': [{
//             floorName: '1楼',
//             rooms: ['101', '102', '103'],
//         },
//         {
//             floorName: '2楼',
//             rooms: ['201', '202', '203'],
//         },
//         {
//             floorName: '3楼',
//             rooms: ['301', '302', '303'],
//         },
//         {
//             floorName: '4楼',
//             rooms: ['401', '402', '403'],
//         },
//         {
//             floorName: '5楼',
//             rooms: ['501', '502', '503'],
//         },
//         {
//             floorName: '屋顶',
//             rooms: ['屋顶'],
//         },
//         {
//             floorName: '屋顶以上',
//             rooms: [],
//         },
//     ],
//     '西楼': [{
//             floorName: '1楼',
//             rooms: ['101', '102', '103'],
//         },
//         {
//             floorName: '2楼',
//             rooms: ['201', '202', '203'],
//         },
//         {
//             floorName: '屋顶',
//             rooms: ['屋顶'],
//         },
//     ],
//     '南楼': [{
//             floorName: '1楼',
//             rooms: ['101', '102', '103'],
//         },
//         {
//             floorName: '2楼',
//             rooms: ['201', '202', '203'],
//         },
//         {
//             floorName: '3楼',
//             rooms: ['301', '302', '303'],
//         },
//         {
//             floorName: '4楼',
//             rooms: ['401', '402', '403'],
//         },
//         {
//             floorName: '5楼',
//             rooms: ['501', '502', '503'],
//         },
//         {
//             floorName: '6楼',
//             rooms: ['601', '602', '603'],
//         },
//         {
//             floorName: '7楼',
//             rooms: ['701', '702', '703'],
//         },
//         {
//             floorName: '屋顶',
//             rooms: ['屋顶'],
//         },
//         {
//             floorName: '屋顶以上',
//             rooms: ['屋顶以上'],
//         },
//     ],
// }

export {
    air_conditioner_data,
    build_data,
    fresh_air_data,
    home_oper_data,
    room_data,
}
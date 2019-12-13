window.onload = function () {
    function init() {
        // 创建地图
        var map_center = new qq.maps.LatLng(39.9808197402, 116.313788),
            marker_center = new qq.maps.LatLng(39.980408, 116.306595);
        var map = new qq.maps.Map(document.getElementById("tencentMap"), {
            center: map_center, // 地图的中心地理坐标
            zoom: 13, // 地图缩放级别
            mapStyleId: 'style1' // 该key绑定的style1对应于经典地图样式，若未绑定将弹出无权限提示窗

        });
        var marker = new qq.maps.Marker({
            position: marker_center,
            map: map
        });
        var description = new qq.maps.Label({
            position: marker_center,
            map: map,
            content: '北京市苏州街神州数码大厦'
        });
    };
    //调用初始化函数
    init();
}
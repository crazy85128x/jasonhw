function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {
            lat: 25.046269,
            lng: 121.517551
        }
    });
    map.data.loadGeoJson('https://maskmap.azurewebsites.net/api/mask/getmaskstock');
    
    let Image = {
        url:'/JS/Google_map/cat.png'
    }

    map.data.setStyle({
        icon:Image
    });
}

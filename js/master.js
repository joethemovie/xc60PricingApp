$(document).ready(function() {
  var vehicleArray = [

    ['VOG0248',
    '2016 Volvo XC60 T6 Platinum',
    'http://www.volvocarsramsey.com/new/Volvo/2016-Volvo-XC60-ramsey-nj-b5fe33180a0e0ae7487386d7e8693671.htm',
    '<sup>$</sup>44,350',
    '<sup>$</sup>51,785',
    47,
    '3.0L Automatic',
    'Onyx Black',
    'Off-Black',
    '17 city/23 hwy'];

  for (var i = 0; i < vehicleArray.length; i++) {
    $('.contentContainer').append('<div class="vehicleContainer"><div class="leftSpanColumn"><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_1.jpg" name="mainVehicleImg" alt="Vehicle Image" class="mainImg ' + vehicleArray[i][0] + ' primary mainImg1"><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_2.jpg" alt="Vehicle Image" class="mainImg mainImg2"></a><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_3.jpg" alt="Vehicle Image" class="mainImg mainImg3"></a><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_4.jpg" alt="Vehicle Image" class="mainImg mainImg4"></a><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_5.jpg" alt="Vehicle Image" class="mainImg mainImg5"></a><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_6.jpg" alt="Vehicle Image" class="mainImg mainImg6"></a><div class="supImages"><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_1.jpg" alt="supporting image" name="supVehicleImg1" class="supImg supImg1" /><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_2.jpg" alt="supporting image" class="supImg supImg2" /><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_3.jpg" alt="supporting image" class="supImg supImg3"><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_4.jpg" alt="supporting image" class="supImg supImg4"><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_5.jpg" alt="supporting image" class="supImg supImg5"><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_6.jpg" alt="supporting image" class="supImg supImg6"></div></div><div class="rightSpanColumn"><h1 class="vehicleTitle">'
    + vehicleArray[i][1] + '</h1><h1 class="price">'
    + vehicleArray[i][3] + '</h1><h4 class="msrp">MSRP: '
    + vehicleArray[i][4] +'</h4><ul><li class="mileage"><strong>Mileage:</strong> '
    + vehicleArray[i][5] + '</li><li class="extColor"><strong>Exterior Color:</strong> '
    + vehicleArray[i][7] + '</li><li class="intColor"><strong>Interior Color:</strong> '
    + vehicleArray[i][8] + '</li><li class="engineType"><strong>Engine:</strong> '
    + vehicleArray[i][6] + '</li><li    class="trans"><strong>Transmission:</strong> '
    + vehicleArray[i][6] + '</li><li class="mpg"><strong>MPG:</strong> '
    + vehicleArray[i][9] + '</li><li class="stockNumber"><strong>Stock:</strong> '
    + vehicleArray[i][0] + '</li></ul><a href="'
    + vehicleArray[i][2] + '" class="vehicleCTA" target="_blank">VIEW VEHICLE</a></div></div>');


    $('.mainImg').hide();
    $('.primary').show();

    $('.supImg1').click(function(event){
      $('.mainImg').hide();
      $('.mainImg1').show();
    });
    $('.supImg2').click(function(event){
      $('.mainImg').hide();
      $('.mainImg2').show();
    });
    $('.supImg3').click(function(event){
      $('.mainImg').hide();
      $('.mainImg3').show();
    });
    $('.supImg4').click(function(event){
      $('.mainImg').hide();
      $('.mainImg4').show();
    });
    $('.supImg5').click(function(event){
      $('.mainImg').hide();
      $('.mainImg5').show();
    });
    $('.supImg6').click(function(event){
      $('.mainImg').hide();
      $('.mainImg6').show();
    });
  }

});

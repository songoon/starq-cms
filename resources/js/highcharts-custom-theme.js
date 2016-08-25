/**
 * theme for Highcharts JS
 * @author songoon
 */

Highcharts.theme = {
   chart: {
      backgroundColor: "#fff",
      borderColor: "#4095BF",
      borderRadius: 10,
      borderWidth: 1,
      spacingTop: 20,
      spacingRight: 15,
      spacingBottom: 15,
      spacingLeft: 15,
      style: {
         fontFamily: 'Open Sans',
      }
   },
   title: {
      style: {
         fontSize: '1.25em',
         fontWeight: 'normal'
      }
   },
   legend: {
      itemStyle: {
         fontWeight: 'normal',
         fontSize: '1.0em'
      }
   },
   navigation: {
      buttonOptions: {
         theme: {
            fill: '#fff'
         }
      }
   },

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
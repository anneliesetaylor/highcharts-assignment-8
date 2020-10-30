// Global Wage Gap Bar Chart

Highcharts.chart('OECD_bar_graph', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'The Gender Wage Gap Globally'
    },
    subtitle: {
        text: 'Source: data.oecd.org'
    },
    xAxis: {
      categories: ["Costa Rica", "Colombia", "Belgium", "Greece", "Denmark", "Norway", "Hungary", "Italy", "New Zealand", "Sweden", "Portugal", "Poland", "Iceland", "Australia", "Chile", "France", "Slovak Republic", "Czech Republic", "Austria", "Switzerland", "Germany", "United Kingdom", "Canada", "United States", "Mexico", "Finland", "Isreal", "Japan", "Korea"]
    },
    yAxis: {
      title: {
        text: 'Percent difference between median earnings of men and women relative to median earnings of men'
      }
    },
    series: [{
      name: 'Gender Wage Gap',
      data: [4.0, 4.2, 4.5, 4.9, 5.0, 5.1, 5.6, 6.5, 7.6, 9.6, 11.5, 11.5, 11.7, 12.5, 12.9, 13.7, 13.9, 14.7, 14.9, 15.1, 15.3, 16.0, 17.6, 18.5, 18.8, 18.9, 22.7, 23.5, 32.5]
    }]
  });

// US Median Weekly Earnings by Sex

  Highcharts.chart('bls_median_weekly_earning', {

      title: {
          text: 'Median Weekly Earnings of Full-Time Wage and Salary Workers by Sex, 1999-2019'
      },
      subtitle: {
          text: 'Source: www.bls.org'
      },
      yAxis: {
          title: {
              text: 'Dollars'
          }
      },
      xAxis: {
          categories: [1999, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },
      series: [{
          name: 'Males',
          data: [618, 680, 695, 713, 722, 743, 766, 798, 819, 824, 832, 854, 860, 871, 895, 915, 941, 973, 1007]
      }, {
          name: 'Females',
          data: [473, 530, 552, 573, 585, 600, 614, 638, 657, 669, 684, 691, 706, 719, 726, 749, 770, 789, 812]
      }],

      responsive: {
          rules: [{
              condition: {
                  maxWidth: 900
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }
  });

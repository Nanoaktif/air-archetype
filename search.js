// $(function() {

// 	rome(input_from, {
// 		dateValidator: rome.val.beforeEq(checkin-date),
// 		time: false
// 	  });
  
// 	  rome(input_to, {
// 		dateValidator: rome.val.afterEq(checkin-date),
// 		time: false
// 	  });
  
  
//   });

var jQuery = require('jquery');


// Date Range Picker'ı etkinleştir
jQuery('#checkin-date, #checkout-date').daterangepicker({
    startDate: moment(),
    endDate: moment().add(1, 'days'),
	opens:'center',
    autoUpdateInput: false, // Otomatik güncellemeyi devre dışı bırak
    locale: {
        format: 'YYYY-MM-DD'
    }
});

// Tarih aralığı seçildiğinde, input alanlarına değerleri yerleştir
jQuery('#checkin-date, #checkout-date').on('apply.daterangepicker', function(ev, picker) {
    jQuery(this).val(picker.startDate.format('YYYY-MM-DD') + ' - ' + picker.endDate.format('YYYY-MM-DD'));
});

// "Başlangıç Tarihi" input alanından tarih seçildiğinde, "Bitiş Tarihi" input alanını güncelle
jQuery('#checkin-date').on('change', function() {
    jQuery('#checkout-date').daterangepicker('setStartDate', jQuery(this).val());
});

// "Bitiş Tarihi" input alanından tarih seçildiğinde, "Başlangıç Tarihi" input alanını güncelle
jQuery('#checkout-date').on('change', function() {
    jQuery('#checkin-date').daterangepicker('setEndDate', jQuery(this).val());
});


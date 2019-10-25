const template = (name='John Doe',title='Developer',phone='+90 (000) 000 00 00') => `<html><head><meta http-equiv="content-type" content="text/html;charset=utf-8"/></head><body><table style="margin-top:24px;border-collapse:collapse;"><tbody><tr><td style="padding: 0 0 24px;margin: 0;"><a href="http://www.bigdatateknoloji.com" target="_blank"><img src="http://www.bigdatateknoloji.com/signature/images/logo-new@2x.png" width="229" height="34" style="display: block; margin: 0px; float: none; padding: 0px; border: 0px;" alt="Bigdata Teknoloji A.Ş."></a><td></tr><tr><td style="font-family: '-apple-system','system-ui','BlinkMacSystemFont','Poppins','Helvetica', Arial; font-size: 16px; font-weight: bold; padding: 0; color: #231F20;">${name}</td></tr><tr><td style="font-family: '-apple-system','system-ui','BlinkMacSystemFont','Poppins', 'Helvetica', Arial; font-size: 14px; font-weight: 500; margin: 4px 0 0px; padding: 0; color: #231F20;">${title}</td></tr><tr><td style="font-family: '-apple-system','system-ui','BlinkMacSystemFont','Poppins', 'Helvetica', Arial; font-size: 14px; padding: 24px 0 5px; color: #231F20;"> <a href="tel:${phone}" style="color: rgb(35, 31, 32); text-decoration: none !important;"> <span style="text-decoration:none;color: rgb(35, 31, 32);text-decoration:none !important;">${phone}</span> </a></td></tr><tr><td style="font-family: '-apple-system','system-ui','BlinkMacSystemFont','Poppins', 'Helvetica', Arial; font-size: 14px; padding: 0 0 8px;"> <a href="tel:+902166930793" style="color: rgb(35, 31, 32); text-decoration: none !important;"> <span style="color: rgb(35, 31, 32);text-decoration:none !important;">+90 (216) 693 07 93</span> </a></td></tr><tr><td style="font-family: '-apple-system','system-ui','BlinkMacSystemFont','Poppins', 'Helvetica', Arial; font-size: 14px; margin: 0 0 8px; color: #231F20;"> <a href="http://www.bigdatateknoloji.com" style="color: rgb(101, 21, 220); text-decoration: none !important;"> <span style="text-decoration:none !important;color: rgb(101, 21, 220);">www.bigdatateknoloji.com</span> </a></td></tr></tbody></table></body></html>`;

$(function(){
    const form = $('.signature-generator');
    const textarea = $('#generated');
    const viewer = $('.viewer');
    const hiddens = $('.shower');
    const copyHtmlBtn = $('.copyBtn')
    var temp = "";
    viewer.html(template())
    var element = document.getElementById('phone');
    var maskOptions = {
      mask: '+{9\\0} (000) 000 00 00'
    };
    IMask(element, maskOptions);
    form.on('submit', function(e){
        e.preventDefault();
        temp = template(
            $('[name="name"').val(),
            $('[name="title"').val(),
            $('[name="phone"').val()
        )
        textarea.val(temp);
        viewer.html(temp);
        hiddens.show();
    });
    copyHtmlBtn.on('click', function(){
        copyToClip(temp);
        $('#element').toast('show');
    })
})
function copyToClip(str) {
    function listener(e) {
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
  };
  
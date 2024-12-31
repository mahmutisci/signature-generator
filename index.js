const template = (
  name = "John Doe",
  title = "Developer",
  phone = "+90 (000) 000 00 00"
) => `<html><head><meta http-equiv="content-type" content="text/html;charset=utf-8" /></head><body><table style="margin: 0; padding: 0; border-collapse: collapse"><tbody><tr><td style="padding: 0"><a href="https://www.hipporello.com" target="_blank"><img src="https://mahmut.link/signature-generator/assets/hipporello-logo.png" height="100" style="display: block; margin: 0px; float: none; padding: 0px; border: 0px;" title="Hipporello Logo" alt="Hipporello Logo" /></a></td>
<td style="padding: 0 0 0 8px"><table style="padding: 0; margin: 0"><tr><td style="font-family: '-apple-system', 'system-ui', 'BlinkMacSystemFont', 'Poppins', 'Helvetica', Arial; font-size: 13px; font-weight: bold; padding: 0; margin: 0; color: #001975;">${name}</td></tr>
            <tr>
              <td
                style="
                  font-family: '-apple-system', 'system-ui',
                    'BlinkMacSystemFont', 'Poppins', 'Helvetica', Arial;
                  font-size: 12px;
                  font-weight: 400;
                  padding: 0 0 4px;
                  color: #707589;
                "
              >
                ${title}
              </td>
            </tr>
            <tr>
              <td>
                <a
                  style="
                    font-family: '-apple-system', 'system-ui',
                      'BlinkMacSystemFont', 'Poppins', 'Helvetica', Arial;
                    font-size: 12px;
                    font-weight: normal;
                    margin: 4px 0 0px;
                    padding: 0;
                    color: #707589;
                    text-decoration: none;
                  "
                  href="tel:${phone}"
                  >${phone}</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  style="
                    font-family: '-apple-system', 'system-ui',
                      'BlinkMacSystemFont', 'Poppins', 'Helvetica', Arial;
                    font-size: 12px;
                    font-weight: 400;
                    margin: 0;
                    padding: 0 4px 0 0;
                    color: #43b9fb;
                  "
                  href="https://www.facebook.com/hipporello"
                  target="_blank"
                  >Facebook</a
                >

                <a
                  style="
                    font-family: '-apple-system', 'system-ui',
                      'BlinkMacSystemFont', 'Poppins', 'Helvetica', Arial;
                    font-size: 12px;
                    font-weight: 400;
                    margin: 0;
                    padding: 0 4px 0 0;
                    color: #43b9fb;
                  "
                  href="https://www.twitter.com/hipporello"
                  target="_blank"
                  >Twitter</a
                >

                <a
                  style="
                    font-family: '-apple-system', 'system-ui',
                      'BlinkMacSystemFont', 'Poppins', 'Helvetica', Arial;
                    font-size: 12px;
                    font-weight: 400;
                    margin: 0;
                    padding: 0 4px 0 0;
                    color: #43b9fb;
                  "
                  href="https://www.instagram.com/hipporello"
                  target="_blank"
                  >Instagram</a
                >

                <a
                  style="
                    font-family: '-apple-system', 'system-ui',
                      'BlinkMacSystemFont', 'Poppins', 'Helvetica', Arial;
                    font-size: 12px;
                    font-weight: 400;
                    margin: 0;
                    padding: 0 4px 0 0;
                    color: #43b9fb;
                  "
                  href="https://www.linkein.com/company/hipporello"
                  target="_blank"
                  >Linkedin</a
                >

                <a
                  style="
                    font-family: '-apple-system', 'system-ui',
                      'BlinkMacSystemFont', 'Poppins', 'Helvetica', Arial;
                    font-size: 12px;
                    font-weight: 400;
                    margin: 0;
                    padding: 0 4px 0 0;
                    color: #001975;
                  "
                  href="https://www.hipporello.com"
                  target="_blank"
                  >Try Hipporello!</a
                >
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>`;

$(function () {
  const form = $(".signature-generator");
  const textarea = $("#generated");
  const viewer = $(".viewer");
  const hiddens = $(".shower");
  const copyHtmlBtn = $(".copyBtn");
  var temp = "";
  viewer.html(template());
  var element = document.getElementById("phone");
  var maskOptions = {
    mask: "+{9\\0} (000) 000 00 00",
  };
  IMask(element, maskOptions);
  form.on("submit", function (e) {
    e.preventDefault();
    temp = template(
      $('[name="name"').val(),
      $('[name="title"').val(),
      $('[name="phone"').val()
    );
    textarea.val(temp);
    viewer.html(temp);
    hiddens.show();
  });
  copyHtmlBtn.on("click", function () {
    copyToClip(temp);
    $("#element").toast("show");
  });
});
function copyToClip(str) {
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
}

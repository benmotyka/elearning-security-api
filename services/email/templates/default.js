export default ({textContent}) => {
  return `
  <!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="x-apple-disable-message-reformatting">
      <title></title>
      <!--[if mso]>
      <noscript>
          <xml>
              <o:OfficeDocumentSettings>
                  <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
          </xml>
      </noscript>
      <![endif]-->
      <style>
          table, td, div, h1, p {font-family: Arial, sans-serif;}
          .im {
             color: inherit !important;
          }
          a {color: #E84545 !important;}
      </style>
  </head>
  <body style="margin:0;padding:0;">
      <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#fff;">
          <tr>
              <td align="center" style="padding:0;">
                  <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                      <tr>
                          <td align="center" style="padding:20px 0;background:#212439;">
                              <img src="https://staysecure.pl/logo.png" alt="" width="150" style="height:auto;display:block;" />
                          </td>
                      </tr>
                      <tr style="background:transparent linear-gradient(180deg, #2B2E4A 0%, #2B2E4A 100%) 0% 0% no-repeat padding-box;">
                          <td style="padding:36px 30px 42px 30px;">
                              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                  <tr>
                                      <td style="padding:0;color:#fff;opacity:0.8;">
                                          <h1 style="font-size:20px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Hello,</h1>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="padding:0 0 12px 0;">
                                        <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;color:#fff;opacity:0.7;">
                                        ${textContent}
                                        </p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="padding:0;color:#fff;opacity:0.8;">
                                        <h5 style="font-size:20px;margin:0;font-family:Arial,sans-serif;">
                                        Best regards,<br/>Staysecure Team
                                        </h5>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                      <tr>
                          <td style="padding:30px;background:#212439;">
                              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                                  <tr>
                                      <td style="padding:0;width:50%;" align="left">
                                          <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#E84545;">
                                              &reg; staysecure.pl<br/>
                                          </p>
                                      </td>
                                      <td style="padding:0;width:50%;" align="right">
                                          <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                              <tr>
                                                  <td style="padding:0 0 0 10px;width:38px;">
                                                      <a href="http://www.twitter.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/tw_1.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                                                  </td>
                                                  <td style="padding:0 0 0 10px;width:38px;">
                                                      <a href="http://www.facebook.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
  </body>
  </html>
    `;
};

// json2html.js
export default function json2html(data) {
    // Create the table header
    let html = '<table data-user="meshramchaitan@gmail.com"><thead><tr>';
    const headers = ["Name", "Age", "Gender"];
    headers.forEach(header => {
      html += <th>${header}</th>;
    });
    html += '</tr></thead><tbody>';
  
    // Create the table rows
    data.forEach(item => {
      html += '<tr>';
      headers.forEach(header => {
        html += <td>${item[header] !== undefined ? item[header] : ''}</td>;
      });
      html += '</tr>';
    });
  
    html += '</tbody></table>';
    return html;
  }

var htmlEscapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "\'": "&apos;",
};

function htmlEscape(text) {
  return text.replace(/[&<>"']/g, function(ch) { return htmlEscapeMap(ch); });
}

var Module = {
  print: function(text) {
    text = htmlEscape(text).replace('/\n/g', '<br>');
    document.write('<span class="stdout">' + text + '<br>' + '</span>');
  },
  printErr: function(text) {
    text = htmlEscape(text).replace('/\n/g', '<br>');
    document.write('<span class="stderr">' + text + '<br>' + '</span>');
  }
};

//Based somewhat on intermediate types
//https://github.com/felixge/node-mysql#type-casting

exports.get = function(column_type) {

  var it = null;

  if(column_type.match(/^(int|smallint|mediumint|bigint|float|double|decimal).*$/i)) {
    it =  'Number';
  }
  else if(column_type.match(/^(date).*$/i)) {
    it = 'Date'; 
  }
  else if(column_type.match(/^(time).*$/i)) {
    it = 'Time';
  }
  else if(column_type.match(/^(datetime).*$/i)) {
    it = 'DateTime';
  }
  else if(column_type.match(/^(char|varchar|tinytext|binary|varbinary|bit).*$/i)) {
    it = 'Text';
  }
  else if(column_type.match(/^(mediumtext|longtext|text|tinyblob|mediumblob|longblob|blob).*$/i)) {
    it = 'TextArea';
  }
  else if(column_type.match(/^(tinyint).*$/i)) {
    it = 'Checkbox';
  }
  else if(column_type.match(/^(enum|set).*$/i)) {
    it = 'Select';
  }
  else { 
    throw "Unhandled COLUMN_TYPE";
  }

  return it;
}


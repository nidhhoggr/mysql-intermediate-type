//Based somewhat on intermediate types
//https://github.com/felixge/node-mysql#type-casting

exports.get = function(column_type) {

  var it = null;

  if(column_type.match(/^(int|smallint|mediumint|bigint|float|double|decimal).*$/i)) {
    it =  'Number';
  }
  else if(column_type.match(/^(datetime|date|time).*$/i)) {
    it = 'Date'; 
  }
  else if(column_type.match(/^(tinyblob|mediumblob|longblob|blob|binary|varbinary|bit).*$/i)) {
    it = 'Buffer';
  }    
  else if(column_type.match(/^(char|varchar|tinytext|mediumtext|longtext|text|enum|set).*$/i)) {
    it = 'String';
  }
  else if(column_type.match(/^(tinyint).*$/i)) {
    it = 'Boolean';
  }
  else { 
    throw "Unhandled COLUMN_TYPE: " + column_type;
  }

  return it;
}

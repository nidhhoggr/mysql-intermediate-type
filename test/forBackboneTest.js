var intermediateType = require('../lib/forBackbone.js');

var testBackboneFormTypeConversion = function() {

  var randomColTypeArr = [
    "int(10) unsigned",
    "int(10)",
    "enum('VacuSmart','Roots Meter','TriTester Model 2.96')",
    "varchar(255)",
    "date",
    "text",
    "datetime",
    "varchar(10)",
    "decimal(5,2)",
    "varchar(30)",
    "enum('New Installation','Annual Test','Required by ADEM')",
    "enum('hydro','vacuum','pressure','spill bucket gauge')",
    "enum('fill','vapor')",
    "enum('Sub Pump','Intermediate','Dispenser')",
    "decimal(4,2)",
    "enum('Certification','Re-Certification')",
    "enum('N/A','On','Off')",
    "varchar(50)",
    "decimal(5,3)",
    "varchar(55)",
    "float(10,2)",
    "enum('pound - inches','pound - feet')",
    "enum('','Drain Valve','Overfill Protection')",
    "varchar(20)",
    "enum('Y','N','I','NA','X')",
    "enum('Y','N','I','X')",
    "int(4)",
    "decimal(10,2)",
    "enum('audible','visible')",
    "tinyint(1)",
    "tinyint(4)",
    "enum('Tank','Pipe','Sump')",
    "enum('Yes','No')",
    "decimal(10,4)",
    "enum('Atmospheric (Dry)','Hydrostatically Monitored (Brine Filled)','Vacuum Monitored','Pressure Monitored')",
    "enum('Dry','Wet')",
    "enum('Water','Fuel','Both')",
    "enum('Ball Float Valve','Drop Tube Shutoff','Electronic Alarm')",
    "int(2)",
    "decimal(6,2)",
    "decimal(7,4)",
    "enum('','Impact Valve','STP','Air Eliminator')",
    "enum('','Closed Ball Valve','Screwed Down Check Valve','Install Bullet','Isolation Plate')",
    "time",
    "decimal(6,4)",
    "decimal(7,5)",
    "enum('Stage I NESHAP','Stage II')",
    "decimal(8,2)",
    "enum('above','under','coaxial-vacuum','unknown')",
    "varchar(100)",
    "enum('SCFM','SCFH')",
    "enum('screw','clamp','both','neither','NA','X')",
    "enum('bucket','sump','pan')",
    "enum('pass','fail','n/a')",
    "decimal(8,4)",
    "enum('water','brine','dry')",
    "enum('observation well','temporary well','doublewall tank')",
    "enum('tight tank','ullage leak','wet leak','I')",
    "enum('no water intrusion','water intrusion','not applicable','I')",
    "varchar(25)",
    "enum('0','1')",
    "enum('STP Sump','Fill Sump','Dispenser Pan','Tank Interstitial')",
    "enum('OK','Not OK')",
    "enum('OK','Leak')",
    "enum('','Not Present','Satisfactory','Unsatisfactory')",
    "enum('','EMCO','OPW','Fairfield','Pemco','Universal','Phil-Tite','CNI','Clay & Bailey')",
    "enum('','Drop Tube','Ballfloat','Alarm')",
    "enum('Wet','Dry','Wet/Dry','NA')"  
  ];

  for(var k in randomColTypeArr) {

    colType = randomColTypeArr[k];

    console.log(colType + ": " + intermediateType.get(colType));
  }
}

testBackboneFormTypeConversion(); 

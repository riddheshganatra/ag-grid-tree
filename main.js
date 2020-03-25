var columnDefs = [
  { headerName: "", field: "type", cellRenderer: "medalCellRenderer" },
  { headerName: "dec", field: "dec" },
  { headerName: "nov", field: "nov" },
  { headerName: "oct", field: "oct" },
  { headerName: "sep", field: "sep" },
  { headerName: "aug", field: "aug" },
  { headerName: "jul", field: "jul" },
  { headerName: "jun", field: "jun" },
  { headerName: "may", field: "may" },
  { headerName: "apr", field: "apr" }
  // { headerName: "level", field: "level" },
  // { headerName: "expanded", field: "expanded" }
];

let showBlankForExpanded = true;
let blankForExpandedObject = {
  dec: "",
  nov: "",
  oct: "",
  sep: "",
  aug: "",
  jul: "",
  jun: "",
  may: "",
  apr: ""
};

var rowData = [
  {
    type: "balance sheet",
    dec: "12312",
    nov: "2321232",
    oct: "231231",
    sep: "234334",
    aug: "343453",
    jul: "34534534",
    jun: "34534534",
    may: "3452332",
    apr: "1245665",
    childrens: [
      {
        type: "Assets",
        dec: "123123",
        nov: "2323",
        oct: "87",
        sep: "45654",
        aug: "34534",
        jul: "34534",
        jun: "342",
        may: "8767",
        apr: "567576",
        childrens: [
          {
            type: "Motgage loans held for investment, net",
            dec: "1",
            nov: "2",
            oct: "3",
            sep: "4",
            aug: "55",
            jul: "6",
            jun: "45",
            may: "34",
            apr: "12",
            childrens: [
              {
                type: "xyz",
                dec: "5454",
                nov: "3434",
                oct: "2323",
                sep: "12",
                aug: "8787",
                jul: "67567",
                jun: "656",
                may: "45645",
                apr: "6567",
                childrens: []
              }
            ]
          },
          {
            type: "claims receivables, net",
            dec: "121",
            nov: "221",
            oct: "321",
            sep: "421",
            aug: "5521",
            jul: "621",
            jun: "4521",
            may: "3421",
            apr: "1221",
            childrens: [
              {
                type: "abc",
                dec: "988",
                nov: "787",
                oct: "676",
                sep: "5656",
                aug: "454",
                jul: "343",
                jun: "232",
                may: "121",
                apr: "3434",
                childrens: []
              }
            ]
          },
          {
            type: "acquired property, net",
            dec: "12551",
            nov: "22551",
            oct: "32551",
            sep: "42551",
            aug: "552551",
            jul: "62551",
            jun: "452551",
            may: "342551",
            apr: "122551",
            childrens: [
              {
                type: "1789989 REO properties",
                dec: "33",
                nov: "22",
                oct: "22",
                sep: "65",
                aug: "44",
                jul: "898",
                jun: "676",
                may: "5656",
                apr: "4545",
                childrens: [
                  {
                    type: "1787099 npa clearing account - reo",
                    dec: "5434345",
                    nov: "34534",
                    oct: "1232321",
                    sep: "2312657657",
                    aug: "565534",
                    jul: "2345465",
                    jun: "998788",
                    may: "3456",
                    apr: "456676",
                    childrens: [
                      {
                        type: "18999882 reo properties accounting adjustment",
                        dec: "5434345",
                        nov: "34534",
                        oct: "1232321",
                        sep: "2312657657",
                        aug: "565534",
                        jul: "2345465",
                        jun: "998788",
                        may: "3456",
                        apr: "456676",
                        childrens: [
                          {
                            type: "18999882 01  roc reo properties",
                            dec: "34345",
                            nov: "534",
                            oct: "12321",
                            sep: "237657",
                            aug: "5634",
                            jul: "2365",
                            jun: "9988",
                            may: "346",
                            apr: "476",
                            childrens: []
                          },
                          {
                            type: "18999882 02  reo properties carry over",
                            dec: "23",
                            nov: "53",
                            oct: "121",
                            sep: "27657",
                            aug: "534",
                            jul: "265",
                            jun: "988",
                            may: "36",
                            apr: "46",
                            childrens: []
                          },
                          {
                            type: "18999882 03  reo day 1 cost bases",
                            dec: "233",
                            nov: "533",
                            oct: "1221",
                            sep: "2757",
                            aug: "54",
                            jul: "25",
                            jun: "9288",
                            may: "326",
                            apr: "436",
                            childrens: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: "Liablities",
        dec: "345",
        nov: "45",
        oct: "4545",
        sep: "4545",
        aug: "4545",
        jul: "4545",
        jun: "4545",
        may: "4545",
        apr: "4545",
        childrens: []
      },
      {
        type: "Equity",
        dec: "123",
        nov: "32123123",
        oct: "2323",
        sep: "3232",
        aug: "324545",
        jul: "4534534",
        jun: "2343435",
        may: "345345",
        apr: "987888",
        childrens: []
      }
    ]
  },
  {
    type: "Incom statement",
    dec: "8765",
    nov: "34453",
    oct: "34534",
    sep: "345345",
    aug: "3453467",
    jul: "098",
    jun: "5675",
    may: "456",
    apr: "34534",
    childrens: []
  }
];

// we need to add unique id in every record, so we can detect particular click
let idCount = 0;
addIdInDataResurcive(rowData);

// let the grid know which columns and what data to use
var gridOptions = {
  columnDefs: columnDefs,
  defaultColDef: {
    sortable: true,
    resizable: true
  },
  components: {
    medalCellRenderer: MedalCellRenderer
  },
  rowData: rowData
};

function MedalCellRenderer() {}

// init method gets the details of the cell to be renderer
MedalCellRenderer.prototype.init = function(params) {
  this.eGui = document.createElement("span");
  this.eGui.style = `padding-left:${params.data.level}px`;
  if (params.data.childrens.length > 0) {
    if (params.data.expanded) {
      this.eGui.innerHTML = `<i class="fas fa-minus"></i> ` + params.value;
    } else {
      this.eGui.innerHTML = `<i class="fas fa-plus"></i> ` + params.value;
    }
  } else {
    this.eGui.innerHTML = params.value;
  }

  this.eventListener = function() {
    updateData(params.data.customId);
  };
  this.eGui.addEventListener("click", this.eventListener);
};

MedalCellRenderer.prototype.getGui = function() {
  return this.eGui;
};

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", function() {
  var gridDiv = document.querySelector("#myGrid");
  new agGrid.Grid(gridDiv, gridOptions);
  gridOptions.api.sizeColumnsToFit();
});

function updateData(customId) {
  let foundData = recursiveFindById(rowData, customId);
  if (foundData) {
    foundData.expanded = !foundData.expanded;
    rowDataExpanded = [];
    makeDataResurcive(rowData, 0);
    gridOptions.api.setRowData(rowDataExpanded);
    // gridOptions.api.sizeColumnsToFit();
  }
}

function recursiveFindById(arrayData, customId) {
  let foundData = arrayData.find(e => e.customId === customId);

  if (foundData) {
    return foundData;
  }
  arrayData.every(e => {
    foundData = recursiveFindById(e.childrens, customId);
    if (foundData) {
      return false;
    }
    return true;
  });

  return foundData;
}

function makeDataResurcive(arrayData, level) {
  arrayData.forEach(mainRow => {
    mainRow.level = level;
    if (
      mainRow.childrens.length > 0 &&
      mainRow.expanded &&
      showBlankForExpanded
    ) {
      mainRow = { ...mainRow, ...blankForExpandedObject };
    }
    rowDataExpanded.push(mainRow);
    if (mainRow.expanded) {
      makeDataResurcive(mainRow.childrens, level + 10);
    }
  });
}

function addIdInDataResurcive(arrayData) {
  arrayData.forEach(mainRow => {
    mainRow.customId = idCount;
    idCount++;
    addIdInDataResurcive(mainRow.childrens);
  });
}

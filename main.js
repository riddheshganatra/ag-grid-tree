var columnDefs = [
  { headerName: "Make", field: "make", cellRenderer: "medalCellRenderer" },
  { headerName: "Model", field: "model" },
  { headerName: "Price", field: "price" },
  { headerName: "level", field: "level" },
  { headerName: "expanded", field: "expanded" }
];

var rowData = [
  {
    customId: "1",
    make: "Toyota",
    model: "Celica",
    price: 35000,
    expanded: false,
    childrens: [
      {
        customId: "2",
        make: "a",
        model: "b",
        price: 3,
        childrens: [
          {
            customId: "121",
            make: "asasasdasdasd",
            model: "asdasdasdasdb",
            price: 311111,
            childrens: [],
            expanded: false
          }
        ],
        expanded: false
      },
      {
        customId: "3",
        make: "b",
        model: "b",
        price: 4,
        childrens: [],
        expanded: false
      },
      {
        customId: "4",
        make: "g",
        model: "t",
        price: 7,
        childrens: [],
        expanded: false
      }
    ]
  },
  {
    customId: "5",
    make: "Ford",
    model: "Mondeo",
    price: 32000,
    expanded: false,
    childrens: [
      {
        customId: "6",
        make: "a",
        model: "b",
        price: 3,
        childrens: [],
        expanded: false
      },
      {
        customId: "7",
        make: "b",
        model: "b",
        price: 4,
        childrens: [],
        expanded: false
      },
      {
        customId: "8",
        make: "g",
        model: "t",
        price: 7,
        childrens: [],
        expanded: false
      }
    ]
  },
  {
    customId: "9",
    make: "Porsche",
    model: "Boxter",
    price: 72000,
    expanded: false,
    childrens: [
      {
        customId: "10",
        make: "qwqweqwew",
        model: "wqweqwewb",
        price: 321,
        childrens: [],
        expanded: false
      },
      {
        customId: "11",
        make: "bqwwww",
        model: "wqweqweb",
        price: 142,
        childrens: [],
        expanded: false
      },
      {
        customId: "12",
        make: "gwwww",
        model: "tqweqwee",
        price: 17323,
        childrens: [],
        expanded: false
      }
    ]
  }
];

// let the grid know which columns and what data to use
var gridOptions = {
  columnDefs: columnDefs,
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
    console.log(`clicked`);

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
});

function updateData(customId) {
  console.log(customId);
  let foundData = recursiveFindById(rowData, customId);
  if (foundData) {
    foundData.expanded = !foundData.expanded;
    // rowDataExpanded = JSON.parse(JSON.stringify(rowData));
    rowDataExpanded = [];
    makeDataResurcive(rowData, 0);
    gridOptions.api.setRowData(rowDataExpanded);
  }
  // let clickedRowIndex = rowData.findIndex(r => r.make == value);

  // rowData[clickedRowIndex].expanded = !rowData[clickedRowIndex].expanded;

  // makeData();
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
    rowDataExpanded.push(mainRow);
    if (mainRow.expanded) {
      // rowDataExpanded = [...rowDataExpanded, ...childRowData[mainRow.make]];
      makeDataResurcive(mainRow.childrens, level + 10);
    }
  });
}

// setTimeout(() => {
//   gridOptions.api.setRowData([
//     { make: "riddhesh", model: "ganatra", price: 30 }
//   ]);
// }, 5000);

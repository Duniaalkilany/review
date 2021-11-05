let flowers = [];


function getFromLocalStorage() {
  return JSON.parse( localStorage.getItem( 'flowers' ) );
}

function saveToLocalStorage() {
  localStorage.setItem( 'flowers', JSON.stringify( flowers ) );
}


function Flower( name, category, session ) {
  this.name = name;
  this.category = category;
  this.session = session;
  flowers.push( this );
}

Flower.prototype.renderFlowerRow = function ( id ) {
  let tableEl = document.getElementsByTagName( 'table' )[0];
  if( !tableEl ){
    renderTableHeader();
    tableEl = document.getElementsByTagName( 'table' )[0];
  }
  const trEl = document.createElement( 'tr' );
  tableEl.appendChild( trEl );
  const tdEl = document.createElement( 'td' );
  tdEl.innerHTML = `<a onclick="del(${id})">X</a>`;
  trEl.appendChild( tdEl );
  const tdEl2 = document.createElement( 'td' );
  tdEl2.textContent = this.name;
  trEl.appendChild( tdEl2 );
  const tdEl3 = document.createElement( 'td' );
  tdEl3.innerHTML = `<img src="./assets/img/${this.category.toLowerCase()}.jpeg" alt="${this.category}">`;
  trEl.appendChild( tdEl3 );
  const tdEl4 = document.createElement( 'td' );
  tdEl4.textContent = this.session;
  trEl.appendChild( tdEl4 );
};


function renderAllTable() {
  clearTable();
  renderTableHeader();
  renderAllFlower();
}

function clearTable() {
  const tableSectionEl = document.getElementById( 'tableContainer' );
  tableSectionEl.innerHTML = '';
}

function renderTableHeader() {
  const tableSectionEl = document.getElementById( 'tableContainer' );
  const tableEl = document.createElement( 'table' );
  tableSectionEl.appendChild( tableEl );
  const trEl = document.createElement( 'tr' );
  tableEl.appendChild( trEl );
  const thEl = document.createElement( 'th' );
  thEl.textContent = '#';
  trEl.appendChild( thEl );
  const thEl2 = document.createElement( 'th' );
  thEl2.textContent = 'Image';
  trEl.appendChild( thEl2 );
  const thEl3 = document.createElement( 'th' );
  thEl3.textContent = 'Name';
  trEl.appendChild( thEl3 );
  const thEl4 = document.createElement( 'th' );
  thEl4.textContent = 'Seasion';
  trEl.appendChild( thEl4 );
}

function renderAllFlower() {
  for( let i in flowers ){
    flowers[i].renderFlowerRow();
  }
}

function del( id ) {
  flowers.splice( id, 1 );
  saveToLocalStorage();
  if( flowers.length > 0 ){
    renderAllTable();
  } else {
    clearTable();
  }
}

function createObjects() {
  let flowersList = getFromLocalStorage() || [];
  if( flowersList.length > 0 ){
    for( let i in flowersList ){
      new Flower( flowersList[i].name, flowersList[i].category, flowersList[i].session );
    }
  }
}

function init() {
  createObjects();
  if( flowers.length > 0 ){
    renderAllTable();
  }
}

function handleSubmit( e ) {
  e.preventDefault();
  let name = e.target.name.value;
  let category = e.target.category.value;
  let seasion = e.target.category.value;
  let newFlower = new Flower( name, category, seasion );
  newFlower.renderFlowerRow( flowers.length - 1 );
  saveToLocalStorage();
  e.target.reset();
}

function handleClear() {
  localStorage.removeItem( 'flowers' );
  clearTable();
}

const formEl = document.getElementById( 'form' );
formEl.addEventListener( 'submit', handleSubmit );

const clearBtn = document.getElementById( 'clear' );
clearBtn.addEventListener( 'click', handleClear );

init();

const tableData = [
  { name: "Ram kumar", email: "kumaran4@example.com" },
  { name: "Raja", email: "raja08@example.com" },
  { name: "Ajay", email: "ajaykumu@example.com" },
  // more data here
];

const tableView = document.getElementById("table-view");
const tableBody = document.getElementById("table-data");
const pagination = document.getElementById("pagination");


function renderTable() {
  tableBody.innerHTML = "";
  tableData.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${user.name}</td><td>${user.email}</td>`;
    tableBody.appendChild(row);
  });
}


function sortTable(col) {
  tableData.sort((a, b) => {
    if (a[col] < b[col]) return -1;
    if (a[col] > b[col]) return 1;
    return 0;
  });
  renderTable();
}

function renderPagination() {
  const totalPages = Math.ceil(tableData.length / 10);
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement("a");
    link.href = `#page=${i}`;
    link.textContent = i;
    pagination.appendChild(link);
  }
}

renderTable();
renderPagination();


const sliderInner = document.querySelector(".slider-inner");
const slides = sliderInner.children;
let currentSlide = 0;

function slideLeft() {
  currentSlide--;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  sliderInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}


function slideRight() {
  currentSlide++;
  if (currentSlide >= slides.length) currentSlide = 0;
  sliderInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

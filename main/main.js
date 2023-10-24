const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      home = body.querySelector(".active"),
      clas = body.querySelector(".clas"),
      interfaces = document.querySelectorAll('.HOME'),
      msv = body.querySelector("#MSV-user_import");


      toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
      });

      searchBtn.addEventListener("click", ()=>{
        sidebar.classList.remove("close");
      });

      modeSwitch.addEventListener("click", ()=>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
          modeText.innerText = "Light Mode";
        } else{
          modeText.innerText = "Dark Mode";
        }
      });

let list = document.querySelectorAll('.nav-link');
for (let i = 0; i< list.length; i++){
  list[i].onclick = function(){
    let j = 0;
    while(j < list.length){
      list[j++].className = 'nav-link';
    }
    list[i].className = 'nav-link active';
  }
};

list.forEach((list, index) => {
  list.addEventListener('click', function() {
    interfaces.forEach((interfaceElement, i) => {
      interfaceElement.classList.toggle('actived', i === index);
    });
  });
});

const showLoginFormButton = document.querySelector('#addnew-sutdent'),
loginForm = document.querySelector('#user'),
loginButton = document.querySelector('#addnew-user'),
loginExit = document.getElementById('addnew-exit1')
    showLoginFormButton.addEventListener('click', function() {
      loginForm.style.display = 'block';
    });
    loginButton.addEventListener('click', function() {
      loginForm.style.display = 'none';
    });
    loginExit.addEventListener('click', function() {
      loginForm.style.display = 'none';
    });


    function addRow() {
      const table = document.getElementById('board');
      const tbody = table.querySelector('tbody');
      const errorMessage = document.getElementById('error-message');
      
      const newRow = document.createElement('tr');

      // Create cells for the new row
      const sttCell = document.createElement('td');
      const nameCell = document.createElement('td');
      const ageCell = document.createElement('td');
      const cityCell = document.createElement('td');
      const cityCell2 = document.createElement('td');
      const cityCell3 = document.createElement('td');
      const cityCell32 = document.createElement('td');
      const cityCell4 = document.createElement('td');

      const nameInput = document.getElementById('MSV').value;
      const ageInput = document.getElementById('fullname').value;
      const cityInput = document.getElementById('class').value;
      const cityInput2 = document.getElementById('birth').value;
      const cityInput3 = document.getElementById('hometowm').value;
      const selectedGender =document.querySelector('input[name="gender"]:checked');

      if (nameInput=='' && ageInput=='' && cityInput=='' && cityInput2=='' && !selectedGender && cityInput3=='') {
        errorMessage.innerHTML = 'Vui lòng điền thông tin.';
        return;
      }
      if(nameInput==''){
        errorMessage.innerHTML = 'Vui lòng điền Mã sinh viên của sinh viên.';
        return;
      } else if(isNaN(nameInput)){
        errorMessage.innerHTML = 'Mã sinh viên của sinh viên không bao gồm chữ cái.';
        return;
      }
      if(ageInput==''){
        errorMessage.innerHTML = 'Vui lòng điền Họ và tên của sinh viên.';
        return;
      }else if (ageInput==""){
        errorMessage.innerHTML="Vui lòng nhập Họ và tên của sinh viên. ";
        return;
      }else if (ageInput.trim().length <=2 ){
        errorMessage.innerHTML="Họ và tên không ít hơn 2 ký tự";
        return;
      }else if (ageInput.trim().length >=50 ){
          // ageInput='';
          errorMessage.innerHTML="Họ và tên không lớn hơn 50 ký tự";
          return;
      }else if (/\d+/.test(ageInput)){
          // ageInput='';
          errorMessage.innerHTML="Họ và tên không gồm số";
          return;
      } 
      if(cityInput==''){
        errorMessage.innerHTML = 'Vui lòng điền Lớp của sinh viên.';
        return;
      }
      if(!selectedGender){
        errorMessage.innerHTML = 'Vui lòng chọn Giới tính của sinh viên.';
        return;
      }
      if(cityInput2==''){
        errorMessage.innerHTML = 'Vui lòng điền Ngày sinh của sinh viên.';
        return;
      }
     
      if(cityInput3==''){
        errorMessage.innerHTML = 'Vui lòng điền Quê quán của sinh viên.';
        return;
      }

      const existingNames = Array.from(tbody.querySelectorAll('td:nth-child(2)')).map(cell => cell.textContent);
      if (existingNames.includes(nameInput)) {
        errorMessage.textContent = 'Mã sinh viên đã tồn tại trong bảng.';
        return;
      }

      errorMessage.textContent = '';

      sttCell.textContent =  tbody.children.length + 1;
      nameCell.textContent = nameInput;
      ageCell.textContent = ageInput;
      cityCell.textContent = cityInput;
      cityCell2.textContent = selectedGender.value;
      cityCell3.textContent = cityInput2;
      cityCell32.textContent = cityInput3;

      const editIcon = document.createElement('span');
      editIcon.innerHTML = '<i class="duongke fa-solid fa-pen icon" title="Chỉnh sửa"></i>'; // ✎ Unicode character for edit icon
     
      editIcon.onclick = function() {
       
        openEditModal(newRow);
      };

      const deleteIcon = document.createElement('span');
      deleteIcon.innerHTML = '<i class="fa-regular fa-circle-xmark" title="Xóa" id=" close"></i>'; // ✖ Unicode character for delete icon
      deleteIcon.classList.add('delete-icon');
      deleteIcon.onclick = function() {
       
        newRow.remove();
      };

      cityCell4.appendChild(editIcon);
      cityCell4.appendChild(deleteIcon);

      newRow.appendChild(sttCell);
      newRow.appendChild(nameCell);
      newRow.appendChild(ageCell);
      newRow.appendChild(cityCell);
      newRow.appendChild(cityCell2);
      newRow.appendChild(cityCell3);
      newRow.appendChild(cityCell32);
      newRow.appendChild(cityCell4);

      tbody.appendChild(newRow);

      document.getElementById('MSV').value='';
      document.getElementById('fullname').value='';
      document.getElementById('class').value='';
      document.getElementById('birth').value='';
      document.querySelector('input[name="gender"]:checked').checked= false;
      document.getElementById('hometowm').value='';
      document.getElementById("dataform").reset();
    }

    document.getElementById('addnew-user').addEventListener('click', function(){
      addRow();
    });

const showexcelButton = document.querySelector('#addnew-excel'),
excelForm = document.querySelector('#excel'),
excelButton = document.querySelector('#loadexcel');

    showexcelButton.addEventListener('click', function(){
      excelForm.style.display = 'block';
    });
    excelButton.addEventListener('click', function() {
      excelForm.style.display = 'none';
    });

  document.getElementById("excelFileInput").addEventListener("change", handleExcelUpload);

  function handleExcelUpload(event) {
      var fileInput = event.target;
      var file = fileInput.files[0];

      if (file) {
          var reader = new FileReader();

          reader.onload = function (e) {
              var data = new Uint8Array(e.target.result);
              var workbook = XLSX.read(data, { type: 'array' });
              var sheet = workbook.Sheets[workbook.SheetNames[0]];
              var rowData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

              // Kiểm tra xem dữ liệu từ Excel có đúng định dạng hay không
              if (rowData.length > 1 && rowData[0].length > 0) {
                  // Lấy thẻ tbody của bảng
                  var tbody = document.getElementById("board").getElementsByTagName("tbody")[0];

                  // Thêm dữ liệu từ Excel vào tbody
                  for (var i = 1; i < rowData.length; i++) {
                      var row = document.createElement("tr");

                      // Thêm cột STT
                      row.innerHTML = "<td>" + i + "</td>";

                      // Thêm các cột từ dữ liệu Excel
                      for (var j = 0; j < rowData[i].length; j++) {
                          row.innerHTML += "<td>" + rowData[i][j] + "</td>";
                      }
        
                      // Thêm cột cuối cùng với nội dung 2 icon không đổi
                      row.innerHTML += '<td><span><i class="duongke fa-solid fa-pen icon" title="Chỉnh sửa"></i></span><span><i class="fa-regular fa-circle-xmark delete-icon" title="Xóa" id=" close-excel"></i></span></td>';

                      // Thêm hàng vào tbody
                      tbody.appendChild(row);
                  }
              } else {
                  alert("Invalid Excel format. Please make sure the file contains data.");
              }
          };

          reader.readAsArrayBuffer(file);
      }
  }

  function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("board");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function searchTableClass() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInputClass");
  filter = input.value.toUpperCase();
  table = document.getElementById("board");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
  }
}

    function openEditModal(row) {
      const editModal = document.getElementById('editModal');
      const editNameInput = document.getElementById('editName');
      const editAgeInput = document.getElementById('editAge');
      const editAgeInput2 = document.getElementById('editClass');
      const editAgeInput3 = document.getElementById('editDate');
      const editAgeInput4 = document.getElementById('editHometowm');
      const editGenderInputs = document.querySelectorAll('input[name="editGender"]');
      
      const stt = row.cells[0].textContent;
      const name = row.cells[1].textContent;
      const age = row.cells[2].textContent;
      const Classes = row.cells[3].textContent;
      const gender = row.cells[4].textContent;
      const Birthday = row.cells[5].textContent;
      const Hometown = row.cells[6].textContent;
    
      editNameInput.value = name;
      editAgeInput.value = age;
      editAgeInput2.value = Classes;
      editAgeInput3.value = Birthday;
      editAgeInput4.value = Hometown;
      editGenderInputs.forEach(input => {
        if (input.value === gender) {
          input.checked = true;
        } else {
          input.checked = false;
        }
      });

      editModal.style.display = 'flex';

      editModal.selectedRow = row;
    }
    function saveEdit() {
      const editModal = document.getElementById('editModal');
      const editNameInput = document.getElementById('editName');
      const editAgeInput = document.getElementById('editAge');
      const editAgeInput2 = document.getElementById('editClass');
      const editAgeInput3 = document.getElementById('editDate');
      const editAgeInput4 = document.getElementById('editHometowm');
      const editGenderInput = document.querySelector('input[name="editGender"]:checked');

      if (!editNameInput.value || !editAgeInput.value || !editGenderInput || !editAgeInput2.value || !editAgeInput3.value || !editAgeInput4.value) {
        document.getElementById('error-message').innerHTML = 'Vui lòng điền đầy đủ thông tin.';
        return;
      }

      const selectedRow = editModal.selectedRow;

      selectedRow.cells[1].textContent = editNameInput.value;
      selectedRow.cells[2].textContent = editAgeInput.value;
      selectedRow.cells[3].textContent = editAgeInput2.value;
      selectedRow.cells[4].textContent = editGenderInput.value;
      selectedRow.cells[5].textContent = editAgeInput3.value;
      selectedRow.cells[6].textContent = editAgeInput4.value;

      editModal.style.display = 'none';
    }

    function cancelEdit() {
      const editModal = document.getElementById('editModal');
      
      editModal.style.display = 'none';
    }


const showclassFormButton = document.querySelector('#addnew-class1'),
classForm = document.querySelector('#user-class'),
classButton = document.querySelector('#addnew-class'),
classExit = document.getElementById('addnew-exit2');
    showclassFormButton.addEventListener('click', function() {
      classForm.style.display = 'block';
    });
    classButton.addEventListener('click', function() {
      classForm.style.display = 'none';
    });
    classExit.addEventListener('click', function() {
      classForm.style.display = 'none';
    });


    function addRoww() {
      const table = document.getElementById('board2');
      const tbody = table.querySelector('tbody');
      const errorMessage = document.getElementById('error-message2');

      const newRoww = document.createElement('tr');

      const sttCell = document.createElement('td');
      const nameCell = document.createElement('td');
      const ageCell = document.createElement('td');
      const cityCell4 = document.createElement('td');

      const nameInput = document.getElementById('Mclass').value;
      const ageInput = document.getElementById('fullclass').value;
     
      

      if (nameInput=='' && ageInput=='' ) {
        errorMessage.innerHTML = 'Vui lòng điền thông tin.';
        return;
      }
      if(nameInput==''){
        errorMessage.innerHTML = 'Vui lòng điền Tên lớp.';
        return;
      } 
      if(ageInput==''){
        errorMessage.innerHTML = 'Vui lòng điền Tên khoa.';
        return;
      }

      const existingNames = Array.from(tbody.querySelectorAll('td:nth-child(2)')).map(cell => cell.textContent);
      if (existingNames.includes(nameInput)) {
        errorMessage.textContent = 'Tên lớp đã tồn tại trong bảng.';
        return;
      }

      errorMessage.textContent = '';

      sttCell.textContent =  tbody.children.length + 1;
      nameCell.textContent = nameInput;
      ageCell.textContent = ageInput;

      const editIcon = document.createElement('span');
      editIcon.innerHTML = '<i class="duongke fa-solid fa-pen icon" title="Chỉnh sửa"></i>'; // ✎ Unicode character for edit icon
  
      editIcon.onclick = function() {
        
        openEditModall(newRoww);
      };

      const deleteIcon = document.createElement('span');
      deleteIcon.innerHTML = '<i class="fa-regular fa-circle-xmark" title="Xóa" id=" close"></i>'; // ✖ Unicode character for delete icon
      deleteIcon.classList.add('delete-icon');
      deleteIcon.onclick = function() {
       
        newRoww.remove();
      };

      cityCell4.appendChild(editIcon);
      cityCell4.appendChild(deleteIcon);

     
      newRoww.appendChild(sttCell);
      newRoww.appendChild(nameCell);
      newRoww.appendChild(ageCell);
      newRoww.appendChild(cityCell4);

      tbody.appendChild(newRoww);

      document.getElementById('Mclass').value='';
      document.getElementById('fullclass').value='';

      document.getElementById("dataform2").reset();
    }

    function openEditModall(row) {
      const editModal = document.getElementById('editModal2');
      const editNameInput = document.getElementById('editName2');
      const editAgeInput = document.getElementById('editAge2');
      
      const stt = row.cells[0].textContent;
      const name = row.cells[1].textContent;
      const age = row.cells[2].textContent;

      editNameInput.value = name;
      editAgeInput.value = age;

      editModal.style.display = 'flex';

      editModal.selectedRow = row;
    }
    function saveEditt() {
      const editModal = document.getElementById('editModal2');
      const editNameInput = document.getElementById('editName2');
      const editAgeInput = document.getElementById('editAge2');

      if (!editNameInput.value || !editAgeInput.value ) {
        document.getElementById('error-message2').innerHTML = 'Vui lòng điền đầy đủ thông tin.';
        return;
      }

      const selectedRow = editModal.selectedRow;

      selectedRow.cells[1].textContent = editNameInput.value;
      selectedRow.cells[2].textContent = editAgeInput.value;

      editModal.style.display = 'none';
    }

    function cancelEditt() {
      const editModal = document.getElementById('editModal2');

      editModal.style.display = 'none';
    }

    document.getElementById('addnew-class').addEventListener('click', function(){
      addRoww();
    });

    const showexcelButton2 = document.querySelector('#addnew-excel2'),
          excelForm2 = document.querySelector('#excel2'),
          excelButton2 = document.querySelector('#loadexcel2');

    showexcelButton2.addEventListener('click', function(){
      excelForm2.style.display = 'block';
    });
    excelButton2.addEventListener('click', function() {
      excelForm2.style.display = 'none';
    });

  document.getElementById("excelFileInput2").addEventListener("change", handleExcelUploadd);

  function handleExcelUploadd(event) {
      var fileInput = event.target;
      var file = fileInput.files[0];

      if (file) {
          var reader = new FileReader();

          reader.onload = function (e) {
              var data = new Uint8Array(e.target.result);
              var workbook = XLSX.read(data, { type: 'array' });
              var sheet = workbook.Sheets[workbook.SheetNames[0]];
              var rowData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

              // Kiểm tra xem dữ liệu từ Excel có đúng định dạng hay không
              if (rowData.length > 1 && rowData[0].length > 0) {
                  // Lấy thẻ tbody của bảng
                  var tbody = document.getElementById("board2").getElementsByTagName("tbody")[0];

                  // Thêm dữ liệu từ Excel vào tbody
                  for (var i = 1; i < rowData.length; i++) {
                      var row = document.createElement("tr");

                      // Thêm cột STT
                      row.innerHTML = "<td>" + i + "</td>";

                      // Thêm các cột từ dữ liệu Excel
                      for (var j = 0; j < rowData[i].length; j++) {
                          row.innerHTML += "<td>" + rowData[i][j] + "</td>";
                      }

                      // Thêm cột cuối cùng với nội dung 2 icon không đổi
                      row.innerHTML += '<td><span><i class="duongke fa-solid fa-pen icon" title="Chỉnh sửa"></i></span><span><i class="fa-regular fa-circle-xmark delete-icon" title="Xóa" id=" close-excel"></i></span></td>';

                      // Thêm hàng vào tbody
                      tbody.appendChild(row);
                  }
              } else {
                  alert("Invalid Excel format. Please make sure the file contains data.");
              }
          };

          reader.readAsArrayBuffer(file);
      }
  }

    function searchTable2() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("searchInput2");
      filter = input.value.toUpperCase();
      table = document.getElementById("board2");
      tr = table.getElementsByTagName("tr");

      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
              } else {
                  tr[i].style.display = "none";
              }
          }
      }
  }

  function searchTable3() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput3");
    filter = input.value.toUpperCase();
    table = document.getElementById("board2");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function showSelectedTable() {
  var selectElement = document.getElementById("options");
  var selectedValue = selectElement.value;

  // Ẩn tất cả các bảng
  document.getElementById("board3").style.display = "none";
  document.getElementById("board4").style.display = "none";
  document.getElementById("board5").style.display = "none";

  // Hiển thị bảng tương ứng với lựa chọn
  switch (selectedValue) {
      case "option1":
          document.getElementById("board3").style.display = "table";
          break;
      case "option2":
          document.getElementById("board4").style.display = "table";
          break;
      case "option3":
          document.getElementById("board5").style.display = "table";
          break;
      default:
          // Trường hợp mặc định, không hiển thị bảng
  }
}

function searchTables() {
  var searchInput = document.getElementById("search");
  var searchText = searchInput.value.toLowerCase();

  // Lặp qua tất cả các bảng
  var tables = document.querySelectorAll("#tableContent table");
  tables.forEach(function(table) {
      // Lặp qua tất cả các dòng trong bảng
      var rows = table.querySelectorAll("tbody tr");
      rows.forEach(function(row) {
          // Lấy nội dung của ô tên
          var nameCell = row.querySelector("td:nth-child(2)");
          var name = nameCell.textContent.toLowerCase();

          // Ẩn/hiển thị dòng dựa trên việc tên có chứa từ khóa tìm kiếm
          if (name.includes(searchText)) {
              row.style.display = "table-row";
          } else {
              row.style.display = "none";
          }
      });
  });
}


const showLecturersFormButton = document.querySelector('#addnew-lecturers'),
LecturersForm = document.querySelector('#lecturers'),
LecturersExit = document.getElementById('addnew-exit3');


showLecturersFormButton.addEventListener('click', function() {
  LecturersForm.style.display = 'block';
    });
    LecturersExit.addEventListener('click', function() {
      LecturersForm.style.display = 'none';
    });

const showLecturersFormButtonn = document.querySelector('#addnew-lecturers2'),
LecturersFormm = document.querySelector('#lecturers'),
LecturersExitt = document.getElementById('addnew-exit3');
    
showLecturersFormButtonn.addEventListener('click', function() {
  LecturersFormm.style.display = 'block';
});
LecturersExitt.addEventListener('click', function() {
LecturersFormm.style.display = 'none';
});
const showLecturersFormButtonn2 = document.querySelector('#addnew-lecturers3'),
 LecturersFormm2 = document.querySelector('#lecturers'),
LecturersExitt2 = document.getElementById('addnew-exit3');
      
showLecturersFormButtonn2.addEventListener('click', function() {
    LecturersFormm2.style.display = 'block';
  });
LecturersExitt2.addEventListener('click', function() {
    LecturersFormm2.style.display = 'none';
});
const showLecturersFormButtonn3 = document.querySelector('#addnew-lecturers4'),
    LecturersFormm3 = document.querySelector('#lecturers'),
    LecturersExitt3 = document.getElementById('addnew-exit3');
    
    
    showLecturersFormButtonn3.addEventListener('click', function() {
      LecturersFormm3.style.display = 'block';
        });
        LecturersExitt3.addEventListener('click', function() {
          LecturersFormm3.style.display = 'none';
        });

    function lecturers(){
      var namelecturers = document.getElementById('namelecturers').value,
            phonelecturers = document.getElementById('phone-lecturers').value,
            TDlecturers = document.getElementById('TD-lecturers').value,
            Ptrlecturers = document.getElementById('Ptr-lecturers').value,
            error1 = document.getElementById('error-lecturers1'),
            error2 = document.getElementById('error-lecturers2'),
            error3 = document.getElementById('error-lecturers3'),
            error4 = document.getElementById('error-lecturers4');

            if (namelecturers==""){
              namelecturers='';
              error1.innerHTML="Vui lòng nhập Họ tên Giảng viên";
            }else if(namelecturers.trim().length <=2 ){
              namelecturers='';
              error1.innerHTML="Họ tên không ít hơn 2 ký tự";
            }else if (namelecturers.trim().length >=50 ){
            namelecturers='';
              error1.innerHTML="Họ tên không lớn hơn 50 ký tự";
            } else if (/\d+/.test(namelecturers)){
            namelecturers='';
              error1.innerHTML="Họ tên không gồm số";
            }else{ 
            error1.innerHTML='';
            }
            if (phonelecturers==""){
              phonelecturers='';
              error2.innerHTML="Vui lòng nhập số điện thoại của Giảng viên";
            } else
            if (isNaN(phonelecturers)){
              phonelecturers='';
                error2.innerHTML="Số điện thoại không gồm chữ";
            } else
            if (phonelecturers.trim().length <10 ){
              phonelecturers='';
                error2.innerHTML="Số điện thoại không ít hơn 10 ký tự";
            } else
            if (phonelecturers.trim().length >10 ){
              phonelecturers='';
                error2.innerHTML="Số điện thoại không lớn hơn 10 ký tự";
            } else{
                error2.innerHTML='';
            }
            if(TDlecturers==""){
              TDlecturers='';
              error3.innerHTML="Vui lòng nhập trình độ của Giảng viên";
            }else{
              error3.innerHTML = '';
            }
            if(Ptrlecturers==""){
              Ptrlecturers='';
              error4.innerHTML="Vui lòng nhập Lớp mà Giảng viên phụ trách";
            }else{
            error4.innerHTML = '';
            }

            if(namelecturers && phonelecturers && TDlecturers && Ptrlecturers ) {
            document.getElementById('lecturers').style.display = "none";
            }
}


var xValues = ["Đi học đủ", "1 buổi", "2 buổi", "3 buổi", "Trên 4 buổi"];
var yValues = [25, 26, 18, 10, 21];
var barColors = [
  "#85D45E",
  "#FFA5DA",
  "#0096FF",
  "#FDB600",
  "#9787FF"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Biểu đồ thống kê số buổi sinh viên nghỉ học"
    }
  }
});

var xValues = ["Dưới 5 điểm", "Từ 5-7 điểm", "Từ 7-8 điểm", "Trên 8 điểm"];
var yValues = [26, 46, 18, 10];
var barColors = [
  "#FFA5DA",
  "#9787FF",
  "#0096FF",
  "#FDB600"
];

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Biểu đồ thống kê điểm học tập"
    }
  }
});

var xValues = ["SV trong nước", "SV nam", "Sinh viên nữ", "SV nước ngoài", ""];
var yValues = [499, 300, 199, 100, 0];
var barColors = ["#9787FF", "#FFA5DA","#0096FF","#FDB600", ""];

new Chart("myChart3", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Biểu đồ thống kê sinh viên"
    }
  }
});

var xValues = ["Thạc sỹ", "Tiến sỹ", "Giáo sư", "Cử nhân", ""];
var yValues = [36, 12, 7, 5, 0];
var barColors = ["#9787FF", "#FFA5DA","#0096FF","#FDB600", ""];

new Chart("myChart4", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Biểu đồ thống kê giảng viên"
    }
  }
});


document.getElementById('logout').addEventListener('click', function() {
  window.location.href = 'http://127.0.0.1:5501/baitaplon/trang%20chu/trangchu.html';
});

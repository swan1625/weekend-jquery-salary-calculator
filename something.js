$( document ).ready ( readyNow );
function readyNow() {

    $( '#submitButton' ).on( 'click', addEmployee );

}

let employeeList = [];

function addEmployee() {

    const NewEmpObject = {
      FirstName: $('#FirstName').val(),
      lastName: $('#lastName').val(),
      Identity: $('#Identity').val(),
      Title:   $('#Title').val(),
      Salary: $('#Salary').val()
    }
    employeeList.push(NewEmpObject);


    $('#FirstName').val('');    //clearing input boxes
    $('#lastName').val('');
    $('#Identity').val('');
    $('#Title').val('');
    $('#Salary').val('');
    
 
    $("#myTable").append(`<tr><td>${NewEmpObject.FirstName}
    </td><td> ${NewEmpObject.lastName}
    </td><td> ${NewEmpObject.Identity} 
    </td><td> ${NewEmpObject.Title}
    </td><td> ${NewEmpObject.Salary} </td></tr> `)

    return true;
  }


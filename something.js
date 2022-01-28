$( document ).ready ( readyNow );
function readyNow() {

    $( '#submitButton' ).on( 'click', addEmployee );
    
}

let employeeList = [];


function newEmployee(FirstName, lastName, Identity, Title, Salary){
    console.log('in newEmp:', FirstName, lastName, Identity, Title, Salary);
    const NewEmpObject = {
      FirstName: FirstName,
      lastName: lastName,
      Identity: Identity,
      Title:   Title, 
      Salary: Salary
    }
    employeeList.push(NewEmpObject);
    $('#FirstName').val('');
    $('#lastName').val('');
    $('#Identity').val('');
    $('#Title').val('');
    $('#Salary').val('');
    return true;
  } // end newCar
  
  
  
  function displayEmployee( ){
    console.log('in displayEmployee');
      let el = $(' #employeesOut ');
      el.empty();
      for ( employee of employeeList ){
        el.append( employee.FirstName + ' ' + employee.lastName + ' ' + employee.Identity + ' ' + employee.Title + ' ' + employee.Salary );
    }
  }

function addEmployee() {

    let Fname = $('#FirstName').val();
    let Lname = $('#lastName').val();
    let ID = $('#Identity').val();
    let Title = $('#Title').val();
    let Salary =  $('#Salary').val();
    newEmployee (Fname, Lname, ID, Title, Salary);
    console.log(employeeList.length);
    console.log(employeeList);
    displayEmployee();
    
}
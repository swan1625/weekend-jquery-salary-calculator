$( document ).ready ( readyNow );



let employeeList = [];   //store employees object

let total = 0; // store Monthly Total 






function readyNow() {

    $( '#submitButton' ).on( 'click', addEmployee );
    $( '#myTable' ).on('click', '#deleteButton',  excludeRow);
}

function excludeRow(){

    console.log('this is', $(this));
    $(this).remove();

  }

function addEmployee() {

    const NewEmpObject = {                       // creating a 
      FirstName: $('#FirstName').val(),
      lastName: $('#lastName').val(),
      Identity: $('#Identity').val(),
      Title:   $('#Title').val(),
      Salary: Number($('#Salary').val())
    }

    employeeList.push(NewEmpObject);   //pushing new employee to array 


    
 
    $("#myTable").append(`<tr><td>${NewEmpObject.FirstName}
    </td><td> ${NewEmpObject.lastName}
    </td><td> ${NewEmpObject.Identity} 
    </td><td> ${NewEmpObject.Title}
    </td><td> ${NewEmpObject.Salary} 
    </td><td>  <button id="deleteButton"> Delete </button>
    </td></tr> `)

    $('#FirstName').val('');    //clearing input boxes
    $('#lastName').val('');
    $('#Identity').val('');
    $('#Title').val('');
    $('#Salary').val('');

    total += NewEmpObject.Salary;  // 
    calc(total);   /// do i need this? 
    console.log(employeeList);
    return true;   /// do i need thus? 
  }

  function calc(total) {
      let monthlycost = ( total / 12 );
      $('#span').empty(); 
        $('#span').append(monthlycost.toFixed(2)); 

      if (monthlycost > 20000) {
        $("#tableFoot span").css({
          'background-color': '#CD5C5C',
        })
      }
  }

  
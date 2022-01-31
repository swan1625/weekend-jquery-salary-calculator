$( document ).ready ( readyNow );



let employeeList = [];   //store employees object

let total = 0; // store Monthly Total 






function readyNow() {

    $( '#submitButton' ).on( 'click', addEmployee );                      // listener for submit button
    $( '#myTable' ).on('click', '#deleteButton',  excludeRow);           // listener for delete button


  } 



function excludeRow(){                   //delete button function, targets parents of the row of the delete button clicked
    console.log('this is', $(this));
    $(this).parents("tr").remove();

  }

function addEmployee() {

    const NewEmpObject = {                       // creating a new employee information in an object
      FirstName: $('#FirstName').val(),
      lastName: $('#lastName').val(),
      Identity: $('#Identity').val(),
      Title:   $('#Title').val(),
      Salary: Number($('#Salary').val())
    }

    employeeList.push(NewEmpObject);   //pushing new employee to array 


    //apending new employee to table
    $("#myTable").append(`<tr class="contents"><td>${NewEmpObject.FirstName}             
    </td><td> ${NewEmpObject.lastName}
    </td><td> ${NewEmpObject.Identity} 
    </td><td> ${NewEmpObject.Title}
    </td><td> $ ${NewEmpObject.Salary} 
    </td><td>  <button id="deleteButton"> Delete Row </button>
    </td></tr> `)

    $('#FirstName').val('');    //clearing input boxes
    $('#lastName').val('');
    $('#Identity').val('');
    $('#Title').val('');
    $('#Salary').val('');

    total += NewEmpObject.Salary;        // targeting just the salary information into 
    calc(total); 
    console.log(employeeList);
  }

  function calc(total) {                                // calculating  monthly total and adding to DOM
      let monthlycost = ( total / 12 );
      $('#span').empty(); 
      $('#span').append(monthlycost.toFixed(2));    

      if (monthlycost > 20000) {                     // monthly cost to turn red above 20k 
        $("#tableFoot span").css({
          'background-color': '#CD5C5C',
        })
      }
  }                                             // end calc function

  
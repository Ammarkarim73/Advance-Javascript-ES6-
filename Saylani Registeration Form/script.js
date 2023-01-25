function green(i) {
    document.getElementById(i).style.border = "1px solid blue";
    document.getElementById(i).style.outline = "none";
} 

function blue(j) {
    document.getElementById(j).style.border = "1px solid #8dc63f";
    document.getElementById(j).style.outline = "none";
} 

function darkBlue(k) {
    document.getElementById(k).style.border = "1px solid darkblue";
    document.getElementById(k).style.outline = "none";

} 

function btngreen(x) {
    if (x == "n"){
        document.getElementById(x).style.color = "#8dc63f";
        document.getElementById(x).style.backgroundColor= "white";
        document.getElementById("d").style.color = "blue";
        document.getElementById("d").style.backgroundColor = "#F0F0F0";
        document.getElementById("r").style.color = "blue";
        document.getElementById("r").style.backgroundColor = "#F0F0F0";
    }
    if (x == "d"){
        document.getElementById(x).style.color = "#8dc63f";
        document.getElementById(x).style.backgroundColor= "white";
        document.getElementById("n").style.color = "blue";
        document.getElementById("n").style.backgroundColor = "#F0F0F0";
        document.getElementById("r").style.color = "blue";
        document.getElementById("r").style.backgroundColor = "#F0F0F0";
    }
    if (x == "r"){
        document.getElementById(x).style.color = "#8dc63f";
        document.getElementById(x).style.backgroundColor= "white";
        document.getElementById("n").style.color = "blue";
        document.getElementById("n").style.backgroundColor = "#F0F0F0";
        document.getElementById("d").style.color = "blue";
        document.getElementById("d").style.backgroundColor = "#F0F0F0";
    }

}

function newApplication() {
    document.getElementById('form').className = 'flexcol';
    document.getElementById('forma').className = 'hidden';
    document.getElementById('formb').className = 'hidden';

    document.getElementById('card').className = 'hidden';
    document.getElementById('outerCard').className = 'hidden';
}
function downloadCard() {
    document.getElementById('form').className = 'hidden';
    document.getElementById('forma').className = 'flexcol';
    document.getElementById('formb').className = 'hidden';

    document.getElementById('card').className = 'hidden';
    document.getElementById('outerCard').className = 'hidden';
}
function results() {
    document.getElementById('form').className = 'hidden';
    document.getElementById('forma').className = 'hidden';
    document.getElementById('formb').className = 'flexcol';

    document.getElementById('card').className = 'hidden';
    document.getElementById('outerCard').className = 'hidden';
}

//  image

var image = document.querySelector("#file");
var reader;
var uploadedImage;





image.addEventListener("change", function() {
reader = new FileReader();
reader.addEventListener("load", () => {
uploadedImage = reader.result;
document.querySelector("#showPic").style.backgroundImage = `url(${uploadedImage})`;
});
reader.readAsDataURL(this.files[0]);
document.getElementById('showPic').className= 'picture';
});

// image


function setData(){
    var course = document.getElementById('course').value;
    var name = document.getElementById('name').value;
    var Fname = document.getElementById('Fname').value;



    var city = document.getElementById('city').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('number').value;
    var CNIC = document.getElementById('cnic').value;
    var FCNIC = document.getElementById('Fcnic').value;
    var DateOfBirth = document.getElementById('date').value;
    var gender = document.getElementById('gender').value;
    var address = document.getElementById('address').value;
    var qualification = document.getElementById('qualification').value;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




    // cnic + email + phone No validiation
    if (CNIC.length == 13){
        if (email.match(validRegex)) {

        if (phoneNumber.length == 11) {

            localStorage.setItem('idPic', uploadedImage);

        localStorage.setItem('CNIC', CNIC);
        localStorage.setItem('FCNIC', FCNIC);

        localStorage.setItem('course', course);
        localStorage.setItem('name', name);
        localStorage.setItem('Fname', Fname);
        localStorage.setItem('city', city);
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('DateOfBirth', DateOfBirth);
        localStorage.setItem('gender', gender);
        localStorage.setItem('address', address);
        localStorage.setItem('qualification', qualification);
                localStorage.setItem('email', email);

                var Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                
                Toast.fire({
                    icon: 'success',
                    title: 'Submited successfully'
                })
        }else {
            Swal.fire({
                icon: 'error',
                title: 'ERROR !!!',
                text: 'Please Enter Correct Phone Number !'
            })
        }}
        else {
            Swal.fire({
                icon: 'error',
                title: 'ERROR !!!',
                text: 'Please Enter Correct Email !'
            })
        }
    }else {
        Swal.fire({
            icon: 'error',
            title: 'ERROR !!!',
            text: 'Please Enter Correct CNIC Number !'
          })
    }
 

        // cnic + email validiation


}


function downloadIdCard() {
    var idNumber = 'KH01214567434';


    var course = localStorage.getItem('course');
    var name = localStorage.getItem('name');
    var Fname = localStorage.getItem('Fname');



    var city = localStorage.getItem('city');
    var email = localStorage.getItem('email');
    var phoneNumber = localStorage.getItem('phoneNumber');
    var CNIC = localStorage.getItem('CNIC');
    var FCNIC = localStorage.getItem('FCNIC');
    var DateOfBirth = localStorage.getItem('DateOfBirth');
    var gender = localStorage.getItem('gender');
    var address = localStorage.getItem('address');
    var qualification = localStorage.getItem('qualification');

    var checkNIC = document.getElementById('checkNIC').value;

if (CNIC == checkNIC) {
    document.getElementById('form').className = 'hidden';
    document.getElementById('forma').className = 'hidden';
    document.getElementById('formb').className = 'hidden';


    document.getElementById('card').className = 'cardFlex';
    document.getElementById('outerCard').className = 'flexcol';

    document.querySelector("#pic").style.backgroundImage = `url(${localStorage.getItem('idPic')})`;
    
    document.getElementById('cardName').innerHTML = name;
    document.getElementById('cardNameBack').innerHTML = 'Name: ' + name;
    document.getElementById('cardFname').innerHTML = 'Father Name: ' + Fname;
    document.getElementById('idNumber').innerHTML = idNumber;
    document.getElementById('idnum').innerHTML = 'ID: ' + idNumber;
    document.getElementById('courseName').innerHTML = course;
    document.getElementById('courseNameBack').innerHTML = 'Course: ' + course;

}else {
    Swal.fire({
        icon: 'error',
        title: 'ERROR !!!',
        text: 'Please Enter Correct CNIC Number !'
      })
}
}


function result() {
    Swal.fire({
        icon: 'error',
        title: 'ERROR !!!',
        text: 'Record not Found !'
      })
}



function downloadPdf(){
    var element = document.getElementById('card');
    document.getElementById('head').className = 'hidden';
    document.getElementById('buttons').className = 'hidden';


    html2pdf().from(element).save();
}



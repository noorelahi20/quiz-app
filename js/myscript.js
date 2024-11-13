
var Stdname, Stdpass, rollV, nameV, genderV, addressV;
// function readFom() {
//   rollV = document.getElementById("roll").value;
//   nameV = document.getElementById("name").value;
//   genderV = document.getElementById("gender").value;
//   addressV = document.getElementById("address").value;
//   console.log(rollV, nameV, addressV, genderV);
// }

// document.getElementById("insert").onclick = function () {
//   readFom();

//   firebase
//     .database()
//     .ref("student/" + rollV)
//     .set({
//       rollNo: rollV,
//       name: nameV,
//       gender: genderV,
//       address: addressV,
//     });
//   alert("Data Inserted");
//   document.getElementById("roll").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById("gender").value = "";
//   document.getElementById("address").value = "";
// };

// document.getElementById("read").onclick = function () {
//   readFom();

//   firebase
//     .database()
//     .ref("student/" + rollV)
//     .on("value", function (snap) {
//       document.getElementById("roll").value = snap.val().rollNo;
//       document.getElementById("name").value = snap.val().name;
//       document.getElementById("gender").value = snap.val().gender;
//       document.getElementById("address").value = snap.val().address;
//     });
// };

// document.getElementById("update").onclick = function () {
//   readFom();

//   firebase
//     .database()
//     .ref("student/" + rollV)
//     .update({
//       //   rollNo: rollV,
//       name: nameV,
//       gender: genderV,
//       address: addressV,
//     });
//   alert("Data Update");
//   document.getElementById("roll").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById("gender").value = "";
//   document.getElementById("address").value = "";
// };
// document.getElementById("delete").onclick = function () {
//   readFom();

//   firebase
//     .database()
//     .ref("student/" + rollV)
//     .remove();
//   alert("Data Deleted");
//   document.getElementById("roll").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById("gender").value = "";
//   document.getElementById("address").value = "";
// };



//SIGNUP

function readForm() {
  rollnum= document.getElementById("RollNumber").value;
  Stdname = document.getElementById("studentName").value;
  Stdpass = document.getElementById("studentPassword").value;
  console.log(Stdname,Stdpass);
}


document.getElementById("signup_btn").onclick = function () {
  readForm();


  firebase
    .database()
    .ref("student/signup")
    .set({
      roll: rollnum,
      name: Stdname,
      password: Stdpass,
    });
  alert("Data Inserted");
  document.getElementById("RollNumber").value="";
  document.getElementById("studentName").value = "";
  document.getElementById("studentPassword").value = "";
  


};
















// Login functionality
document.getElementById("login_btn").onclick = function (event) {
  event.preventDefault();  // Prevent the form from submitting the traditional way

  const loginRollNumber = document.getElementById("loginRollNumber").value;
  const loginPassword = document.getElementById("loginPassword").value;

  // Check if both fields are filled
  if (loginRollNumber && loginPassword) {
    // Fetch the data from Firebase (single student in this case)
    firebase
      .database()
      .ref("student/signup")  // Refer to the single signup node
      .once("value")  // Fetch the data once
      .then((snapshot) => {
        const studentData = snapshot.val();

        if (studentData) {
          // Check if the roll number and password match
          if (studentData.roll === loginRollNumber && studentData.password === loginPassword) {
            window.location.href = "quiz.html";  // Redirect to quiz if credentials match
          } else {
            alert("Invalid roll number or password.");
          }
        } else {
          alert("No student found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        alert("There was an error with the login. Please try again.");
      });
  } else {
    alert("Please fill in both fields.");
  }
};











  // firebase
  //   .database()
  //   .ref("student/" + rollV)
  //   .set({
  //     rollNo: rollV,
  //     name: nameV,
  //     gender: genderV,
  //     address: addressV,
  //   });
  // alert("Data Inserted");
  // document.getElementById("roll").value = "";
  // document.getElementById("name").value = "";
  // document.getElementById("gender").value = "";
  // document.getElementById("address").value = "";
// };
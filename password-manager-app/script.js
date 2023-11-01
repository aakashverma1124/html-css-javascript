// masks the orignal password.
const hidePassword = (password) => {
    let hiddenPassword = "";
    for(let i = 0; i < password.length; i++) {
        hiddenPassword += "*";
    }
    return hiddenPassword;
}

// this functions copies the text in the respective field to the clipboard
// Added a new parameter to get the id of the particular copy Button.
const copyContent = (content, id) => {
    navigator.clipboard.writeText(content).then( () => {
        
        let element = document.getElementById(id);
        let temp = element.innerHTML;
        element.innerHTML = "Copied!";
        element.style.backgroundColor = "rgb(109, 209, 109)";
        setTimeout(() => {
            element.innerHTML = temp;
            element.style.backgroundColor = "white";
        }, 2000);
    }).catch(err => {
        alert("Copying Failed");
    });
}

// deletes the data from the local storage.
const deletePasswordData = (index) => {
    let passwordDetails = localStorage.getItem("passwordDetails");
    let passwordData = JSON.parse(passwordDetails);
    passwordData.splice(index, 1);
    localStorage.setItem("passwordDetails", JSON.stringify(passwordData));
    alert("Password Deleted Successfully.");
    populateSavedPasswordDetails();
}

// populates the table rows
const populateSavedPasswordDetails = () => {
    let table = document.querySelector("table")
    let passwordDetails = localStorage.getItem("passwordDetails");
    if(passwordDetails == null) {
        table.innerHTML = "No Details Available";
    } else {
        
        table.innerHTML = `<tr>
            <th style="background-color:lightgray;">Website</th>
            <th style="background-color:lightgray;">Username</th>
            <th style="background-color:lightgray;">Password</th>
            <th style="background-color:lightgray;">Action</th>
        </tr>`
        
        let passwordData = JSON.parse(passwordDetails);
        let html = ""
        let color = "lightgray";
        for(let i = 0; i < passwordData.length; i++) {
            if(i % 2 == 0) {
                color = "white";
            } else {
                color = "whitesmoke";
            }
            row = passwordData[i];
            html += `
                <tr>
                    <td style="background-color: ${color};">${row.website} <button id="copy-btn${i}1" class="copy-btn" onClick="copyContent('${row.website}', 'copy-btn${i}1')"><i class="fa-regular fa-clipboard copy"></i></button></td>
                    <td style="background-color: ${color};">${row.username} <button id="copy-btn${i}2" class="copy-btn" onClick="copyContent('${row.username}', 'copy-btn${i}2')"><i class="fa-regular fa-clipboard copy"></i></button></td>
                    <td style="background-color: ${color};">${hidePassword(row.password)} <button id="copy-btn${i}3" class="copy-btn" onClick="copyContent('${row.password}','copy-btn${i}3')" ><i class="fa-regular fa-clipboard copy"></i></button></td>
                    <td style="background-color: ${color};">
                        <button class="delete-btn" onClick="deletePasswordData('${i}')">Delete</button>
                        <button class="delete-btn" onClick="deletePasswordData('${i}')">Edit</button>
                        <button class="delete-btn" onClick="deletePasswordData('${i}')">Save</button>
                    </td>
                </tr>
            `;
        }
        table.innerHTML = table.innerHTML + html;
    }

}

populateSavedPasswordDetails();
document.querySelector(".save-btn").addEventListener("click", (event) => {
    event.preventDefault();
    let passwordDetails = localStorage.getItem("passwordDetails");
    if(passwordDetails == null) {
        let passwordJSON = [];
        passwordJSON.push({
            website: website.value, 
            username: username.value, 
            password: password.value
        });
        localStorage.setItem("passwordDetails", JSON.stringify(passwordJSON));
        alert("Password Details Saved.");
    } else {
        let passwordJSON = JSON.parse(passwordDetails);
        passwordJSON.push({
            website: website.value, 
            username: username.value, 
            password: password.value
        });
        localStorage.setItem("passwordDetails", JSON.stringify(passwordJSON));
        alert("Password Details Saved.");
    }

    website.value = "";
    username.value = "";
    password.value = "";

    populateSavedPasswordDetails();
});
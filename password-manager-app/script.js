const populateSavedPasswordDetails = () => {
    let table = document.querySelector("table")
    let passwordDetails = localStorage.getItem("passwordDetails");
    if(passwordDetails == null) {
        table.innerHTML = "No Details Available";
    } else {
        let passwordData = JSON.parse(passwordDetails);
        let html = ""

        for(let i = 0; i < passwordData.length; i++) {
            row = passwordData[i];
            html += `
                <tr>
                    <td>${row.website}</td>
                    <td>${row.username}</td>
                    <td>${row.password}</td>
                    <td>${"Delete"}</td>
                </tr>
            `;
        }
    }

}

document.querySelector(".btn").addEventListener("click", (event) => {
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

    populateSavedPasswordDetails();
});
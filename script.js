function handleGetFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    return { name, email, phone};
}
document.getElementById("submit-form").addEventListener("click", submit);
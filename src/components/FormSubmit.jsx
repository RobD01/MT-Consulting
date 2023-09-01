export const handleSubmit = (props) => {
  const scriptURL = props.url;
  const form = document.querySelector("#form");
  const btn = document.querySelector("#submit");

  form.addEventListener("submit", (e) => {
    btn.disabled = true;
    btn.innerHTML = "Loading...";

    console.log(form);
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        btn.disabled = false;
        btn.innerHTML = "Submit";
        alert("Success! Please wait while page reloads", response);
      })
      .catch((error) => {
        btn.disabled = false;
        btn.innerHTML = "Submit";
        alert("Error!", error.message);
      });
  });
};

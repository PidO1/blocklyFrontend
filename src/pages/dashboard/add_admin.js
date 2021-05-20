import AbstractView from "../../js/views/AbstractView";

export default class extends AbstractView
{
    constructor(params) {
        super(params);
        this.setTitle("Add admin");
    }

    async afterInit() {
      /*  function sendData()
        {
            let name = document.querySelector('#admin-name');
            let email = document.querySelector('#admin-email');
            let res = document.querySelector('');


            let xhr = new XMLHttpRequest();
            let url = "#dashbard";

            xhr.open("post", url, true);

            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onreadystatechange = function ()
            {
                if (xhr.readyState === 4 && xhr.status === 200)
                {
                    res.innerHTML = this.responseText;
                }
            };
            var data = JSON.stringify({"name": name.value, "email": email.value});
            console.log(data);
            xhr.send(data);
        }*/
    }

    //@html:start
async getHtml() {
return `
<html>
    <head>
        <title>
            Dashboard
        </title>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    </head>
</html>
<section class="form-popup" id="add-admin-form">
    <form method="post" class="admin-form-container">
        <label for="admin-name">Name</label>
        <input type="text" placeholder="Enter name" name="add-name" id="admin-name">
        <label for="admin-email">Email</label>
        <input type="email" placeholder="Enter email" id="admin-email">
        <button type="submit" >Add</button>
    </form>
</section>
<script>
 /*   function sendData()
    {
        let name = document.querySelector('#admin-name');
        let email = document.querySelector('#admin-email');
        let res = document.querySelector('');


        let xhr = new XMLHttpRequest();
        let url = "#dashbard";

        xhr.open("post", url, true);

        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function ()
        {
            if (xhr.readyState === 4 && xhr.status === 200)
            {
                res.innerHTML = this.responseText;
            }
        };
        var data = JSON.stringify({"name": name.value, "email": email.value});
        console.log(data);
        xhr.send(data);
    }*/
</script>
`;
}
//@html:end
}
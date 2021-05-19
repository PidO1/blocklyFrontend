import AbstractView from "../../js/views/AbstractView";

export default class extends AbstractView
{
    constructor(params)
    {
        super(params);
        this.setTitle("Classroom")
    }

    async afterInit() {

    }

    async getHtml() {
        return `
<script>
    let userData = [
        'Armin Arlet',
        'Levi Ackerman',
        'Erwin Smith',
        'Zeke Jaegar',
        'Hange Zoe'
    ]
</script>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Classroom</title>
</head>
<body>
<main>
    <table class="container">
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Levi Ackerman</td>
                    <td>levi@aot.com</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Erwin Smith</td>
                    <td>erwin@aot.com</td>
                </tr>
            </tbody>
        </table>
</main>
</body>
</html>`
    }
}

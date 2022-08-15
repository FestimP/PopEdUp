function Contact (){
    function ValidateForm(frm) {
        if (frm.Name.value === "") { alert('Name is required.'); frm.Name.focus(); return false; }
        if (frm.FromEmailAddress.value === "") { alert('Email address is required.'); frm.FromEmailAddress.focus(); return false; }
        if (frm.FromEmailAddress.value.indexOf("@") < 1 || frm.FromEmailAddress.value.indexOf(".") < 1) { alert('Please enter a valid email address.'); frm.FromEmailAddress.focus(); return false; }
        if (frm.Comments.value ==="") { alert('Please enter comments or questions.'); frm.Comments.focus(); return false; }
        return true; }

    return(
        <form id="ContactUs100" onSubmit={ValidateForm}>
<table  cellpadding="8" cellspacing="0">
<tr> <td>
<label for="Name">Name*:</label>
</td> <td>
<input name="Name" type="text" maxlength="60" />
</td> </tr> <tr> <td>
<label for="PhoneNumber">Phone number:</label>
</td> <td>
<input name="PhoneNumber" type="text" maxlength="43" />
</td> </tr> <tr> <td>
<label for="FromEmailAddress">Email address*:</label>
</td> <td>
<input name="FromEmailAddress" type="text" maxlength="90" />
</td> </tr> <tr> <td>
<label for="Comments">Comments*:</label>
</td> <td>
<textarea name="Comments" rows="7" cols="40"></textarea>
</td> </tr> <tr> <td>
* - required fields
</td> <td>
<div><a href="/" title="form to email">form to email</a></div>
<input name="Submit" type="submit" value="Submit" />
</td> </tr>
</table>
</form>
    )
}
export default Contact;
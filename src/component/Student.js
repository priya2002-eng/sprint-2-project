import react from 'react'


//functional component
function Student(){
    return (
        <div className ="Student">
            <h2>Student Page!!!!!!</h2>
             <form id="form" action="/">
            <h1>Sign Up</h1>
            <div class="input-control">
                <label for="firstname">First name</label>
                <input id="firstname" name="firstname" type="text"/>
                <div class="error"></div>
           </div>
           <div class="input-control">
                <label for="lastname">Last name</label>
                <input id="lastname" name="lastname" type="text"/>
                <div class="error"></div>
           </div>
            <div class="input-control">
                <label for="rollno">Roll NO</label>
                <input id="rollno" name="rollno" type="number"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="qualification">Qualification</label>
                <input id="qualification"name="qualification" type="text"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="date">Course</label>
                <input id="date"name="date" type="text"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="qualification">Year</label>
                <input id="date"name="date" type="number"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="date">Certificate</label>
                <input id="date"name="date" type="text"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="date">Hall Ticket Number</label>
                <input id="date"name="date" type="number"/>
                <div class="error"></div>
            </div>

            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Student;
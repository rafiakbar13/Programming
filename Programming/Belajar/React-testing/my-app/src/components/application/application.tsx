export const Application = () => {
    return (
        <>
            <h1>Job Aplication form</h1>
            <h2>Section 1</h2>
            <p>All Fields are mandatory</p>
            <img src="" alt="a person with a laptop" />
            <form action="">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Fullname" value='Rafi' onChange={() => ("")} />
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <input type="text" id="bio" />
                </div>
                <div>
                    <label htmlFor="job-location">Name</label>
                    <select name="" id="job-location">
                        <option value="">Select Country</option>
                        <option value="US">United State</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="IN">India</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="terms" />
                        I agree to the terms and conditions
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
};
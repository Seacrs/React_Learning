export default function App(){
  function signUp(formData){
    const data = Object.fromEntries(formData);
    const dietaryData = formData.getAll("dietaryRestrictions")
    const allData = {
      ...data,
      dietaryData
    }
    console.log(allData)
  }
  return(
    <section>
      <h1>SignUp</h1>
      <form action = {signUp}>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" defaultValue="joe@Schmoe.net" name="email" placeholder="joe@schmoe.com"/>
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name ="password" placeholder="***********" />
        <br />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label htmlFor="">
            <input type="radio" name="employmentStatus" defaultChecked={true} value="unemployed"/>
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true}value="Part-time"/>
            Part-time
          </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="Full-time"/>
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Deitary restrictions:</legend>
          <label htmlFor="">
            <input type="Checkbox" name="dietaryRestrictions" defaultChecked={true} value="Kosher"/>
            Kosher
          </label>
          <label>
            <input type="Checkbox" name="dietaryRestrictions" value="Vegan"/>
            Vegan
          </label>
          <label>
            <input type="Checkbox" name="dietaryRestrictions" value="Gluten-free"/>
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
          <select id="favColor" name="favColor" defaultValue="">
            <option value="">-- Choose a color</option>
            <option value = "Red">Red</option>
            <option value = "Orange">Orange</option>
            <option value = "Yellow">Yellow</option>
            <option value = "Green">Green</option>
            <option value = "Blue">Blue</option>
            <option value = "Indigo">Indigo</option>
            <option value = "Violet">Violet</option>
          </select>
        
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
const Create = () => {
    return (
        <div className="create">
            <h2>Add a new Blog</h2>

            <form>
                <label>Blog title: </label>
                <input 
                type="text"
                required />

                <label>Blog title: </label>
                <textarea required>

                </textarea>
                <label>Blog author:</label>
                <select>
                    <option value ="Mario">Mario</option>
                    <option value ="Yoshi">Yoshi</option>
                </select>
                <button>Add blog</button>

            </form>

        </div>
      );
}
 
export default Create; 
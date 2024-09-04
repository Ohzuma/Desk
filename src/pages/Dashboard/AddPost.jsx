import { useRef, useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md"
const AddPost = () => {
    const inputRef = useRef();
    const [fileContent, setFileContent] = useState(null);
    const [fileType, setFileType] = useState('');
    const focusInput = () => {
        // Focus the input element using the ref
        inputRef.current.click(); 
  
        
      };

const handleChange =(e)=>{
  console.log(e.target.files[0])
}

  return (
    <section className=' bg-slate-50 mt-5 w-full md:w-[95%] px-3 md:px-8 h-full py-5  rounded-lg flex flex-col items-center gap-8 '>
     <div className=" md:mx-[5rem] w-full">
        <form action="" className="w-full flex flex-col gap-5">
            <div className=' '>
                
                <div className='h-[13rem] bg-white border border-dotted border-black w-full flex flex-col justify-center items-center '>
                    <span onClick={focusInput}  className="text-3xl cursor-pointer "><MdOutlineCloudUpload/></span>
                <input required type="file" name="file" onChange={handleChange} ref={inputRef}  id="file" hidden  accept=".png, .jpg, .jpeg"  />
                <button onClick={focusInput} type='button' className="text-xl font-semibold cursor-pointer">Browse File</button>

                </div>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=' post_input'>
                
                <input type="text" placeholder="Enter Title" />
            </div>
            <div className='w-full   post_input'>
                <select name="category" id="category">
                  <p>select</p>
                  <option value="value1" >Select Category</option>
                  <option value="value2">value2</option>
                  <option value="value3">value3</option>
                  <option value="value4">vslue4</option>
                </select>
           
            </div>
          </div>
          <div className='w-full h-[15rem]  post_input'>
              <textarea name="" id="" placeholder="Write Description"></textarea>
            </div>
        </form>
     </div>
  
    </section>
  )
}

export default AddPost

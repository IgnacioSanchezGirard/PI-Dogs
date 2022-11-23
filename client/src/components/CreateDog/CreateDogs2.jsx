import { useEffect, useState } from "react";
import { getTemperaments, postDog } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux"

import "../../App";
import "../CreateDog/CreateDog2.css"

export const validaciones = (data) => {
  let error = {};

  if(!data.name){
    error.name = "Breed is required"
  }
  if(
    !data.name.trim() ||
    !/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(data.name) ||
    data.name.length < 5
  ) {
    error.name = 'must have a length of 5';
  }
  if(!data.heightMin &&  !data.heightMax) {
    error.heightMax = 'Height is required';
  } else if (data.heightMin > data.heightMax) {
    error.heightMax = "relationships are reversed";
  } else if (/[a-zA-Z]/.test(data.heightMax && data.heightMin)) {
    error.heightMax = 'Can´t contain letters';
  }

  if(!data.weightMin &&  !data.weightMax) {
    error.weightMax = 'Weight is required';
  }else if (data.heightMin > data.weightMax) {
    error.weightMax = "relationships are reversed";
  } else if (/[a-zA-Z]/.test(data.weightMax && data.weightMin)) {
    error.weightMax = 'Can´t contain letters';
  }
  if(!data.lifeSpan) {
    error.lifeSpan = "Life Span is required"
  }

  return error;
}

export default function Formdog() {
  const [error, setError] = useState({})
  const temperaments = useSelector(state=> state.temperaments)
  // console.log(temperaments);
  const dispatch = useDispatch()

  
  const [form ,setForm] = useState({
    name: "",
    temperaments: [],
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    lifeSpan: ""
  })
  
  useEffect(()=>{
    dispatch(getTemperaments())
    setError(
      validaciones(form)
    )
  },[dispatch, form])


  const onChange = (event)=>{
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  
  const tempOptions = (event) => {
    setForm({
      ...form,
      temperaments: [...form.temperaments, event.target.value]
    })
  }

  const onSubmit = () => {
    dispatch(postDog({
      name: form.name,
      min_height: form.heightMin,
      max_height: form.heightMax,
      min_weight: form.weightMin,
      max_weight: form.weightMax,
      years: form.lifeSpan,
      temperament: `${form.temperaments.toString()} years`
    }))
  }

  return (
    <div className="contenedor">
      <section className="">
        <form name="fvalida" className="formdetail" method="get" action="/home">
          <button className="b-detail" type="submit">
            Back
          </button>
        </form>
      </section>
        
      <section className="form">
        <div className="headerform">
          <h1>New Dog</h1>
          <br />
        </div>
        <div className="containform"style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

       
        <form onSubmit={onSubmit}>
          <div className="form-g">
            <label>Breed</label>
            <input
              onChange={onChange}
              value={form.breed}
              name="name"
              type="text"
              placeholder="enter your breed"
            ></input>
            <p className="error">{error.name}</p>
          </div>
          <div className="form-g">
            <label>Temperaments</label>
            <div>
              <select onChange={tempOptions}>
                {temperaments &&
                  temperaments.map((e) => (
                    <option value={e.name} key={e.id}>
                      {e.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="form-g">

          <label>temperaments selected</label>
            <div className="tempsCont">
              {
                form.temperaments.map(element => (
                  <p>{element}</p>
                ))
              }
            </div>
            </div>
          <div className="form-g">
            <label>Height ( CM )</label>
            <input
              onChange={onChange}
              value={form.heightMin}
              min="10"
              max="200"
              maxLength="3"
              type="number"
              name="heightMin"
              step="1"
              placeholder="min"
            />
            <p className="error">{error.heightMax}</p>
            <input
              onChange={onChange}
              value={form.heightMax}
              type="number"
              name="heightMax"
              min="10"
              max="200"
              step="1"
              placeholder="max"
            />
          </div>

          <div className="form-g">
            <label>Weight ( KG )</label>
            <input
              onChange={onChange}
              value={form.weightMin}
              maxLength="3"
              type="number"
              name="weightMin"
              min="1"
              max="100"
              step="1"
              placeholder="min"
            />
            <p className="error">{error.weightMax}</p>
            <input
              onChange={onChange}
              value={form.weightMax}
              type="number"
              name="weightMax"
              min="1"
              max="100"
              step="1"
              placeholder="max"
            />
          </div>
          <div className="form-g">
            <label>life_span</label>
            <input
              onChange={onChange}
              value={form.lifeSpan}
              name= "lifeSpan"
              type="number"
              placeholder=" life span in years"
            ></input>
             <p className="error">{error.lifeSpan}</p>
          </div>

          <br />
          <div>
            <button type="submit">
              SUBMIT
            </button>
          </div>
        </form>
        </div>
      </section>
    </div>
  );
}

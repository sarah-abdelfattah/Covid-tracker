import { useEffect, useState, useReducer } from 'react';
import { getAddress } from '@/client/utils';
import { Close, Location } from "@/client/assets"
import { useUserInfo, useUpdateUser } from "@/client/api"
import { Toast } from '@/client/components';

const reducer = (state, action) => {
  switch (action.type) {
    case "headache":
      return { ...state, headache: !state.headache };
    case "cough":
      return { ...state, cough: !state.cough };
    case "soreThroat":
      return { ...state, soreThroat: !state.soreThroat };
    case "chestPain":
      return { ...state, chestPain: !state.chestPain };
    case "fever":
      return { ...state, fever: !state.fever };
    case "feverDegree":
      return { ...state, feverDegree: action.data };
    case "type":
      return { ...state, type: action.data };
    default:
      return state;
  }
};

const getCountry = (address) => {
  let separatedAddress = address.split(',')
  return separatedAddress[separatedAddress.length - 1].trim()
}

export const AddDiagnosis = ({ handleClose }) => {
  const [symptoms, dispatch] = useReducer(reducer, { headache: false, cough: false, soreThroat: false, chestPain: false, fever: false, feverDegree: 36, type: 'case' })
  const [location, setLocation] = useState({ address: '', latitude: '', longitude: '' })
  const { data } = useUserInfo()
  const { mutate: updateUser, status } = useUpdateUser({})

  const handleChange = (target) => dispatch({ type: target.name, data: target.value })

  const handleSubmit = () => {
    let diagnosis = data?.user_metadata?.diagnosis || []
    diagnosis.push({ ...symptoms, location: getCountry(location.address), timeStamp: new Date() })
    updateUser({ id: data.user_id, data: { user_metadata: { diagnosis } } })
    handleClose()
  }

  const handleGetLocation = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        let address = await getAddress(position.coords.latitude, position.coords.longitude)
        setLocation({
          address: address,
          lat: parseFloat(position.coords.latitude),
          lng: parseFloat(position.coords.longitude)
        })
      });
    } else {
      console.log("Not Available");
    }
  }

  useEffect(() => {
    setLocation(data?.user_metadata?.location)
  }, [data])

  useEffect(() => {
    if (!symptoms.fever)
      dispatch({ type: 'feverDegree', data: 36 })
  }, [symptoms.fever])

  return <div className='modalContainer addDiagnosisModal'>
    <div className="modalHeader">
      <h3>Add diagnosis</h3>
      <div onClick={handleClose}><Close /></div>
    </div>

    <div className="modalDetails">
      <p>We are sorry to hear that you have been diagnosed with covid-19. We hope you get well soon!</p>

      <h4>What is your case?</h4>
      <div>
        <input type="radio" id="case" name="type" value="case" onClick={(e) => handleChange(e.target)} />
        <label htmlFor="case">Case</label>
      </div>
      <div>
        <input type="radio" id="recovered" name="type" value="recovered" onClick={(e) => handleChange(e.target)} />
        <label htmlFor="recovered">Recovered</label>
        <div>
        </div>
        <input type="radio" id="death" name="type" value="death" onClick={(e) => handleChange(e.target)} />
        <label htmlFor="death">Death</label>
      </div>

      <h4>What symptoms did you experience?</h4>
      <div>
        <label htmlFor='headache'>Headache</label>
        <input type="checkbox" name='headache' value={symptoms.headache} onClick={(e) => handleChange(e.target)} />
      </div>
      <div>
        <label htmlFor='cough'>Cough</label>
        <input type="checkbox" name='cough' value={symptoms.cough} onClick={(e) => handleChange(e.target)} />
      </div>
      <div>
        <label htmlFor='soreThroat'>Sore Throat</label>
        <input type="checkbox" name='soreThroat' value={symptoms.soreThroat} onClick={(e) => handleChange(e.target)} />
      </div>
      <div>
        <label htmlFor='chestPain'>Chest Pain</label>
        <input type="checkbox" name='chestPain' value={symptoms.chestPain} onClick={(e) => handleChange(e.target)} />
      </div>
      <div>
        <label htmlFor='fever'>Fever</label>
        <input type="checkbox" name='fever' value={symptoms.fever} onClick={(e) => handleChange(e.target)} />
      </div>
      {symptoms.fever ? <div>
        <label htmlFor='feverDegree'>Temperature</label>
        <input type="number" name='feverDegree' value={symptoms.feverDegree} onChange={(e) => handleChange(e.target)} />
      </div> : null}

      <h4>Find your location</h4>
      <div>
        <input type="text" id="location" name="location" value={location.address} disabled />
        <Location onClick={handleGetLocation} />
      </div>
    </div>

    <div className='modalFooter'>
      <button className='btn' onClick={handleSubmit}>Submit!</button>
    </div>

    <Toast status={status} message="Recorded diagnoses" />
  </div>
}
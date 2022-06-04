import { useReducer, useEffect, useState } from 'react';
import { useUserInfo, useUpdateUser } from "@/client/api"
import { Map, Toast } from '@/client/components';
import { getAddress } from '@/client/utils';
import { Location } from '@/client/assets';

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.data };
    case "email":
      return { ...state, email: action.data };
    case "phone":
      return { ...state, phone: action.data };
    case "age":
      return { ...state, age: action.data };
    case "location":
      return { ...state, location: action.data };
    default:
      return state;
  }
};

export const Profile = () => {
  const [currentData, dispatch] = useReducer(reducer, { name: '', email: '', phone: '', age: '', location: '' });
  const [showMap, setShowMap] = useState(false)
  const { data } = useUserInfo()
  const { mutate: updateUser, isSuccess: updatedUserSuccessfully } = useUpdateUser({})

  useEffect(() => {
    handleChange('name', data?.user_metadata?.name || data?.name)
    handleChange('email', data?.email)
    handleChange('phone', data?.user_metadata?.phone)
    handleChange('age', data?.user_metadata?.age)
    handleChange('location', data?.user_metadata?.location || { lat: 29.9841575, lng: 31.4401621 })
  }, [data])

  const handleSubmit = () => updateUser({ id: data.user_id, data: { user_metadata: currentData } })
  const handleChange = (type, data) => dispatch({ type, data })
  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        let address = await getAddress(position.coords.latitude, position.coords.longitude)
        handleChange('location', {
          address: address,
          lat: parseFloat(position.coords.latitude),
          lng: parseFloat(position.coords.longitude)
        })
        setShowMap(true)
      });
    } else {
      console.log("Not Available");
    }
  }

  return (
    <div className='container'>
      <div className='header'>
        <h2>Profile</h2>
        <button className='btn' onClick={handleSubmit}>Update</button>
      </div>

      <div className='details profileDetails'>
        <div>
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" name="fname" value={currentData.name} onChange={(e) => { handleChange('name', e.target.value) }} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={currentData.email} disabled />
          <span>{data.email_verified ? '' : 'Not verified'}</span>
        </div>
        <div>
          <label htmlFor="tel">Phone number</label>
          <input type="tel" id="tel" name="tel" value={currentData.phone} onChange={(e) => { handleChange('phone', e.target.value) }} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" min="0" value={currentData.age} onChange={(e) => { handleChange('age', e.target.value) }} />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" value={currentData.location.address} disabled onChange={(e) => { handleChange('location', e.target.value) }} />
          <Location onClick={handleGetLocation} />
        </div>

        {showMap ?
          <div className="google-map">
            <Map
              isMarkerShown
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_MAPS_API}&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              location={currentData.location}
            />
          </div> : null}
      </div>

      <Toast success={updatedUserSuccessfully} message="Profile updated" />
    </div>
  )
}

export const ProfileLoading = () => {
  return (
    <div className='container'>
      <div className='header headerShimmer'>
        <h2></h2>
        <button></button>
      </div>

      <div className='details profileShimmer'>
        <div>
          <label></label>
          <input disabled />
        </div>
        <div>
          <label></label>
          <input disabled />
        </div>
        <div>
          <label></label>
          <input disabled />
        </div>
        <div>
          <label></label>
          <input disabled />
        </div>
        <div>
          <label></label>
          <input disabled />
        </div>
      </div>
    </div>
  )
}
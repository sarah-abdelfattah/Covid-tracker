import { useEffect, useState, useMemo } from 'react';
import { useUsers } from '@/client/api';
import { AddDiagnosis } from '@/client/components';
import { getAddress, getLatLng } from '@/client/utils';
import { MapContainer, TileLayer, useMap, Popup, Circle } from 'react-leaflet'

// const getRecords = (data) => data?.map((user) => {
//   return user.user_metadata?.diagnosis?.map((record) => {
//     return { ...record, location: user.user_metadata?.location?.address }
//   })
// }).filter(element => element !== undefined)

const getRecords = (data) => (data?.map(user => user.user_metadata?.diagnosis))
const reduceObj = (object) => (Object.values(object)).reduce((value, key) => value.concat(key, object[key]))

const groupByLocation = (data) => {
  let groupedData = []
  let countries = new Set(data.map(record => record?.location).filter(element => element !== undefined))

  countries.forEach((country) => {
    const records = data.filter(element => element?.location === country);
    groupedData.push({ country, records })
  })

  return groupedData
}

const decodeCountries = async (data) => {
  for (let i = 0; i < data.length; i++) {
    let result = await getLatLng(data[i].country)
    data[i] = { ...data[i], lat: result.lat, lng: result.lng }
  }

  return data
}

function compare(a, b) {
  if (a.records.length < b.records.length) return 1;
  if (a.records.length > b.records.length) return -1;
  return 0;
}

const renderData = (data) => data?.map((record, index) => (
  <Circle
    key={index}
    center={[record.lat, record.lng]}
    pathOptions={{
      color: 'red',
      fillColor: 'red',
    }}
    fillOpacity={0.5}
    radius={record?.records?.length * 1500}
  >
    <Popup>
      <div className="popup">
        <p className="popupTitle">{record.country}</p>
        <p className="popupCases"> {record?.records?.length} cases</p>
      </div>
    </Popup>
  </Circle>
))

const filterByType = (originalDAta, type) => {
  let myData = []
  for (let i = 0; i < originalDAta.length; i++) {
    let filtered = originalDAta[i]?.records?.filter((element) => element.type === type)

    let temp = {
      ...originalDAta[i],
      records: filtered,
    }
    myData.push(temp)
  }
  return myData
}

export const Dashboard = () => {
  const [showModal, setShowModal] = useState(true)
  const [location, setLocation] = useState({ lat: 29.9841575, lng: 31.4401621 })
  const [formattedData, setFormattedData] = useState([])
  const { data } = useUsers()

  const handleAdd = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  let records = useMemo(() => groupByLocation(reduceObj(getRecords(data))), [data])

  useEffect(() => {
    handleGetLocation()
  }, [])

  useEffect(() => {
    updateData()
  }, [records])

  const updateData = async () => {
    let res = await decodeCountries(records)
    setFormattedData(res)
  }

  const handleGetLocation = () => {
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

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <div className='container'>
      <div className='header'>
        <h2>
          Dashboard
        </h2>
        <button className='btn primaryBtn' onClick={handleAdd}>Add diagnosis</button>
      </div>
      <div className='details dashboardDetails'>
        <MapContainer
          center={[location.lat, location.lng]} zoom={4}
          scrollWheelZoom={false}
          className="dashboardMap"
        >
          <ChangeView center={[location.lat, location.lng]} zoom={4} />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {renderData(formattedData)}
        </MapContainer>
        <div className='statistics'>
          <div className='type'>
            <ul>  <h3>Total cases</h3>  </ul>
            <p><span>Egypt</span> <span>23</span></p>
            {filterByType(formattedData, 'case').sort(compare).map((record) => (<p><span>{record.country}</span> <span>{record.records.length}</span></p>))}
          </div>

          <div className='type'>
            <ul> <h3>Total recovered</h3>  </ul>
            {filterByType(formattedData, 'recovered').sort(compare).map((record) => (<p><span>{record.country}</span> <span>{record.records.length}</span></p>))}
          </div>

          <div className='type'>
            <ul>  <h3>Total deaths</h3>  </ul>
            {filterByType(formattedData, 'death').sort(compare).map((record) => (<p><span>{record.country}</span> <span>{record.records.length}</span></p>))}
          </div>
        </div>
      </div>

      {showModal ?
        <div className='modal'>
          <AddDiagnosis handleClose={handleClose} />
        </div> : null}
    </div>
  )
}

export const DashboardLoading = () => {
  return (
    <div className='container shimmerContainer'>
      <div className='header headerShimmer'>
        <h2></h2>
        <button className='btn primaryBtn'></button>
      </div>
      <div className='details dashboardShimmer'>
        <div className='map'></div>
        <div className='statistics'>
          <div className='type'>
            <ul></ul>
            <p><span></span> <span></span></p>
            <p><span></span> <span></span></p>
            <p><span></span> <span></span></p>
          </div>

          <div className='type'>
            <ul></ul>
            <p><span></span> <span></span></p>
            <p><span></span> <span></span></p>
            <p><span></span> <span></span></p>
          </div>

          <div className='type'>
            <ul></ul>
            <p><span></span> <span></span></p>
            <p><span></span> <span></span></p>
            <p><span></span> <span></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
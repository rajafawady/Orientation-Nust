import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  maxWidth: '80vw',
  width: '80%',
  height: '60vh'
};

const center = {
  lat: 33.64314972113434,
  lng: 72.99296883011114,
};

function MyComponent() {
  return (
    <div className='flex flex-col md:flex-row w-full'>
    <div className='w-full flex flex-col  px-12 md:w-1/2'>
      <div className='text-white text-xl font-bold md:text-6xl'>Campus</div>
      <div className='text-white md:text-xl font-sans font-bold mt-8'>NUST is located at Sector H-12, Islamabad, opposite to Kashmir Highway. It is about 10 Kilometer from I.J.P Road (Mandi Morr) and is 7 Kilometer from Golra Morr, Peshawar Road.</div>
      <div className='text-white md:text-xl font-sans font-bold mt-4'>The campus is spread over 707 acres of land. Sports facilities such as cricket, volleyball courts, basketball, soccer and squash courts are present while hockey stadium and tennis courts are under construction. Hostels for both male and female students are present inside the campus.</div>

    </div>
      <div className='w-full flex justify-center md:w-1/2 mt-12 md:mt-0'>
        <LoadScript
          googleMapsApiKey="AIzaSyD7DcrKzWYvzY4uTE7WfcY8KTISvkPCYr8"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
          >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  )
}

export default React.memo(MyComponent)
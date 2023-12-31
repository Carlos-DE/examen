"use client";

import { FC } from 'react'
import { MapContainer, MapContainerProps, TileLayer } from 'react-leaflet'
import L, { MapOptions } from 'leaflet'
import 'leaflet/dist/leaflet.css'

L.Marker.prototype.options.icon = L.icon({
  iconUrl: '/leaflet-images/map-marker.svg',
  iconRetinaUrl: '/leaflet-images/map-marker.svg',
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  shadowUrl: '/leaflet-images/marker-shadow.png',
  shadowRetinaUrl: '/leaflet-images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
})

const boundsPadding = 0.01

const Map: FC<
  {
    center: [number, number]
    zoom: number
  } & MapContainerProps &
    MapOptions
> = ({ children, ...rest }) => {
  return (
    <MapContainer
      className='h-full flex-1'
      {...rest}
      style={
        {height: "100%"}
      }
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      />
      {children}
    </MapContainer>
  )
}

export default Map
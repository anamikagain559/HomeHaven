import { MapContainer, TileLayer , Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import Pin from './Pin/Pin';


function MapPage({items}) {
  
  return (
    <MapContainer center={[52.4797, -1.90269]} zoom={12} scrollWheelZoom={false} className="w-full h-[2500px] mt-5">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   {items.map(item=>(
      <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>
  )
}

export default MapPage
